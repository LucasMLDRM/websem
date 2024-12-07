import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Turno } from '../types';
import './edit-turn.css'

interface User {
  id: number;
  userName: string;
}

interface EditarTurnoModalProps {
  isOpen: boolean;
  onClose: () => void;
  turno: Turno | null;
  onTurnoEditado: () => void;
}

const EditarTurnoModal: React.FC<EditarTurnoModalProps> = ({ isOpen, onClose, turno, onTurnoEditado }) => {
  const [pacientes, setPacientes] = useState<User[]>([]);
  const [asistentes, setAsistentes] = useState<User[]>([]);
  const [selectedPaciente, setSelectedPaciente] = useState<number | null>(null);
  const [selectedAsistente, setSelectedAsistente] = useState<number | null>(null);
  const [fechaDesde, setFechaDesde] = useState<string>('');
  const [fechaHasta, setFechaHasta] = useState<string>('');
  const [horaInicio, setHoraInicio] = useState<string>('08:00');
  const [horaFin, setHoraFin] = useState<string>('12:00');
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (turno) {
      setSelectedPaciente(turno.patientId);
      setSelectedAsistente(turno.carerId);
      const formattedDate = turno.date.includes('T')
        ? turno.date.split('T')[0]
        : new Date(turno.date).toISOString().split('T')[0];
      setFechaDesde(formattedDate);
      setFechaHasta(formattedDate);
      setHoraInicio(turno.startTime);
      setHoraFin(turno.endTime);
    }
  }, [turno]);

  const obtenerPacientesYAsistentes = async () => {
    try {
      const pacientesResponse = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const asistentesResponse = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Asistente', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPacientes(pacientesResponse.data);
      setAsistentes(asistentesResponse.data);
    } catch (error) {
      setError('Error al cargar pacientes y asistentes');
    }
  };

  useEffect(() => {
    if (isOpen) {
      obtenerPacientesYAsistentes();
    }
  }, [isOpen]);

  const handleEditarTurno = async () => {
    if (!selectedPaciente || !selectedAsistente || !horaInicio || !horaFin || !fechaDesde || !fechaHasta) {
      setError('Por favor, complete todos los campos');
      return;
    }

    try {
      if (!token) throw new Error('No se encontró el token');

      const turnoEditado = {
        id: turno?.id,
        date: fechaDesde,
        dateTo: fechaHasta,
        startTime: horaInicio,
        endTime: horaFin,
        carerId: selectedAsistente,
        patientId: selectedPaciente,
      };

      await axios.put(`https://emmanuel.somee.com/api/v1/Schedulers`, turnoEditado, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onTurnoEditado();
      onClose();
    } catch (error) {
      setError('Error al editar el turno');
    }
  };

  if (!isOpen || !turno) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Turno</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>Paciente</label>
          <select value={selectedPaciente || ''} onChange={(e) => setSelectedPaciente(Number(e.target.value))}>
            <option value="">Seleccione un paciente</option>
            {pacientes.map((paciente) => (
              <option key={paciente.id} value={paciente.id}>{paciente.userName}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Asistente</label>
          <select value={selectedAsistente || ''} onChange={(e) => setSelectedAsistente(Number(e.target.value))}>
            <option value="">Seleccione un asistente</option>
            {asistentes.map((asistente) => (
              <option key={asistente.id} value={asistente.id}>{asistente.userName}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Fecha Desde</label>
          <input type="date" value={fechaDesde} onChange={(e) => setFechaDesde(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Fecha Hasta</label>
          <input type="date" value={fechaHasta} onChange={(e) => setFechaHasta(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Desde</label>
          <input type="time" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Hasta</label>
          <input type="time" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} />
        </div>
        <div className="modal-actions">
          <button className='edit-turn-btn' onClick={handleEditarTurno}>Guardar Cambios</button>
          <button className='edit-turn-btn' onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EditarTurnoModal;
