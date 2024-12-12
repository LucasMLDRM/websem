import React, { useState } from 'react';
import axios from 'axios';
import '../EditStepModal/EditStepModal.css';
import { TbX } from 'react-icons/tb';

interface AddStepModalProps {
  spreadsheetId: number;
  onSave: (step: any) => void;
  onClose: () => void;
}

const responseTypes = [
  { value: 'Libre', label: 'Libre' },
  { value: 'Numerico', label: 'Numérico' },
  { value: 'Fecha', label: 'Fecha' },
  { value: 'MultipleOpciones', label: 'Multiple Opciones' },
  { value: 'Hora', label: 'Hora' }
];

const mapTipoRespuestaToAnswerType = (tipoRespuesta: string) => {
  switch (tipoRespuesta) {
    case 'Libre':
      return 1;
    case 'Numerico':
      return 2;
    case 'Fecha':
      return 3;
    case 'MultipleOpciones':
      return 4;
    case 'Hora': // Nueva opción
      return 5;
    default:
      return 1;
  }
};

const AddStepModal: React.FC<AddStepModalProps> = ({ spreadsheetId, onSave, onClose }) => {
  const [consigna, setConsigna] = useState('');
  const [tipoRespuesta, setTipoRespuesta] = useState('Libre');
  const [opciones, setOpciones] = useState<string[]>([]);
  const [obligatorio, setObligatorio] = useState(false);
  const [newOption, setNewOption] = useState('');

  const addOption = () => {
    if (newOption) {
      setOpciones([...opciones, newOption]);
      setNewOption('');
    }
  };

  const removeOption = (index: number) => {
    setOpciones(opciones.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    const newStep = {
      text: consigna,
      isRequired: obligatorio,
      answerType: mapTipoRespuestaToAnswerType(tipoRespuesta),
      options: opciones.join(','),
      spreadsheetId: spreadsheetId
    };

    try {
      await axios.post(
        'https://emmanuel.somee.com/api/v1/SpreadsheetItems',
        newStep,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      onSave(newStep);
      onClose();
    } catch (error) {
      console.error('Error al añadir el paso:', error);
      alert('Hubo un error al añadir el paso. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="edit-step-modal-overlay">
      <div className="edit-step-modal">
        <div className="modal-header">
          <h2>Añadir Step</h2>
          <button className="close-button" onClick={onClose}>
            <TbX />
          </button>
        </div>
        <div className="modal-content">
          <label>
            Consigna:
            <input
              className="consigna"
              type="text"
              value={consigna}
              onChange={(e) => setConsigna(e.target.value)}
            />
          </label>
          <label>
            Tipo de Respuesta:
            <select
              value={tipoRespuesta}
              onChange={(e) => setTipoRespuesta(e.target.value)}
            >
              {responseTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          {tipoRespuesta === 'MultipleOpciones' && (
            <>
              <label>Opciones:</label>
              <div className="options-list">
                {opciones.map((option, index) => (
                  <div key={index} className="option-item">
                    {option}
                    <button className="remove-option-button" onClick={() => removeOption(index)}>
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <div className="add-option">
                <input
                  type="text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Añadir opción"
                />
                <button onClick={addOption}>Añadir</button>
              </div>
            </>
          )}
          <label className="obligatory-checkbox">
            Obligatorio:
            <input
              type="checkbox"
              checked={obligatorio}
              onChange={(e) => setObligatorio(e.target.checked)}
            />
          </label>
        </div>
        <div className="modal-footer">
          <button className="save-button-step" onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStepModal;
