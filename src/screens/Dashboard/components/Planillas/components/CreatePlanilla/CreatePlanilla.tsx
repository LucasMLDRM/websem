import React, { useState } from 'react';
import axios from 'axios';
import { TbX } from 'react-icons/tb';
import './CreatePlanilla.css';

interface CreatePlanillaProps {
  onClose: () => void;
  onSuccess: () => void;
}

const CreatePlanilla: React.FC<CreatePlanillaProps> = ({ onClose, onSuccess }) => {
  const [planillaName, setPlanillaName] = useState('');
  const [description, setDescription] = useState(''); // Estado para la descripción
  const [loading, setLoading] = useState(false);

  const handleCreatePlanilla = async () => {
    if (planillaName.trim() === '') {
      alert('El nombre de la planilla no puede estar vacío.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'https://emmanuel.somee.com/api/v1/Spreadsheets',
        {
          name: planillaName,
          description: description || 'esto es una planilla para todos' // Utiliza la descripción ingresada por el usuario o un valor por defecto
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      alert('Planilla creada con éxito');
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error al crear la planilla:', error);
      alert('Ocurrió un error al crear la planilla. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-planilla-overlay">
      <div className="create-planilla-modal">
        <div className="modal-header">
          <h2>Crear Nueva Planilla</h2>
          <button className="close-button" onClick={onClose}>
            <TbX />
          </button>
        </div>
        <div className="modal-content">
          <label>
            Nombre de la Planilla:
            <input
              type="text"
              value={planillaName}
              onChange={(e) => setPlanillaName(e.target.value)}
              placeholder="Ingrese el nombre de la planilla"
            />
          </label>
          <label>
            Descripción de la Planilla:
            <textarea
              className='desc-input'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese una descripción para la planilla"
            />
          </label>
        </div>
        <div className="modal-footer">
          <button className="create-button" onClick={handleCreatePlanilla} disabled={loading}>
            {loading ? 'Creando...' : 'Crear Planilla'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlanilla;
