import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './CrearTurnoModal.css';

interface User {
  id: number;
  userName: string;
}

interface CrearTurnoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTurnoCreado: () => void;
}

const CrearTurnoModal: React.FC<CrearTurnoModalProps> = ({ isOpen, onClose, onTurnoCreado }) => {
  const [pacientes, setPacientes] = useState<User[]>([]);
  const [asistentes, setAsistentes] = useState<User[]>([]);
  const [selectedPaciente, setSelectedPaciente] = useState<number | null>(null);
  const [selectedAsistente, setSelectedAsistente] = useState<number | null>(null);
  const [fechaDesde, setFechaDesde] = useState<string>(new Date().toISOString().split('T')[0]);
  const [horaDesde, setHoraDesde] = useState<string>('08:00');
  const [fechaHasta, setFechaHasta] = useState<string>(new Date().toISOString().split('T')[0]);
  const [horaHasta, setHoraHasta] = useState<string>('12:00');
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem('token');

  const obtenerPacientes = async () => {
    try {
      const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPacientes(response.data);
    } catch {
      setError('Error al cargar pacientes');
    }
  };

  const obtenerAsistentes = async () => {
    try {
      const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Asistente', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAsistentes(response.data);
    } catch {
      setError('Error al cargar asistentes');
    }
  };

  useEffect(() => {
    if (isOpen) {
      obtenerPacientes();
      obtenerAsistentes();
    }
  }, [isOpen]);

  const handleCrearTurno = async () => {
    if (!selectedPaciente || !selectedAsistente || !horaDesde || !horaHasta || !fechaDesde || !fechaHasta) {
      setError('Por favor, complete todos los campos');
      return;
    }

    try {
      if (!token) throw new Error('No se encontró el token');

      const nuevoTurno = {
        Date: fechaDesde,
        startTime: horaDesde,
        DateTo: fechaHasta,
        endTime: horaHasta,
        carerId: selectedAsistente,
        patientId: selectedPaciente,
      };

      await axios.post('https://emmanuel.somee.com/api/v1/Schedulers', nuevoTurno, {
        headers: { Authorization: `Bearer ${token}` },
      });

      onTurnoCreado();
      onClose();
    } catch {
      setError('Error al crear el turno');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="moda-overlay">
      <div className="modal-content">
        <h2>Crear Turno</h2>

        {error && <p className="error">{error}</p>}

        <div className="form-group">
          <label>Paciente</label>
          <select value={selectedPaciente || ''} onChange={(e) => setSelectedPaciente(Number(e.target.value))}>
            <option value="">Seleccione un paciente</option>
            {pacientes.map((paciente) => (
              <option key={paciente.id} value={paciente.id}>
                {paciente.userName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Asistente</label>
          <select value={selectedAsistente || ''} onChange={(e) => setSelectedAsistente(Number(e.target.value))}>
            <option value="">Seleccione un asistente</option>
            {asistentes.map((asistente) => (
              <option key={asistente.id} value={asistente.id}>
                {asistente.userName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Fecha Desde</label>
          <input type="date" value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Hora Desde</label>
          <input type="time" value={horaDesde} onChange={(e) => setHoraDesde(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Fecha Hasta</label>
          <input type="date" value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Hora Hasta</label>
          <input type="time" value={horaHasta} onChange={(e) => setHoraHasta(e.target.value)} />
        </div>

        <div className="modal-actions">
          <button className="turn-btn" onClick={handleCrearTurno}>Crear Turno</button>
          <button className="turn-btn" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CrearTurnoModal;
