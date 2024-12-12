// import React, { useState, useEffect } from 'react';
// import './EditStepModal.css';
// import { TbX } from 'react-icons/tb';

// interface EditStepModalProps {
//   step: {
//     numero: number;
//     consigna: string;
//     tipoRespuesta: string;
//     opciones?: string[];
//     obligatorio: boolean;
//   };
//   onSave: (step: any) => void;
//   onClose: () => void;
// }

// const responseTypes = [
//   { value: 'Libre', label: 'Libre' },
//   { value: 'Numerico', label: 'Numérico' },
//   { value: 'Fecha', label: 'Fecha' },
//   { value: 'MultipleOpciones', label: 'Multiple Opciones' }
// ];

// const EditStepModal: React.FC<EditStepModalProps> = ({ step, onSave, onClose }) => {
//   const [localStep, setLocalStep] = useState(step);
//   const [newOption, setNewOption] = useState('');

//   useEffect(() => {
//     setLocalStep(step);
//   }, [step]);

//   const handleChange = (field: string, value: any) => {
//     setLocalStep({ ...localStep, [field]: value });
//   };

//   const addOption = () => {
//     if (newOption) {
//       const updatedOptions = localStep.opciones ? [...localStep.opciones, newOption] : [newOption];
//       setLocalStep({ ...localStep, opciones: updatedOptions });
//       setNewOption('');
//     }
//   };

//   const removeOption = (index: number) => {
//     const updatedOptions = localStep.opciones?.filter((_, i) => i !== index);
//     setLocalStep({ ...localStep, opciones: updatedOptions });
//   };

//   const handleSave = () => {
//     onSave(localStep);
//     onClose();
//   };

//   return (
//     <div className="edit-step-modal-overlay">
//       <div className="edit-step-modal">
//         <div className="modal-header">
//           <h2>{`Step ${localStep.numero}`}</h2>
//           <button className="close-button" onClick={onClose}>
//             <TbX />
//           </button>
//         </div>
//         <div className="modal-content">
//           <label>
//             Consigna:
//             <input
//               className='consigna'
//               type="text"
//               value={localStep.consigna}
//               onChange={(e) => handleChange('consigna', e.target.value)}
//             />
//           </label>
//           <label>
//             Tipo de Respuesta:
//             <select
//               value={localStep.tipoRespuesta}
//               onChange={(e) => handleChange('tipoRespuesta', e.target.value)}
//             >
//               {responseTypes.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </label>
//           {localStep.tipoRespuesta === 'MultipleOpciones' && (
//             <>
//               <label>Opciones:</label>
//               <div className="options-list">
//                 {localStep.opciones?.map((option, index) => (
//                   <div key={index} className="option-item">
//                     {option}
//                     <button className="remove-option-button" onClick={() => removeOption(index)}>
//                       &times;
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="add-option">
//                 <input
//                   type="text"
//                   value={newOption}
//                   onChange={(e) => setNewOption(e.target.value)}
//                   placeholder="Añadir opción"
//                 />
//                 <button onClick={addOption}>Añadir</button>
//               </div>
//             </>
//           )}
//           <label className="obligatory-checkbox">
//             Obligatorio:
//             <input
//               type="checkbox"
//               checked={localStep.obligatorio}
//               onChange={(e) => handleChange('obligatorio', e.target.checked)}
//             />
//           </label>
//         </div>
//         <div className="modal-footer">
//           <button className="save-button-step" onClick={handleSave}>
//             Guardar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditStepModal;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EditStepModal.css';
// import { TbX } from 'react-icons/tb';

// interface EditStepModalProps {
//   step: {
//     id: number;
//     numero: number;
//     consigna: string;
//     tipoRespuesta: string;
//     opciones?: string[];
//     obligatorio: boolean;
//     isEnabled: boolean;
//     spreadsheetId: number;
//   };
//   onSave: (step: any) => void;
//   onClose: () => void;
// }

// const responseTypes = [
//   { value: 'Libre', label: 'Libre' },
//   { value: 'Numerico', label: 'Numérico' },
//   { value: 'Fecha', label: 'Fecha' },
//   { value: 'MultipleOpciones', label: 'Multiple Opciones' }
// ];

// const mapTipoRespuestaToAnswerType = (tipoRespuesta: string) => {
//   switch (tipoRespuesta) {
//     case 'Libre':
//       return 1;
//     case 'Numerico':
//       return 2;
//     case 'Fecha':
//       return 3;
//     case 'MultipleOpciones':
//       return 4;
//     default:
//       return 1;
//   }
// };

// const EditStepModal: React.FC<EditStepModalProps> = ({ step, onSave, onClose }) => {
//   const [localStep, setLocalStep] = useState(step);
//   const [newOption, setNewOption] = useState('');

//   useEffect(() => {
//     setLocalStep(step);
//   }, [step]);

//   const handleChange = (field: string, value: any) => {
//     setLocalStep({ ...localStep, [field]: value });
//   };

//   const addOption = () => {
//     if (newOption) {
//       const updatedOptions = localStep.opciones ? [...localStep.opciones, newOption] : [newOption];
//       setLocalStep({ ...localStep, opciones: updatedOptions });
//       setNewOption('');
//     }
//   };

//   const removeOption = (index: number) => {
//     const updatedOptions = localStep.opciones?.filter((_, i) => i !== index);
//     setLocalStep({ ...localStep, opciones: updatedOptions });
//   };

//   const handleSave = async () => {
//     const updatedStep = {
//       id: localStep.id,
//       text: localStep.consigna,
//       isRequired: localStep.obligatorio,
//       answerType: mapTipoRespuestaToAnswerType(localStep.tipoRespuesta),
//       options: localStep.opciones?.join(',') || '',
//       isEnabled: localStep.isEnabled,
//       spreadsheetId: localStep.spreadsheetId
//     };

//     try {
//       await axios.put(
//         'https://emmanuel.somee.com/api/v1/SpreadsheetItems',
//         updatedStep,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//           }
//         }
//       );
//       onSave(updatedStep);
//       onClose();
//     } catch (error) {
//       console.error('Error al actualizar el paso:', error);
//       alert('Hubo un error al actualizar el paso. Por favor, intenta de nuevo.');
//     }
//   };

//   return (
//     <div className="edit-step-modal-overlay">
//       <div className="edit-step-modal">
//         <div className="modal-header">
//           <h2>{`Step ${localStep.numero}`}</h2>
//           <button className="close-button" onClick={onClose}>
//             <TbX />
//           </button>
//         </div>
//         <div className="modal-content">
//           <label>
//             Consigna:
//             <input
//               className="consigna"
//               type="text"
//               value={localStep.consigna}
//               onChange={(e) => handleChange('consigna', e.target.value)}
//             />
//           </label>
//           <label>
//             Tipo de Respuesta:
//             <select
//               value={localStep.tipoRespuesta}
//               onChange={(e) => handleChange('tipoRespuesta', e.target.value)}
//             >
//               {responseTypes.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </label>
//           {localStep.tipoRespuesta === 'MultipleOpciones' && (
//             <>
//               <label>Opciones:</label>
//               <div className="options-list">
//                 {localStep.opciones?.map((option, index) => (
//                   <div key={index} className="option-item">
//                     {option}
//                     <button className="remove-option-button" onClick={() => removeOption(index)}>
//                       &times;
//                     </button>
//                   </div>
//                 ))}
//               </div>
//               <div className="add-option">
//                 <input
//                   type="text"
//                   value={newOption}
//                   onChange={(e) => setNewOption(e.target.value)}
//                   placeholder="Añadir opción"
//                 />
//                 <button onClick={addOption}>Añadir</button>
//               </div>
//             </>
//           )}
//           <label className="obligatory-checkbox">
//             Obligatorio:
//             <input
//               type="checkbox"
//               checked={localStep.obligatorio}
//               onChange={(e) => handleChange('obligatorio', e.target.checked)}
//             />
//           </label>
//         </div>
//         <div className="modal-footer">
//           <button className="save-button-step" onClick={handleSave}>
//             Guardar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditStepModal;











import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditStepModal.css';
import { TbX } from 'react-icons/tb';

interface EditStepModalProps {
  step: {
    id: number;
    numero: number;
    consigna: string;
    tipoRespuesta: string;
    opciones?: string[];
    obligatorio: boolean;
    isEnabled: boolean;
    spreadsheetId: number;
  };
  onSave: (step: any) => void;
  onClose: () => void;
}

const responseTypes = [
  { value: 'Libre', label: 'Libre' },
  { value: 'Numerico', label: 'Numérico' },
  { value: 'Fecha', label: 'Fecha' },
  { value: 'MultipleOpciones', label: 'Multiple Opciones' }
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
    default:
      return 1;
  }
};

const EditStepModal: React.FC<EditStepModalProps> = ({ step, onSave, onClose }) => {
  const [localStep, setLocalStep] = useState(step);
  const [newOption, setNewOption] = useState('');

  useEffect(() => {
    setLocalStep(step);
  }, [step]);

  const handleChange = (field: string, value: any) => {
    setLocalStep({ ...localStep, [field]: value });
  };

  const addOption = () => {
    if (newOption) {
      const updatedOptions = localStep.opciones ? [...localStep.opciones, newOption] : [newOption];
      setLocalStep({ ...localStep, opciones: updatedOptions });
      setNewOption('');
    }
  };

  const removeOption = (index: number) => {
    const updatedOptions = localStep.opciones?.filter((_, i) => i !== index);
    setLocalStep({ ...localStep, opciones: updatedOptions });
  };

  const handleSave = async () => {
    const updatedStep = {
      id: localStep.id, // Ensure id is passed correctly
      spreadsheetId: localStep.spreadsheetId, // Ensure spreadsheetId is passed correctly
      text: localStep.consigna,
      isRequired: localStep.obligatorio,
      answerType: mapTipoRespuestaToAnswerType(localStep.tipoRespuesta),
      options: localStep.opciones?.join(',') || '',
    };

    try {
      await axios.put(
        'https://emmanuel.somee.com/api/v1/SpreadsheetItems',
        updatedStep,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      onSave(updatedStep);
      onClose();
    } catch (error) {
      console.error('Error al actualizar el paso:', error);
      alert('Hubo un error al actualizar el paso. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="edit-step-modal-overlay">
      <div className="edit-step-modal">
        <div className="modal-header">
          <h2>{`Step ${localStep.numero}`}</h2>
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
              value={localStep.consigna}
              onChange={(e) => handleChange('consigna', e.target.value)}
            />
          </label>
          <label>
            Tipo de Respuesta:
            <select
              value={localStep.tipoRespuesta}
              onChange={(e) => handleChange('tipoRespuesta', e.target.value)}
            >
              {responseTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          {localStep.tipoRespuesta === 'MultipleOpciones' && (
            <>
              <label>Opciones:</label>
              <div className="options-list">
                {localStep.opciones?.map((option, index) => (
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
              checked={localStep.obligatorio}
              onChange={(e) => handleChange('obligatorio', e.target.checked)}
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

export default EditStepModal;
