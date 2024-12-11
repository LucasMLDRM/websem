// import React, { useState, useEffect } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import AddStepModal from '../AddStepModal/AddStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';
// import axios from 'axios';

// export interface Step {
//   id: number;
//   text: string;
//   answerType: number;
//   options: string;
//   isRequired: boolean;
//   isEnabled: boolean;
// }

// interface StepsTableProps {
//   initialSteps: Step[];
//   onStepsChange: (steps: Step[]) => void;
// }

// const StepsTable: React.FC<StepsTableProps> = ({ initialSteps, onStepsChange }) => {
//   const [steps, setSteps] = useState<Step[]>(initialSteps);
//   const [loading, setLoading] = useState(true);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const spreadId = localStorage.getItem('selectedPlanilla');
//   let spreadsheetId: number | undefined;

//   if (spreadId) {
//     const { id } = JSON.parse(spreadId);
//     spreadsheetId = id;
//   }

//   const fetchSteps = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get<Step[]>(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${spreadsheetId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       setSteps(response.data);
//       onStepsChange(response.data);
//     } catch (error) {
//       console.error('Error al cargar los steps:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (spreadsheetId) {
//       fetchSteps();
//     }
//   }, [spreadsheetId, onStepsChange]);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (!isAdding) {
//       setSteps((prevSteps) =>
//         prevSteps.map((step) =>
//           step.id === updatedStep.id ? updatedStep : step
//         )
//       );
//       onStepsChange(steps);
//       setEditingStep(null);
//     }
//   };

//   const handleSwitchToggle = async (index: number) => {
//     const token = localStorage.getItem('token');
//     const step = steps[index];

//     try {
//       if (step.isEnabled) {
//         await axios.delete(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/${step.id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//       } else {
//         await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/Enable/${step.id}`, {}, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//       }
//       await fetchSteps();
//     } catch (error) {
//       console.error('Error al actualizar el estado del step:', error);
//     }
//   };

//   const handleAddStep = () => {
//     setIsAdding(true);
//   };

//   const handleNewStepSave = async () => {
//     setIsAdding(false);
//     if (spreadsheetId) {
//       await fetchSteps();
//     }
//   };

//   return (
//     <div className="steps-table">
//       <table className="tablets">
//         <thead>
//           <tr>
//             <th>Número</th>
//             <th>Consigna</th>
//             <th>Tipo de Respuesta</th>
//             <th>Obligatorio</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={5}>
//                 <div className="spinner"></div>
//               </td>
//             </tr>
//           ) : (
//             steps.map((step, index) => (
//               <tr key={step.id} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//                 <td>{step.id}</td>
//                 <td>{step.text}</td>
//                 <td>{step.answerType}</td>
//                 <td>{step.isRequired ? 'Sí' : 'No'}</td>
//                 <td>
//                   <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                     <TbEdit /> Ver / Editar
//                   </button>
//                   <Switch
//                     checked={step.isEnabled}
//                     onChange={() => handleSwitchToggle(index)}
//                   />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>

//       {isAdding && spreadsheetId && (
//         <AddStepModal
//           spreadsheetId={spreadsheetId}
//           onSave={handleNewStepSave}
//           onClose={() => setIsAdding(false)}
//         />
//       )}

//       {editingStep && spreadsheetId && (
//         <EditStepModal
//           step={{
//             id: editingStep.id,
//             numero: editingStep.id,
//             spreadsheetId: spreadsheetId,
//             consigna: editingStep.text,
//             obligatorio: editingStep.isRequired,
//             tipoRespuesta: editingStep.answerType.toString(),
//             opciones: editingStep.options ? editingStep.options.split(',') : [],
//             isEnabled: editingStep.isEnabled,
//           }}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;







import React, { useState, useEffect } from 'react';
import './StepsTable.css';
import { TbEdit, TbPlus } from 'react-icons/tb';
import EditStepModal from '../EditStepModal/EditStepModal';
import AddStepModal from '../AddStepModal/AddStepModal';
import Switch from '../../../TabSwitch/TabSwitch';
import axios from 'axios';

export interface Step {
  id: number;
  text: string;
  answerType: number;
  options: string;
  isRequired: boolean;
  isEnabled: boolean;
}

interface StepsTableProps {
  initialSteps: Step[];
  onStepsChange: (steps: Step[]) => void;
}

const StepsTable: React.FC<StepsTableProps> = ({ initialSteps, onStepsChange }) => {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [loading, setLoading] = useState(true);
  const [editingStep, setEditingStep] = useState<Step | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const spreadId = localStorage.getItem('selectedPlanilla');
  let spreadsheetId: number | undefined;

  if (spreadId) {
    const { id } = JSON.parse(spreadId);
    spreadsheetId = id;
  }

  const fetchSteps = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Step[]>(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${spreadsheetId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSteps(response.data);
      onStepsChange(response.data);
    } catch (error) {
      console.error('Error al cargar los steps:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (spreadsheetId) {
      fetchSteps();
    }
  }, [spreadsheetId, onStepsChange]);

  const handleStepEdit = (index: number) => {
    setEditingStep(steps[index]);
  };

  const handleStepSave = (updatedStep: Step) => {
    if (!isAdding) {
      setSteps((prevSteps) =>
        prevSteps.map((step) =>
          step.id === updatedStep.id ? updatedStep : step
        )
      );
      onStepsChange(steps);
      setEditingStep(null);
    }
  };

  const handleSwitchToggle = async (index: number) => {
    const token = localStorage.getItem('token');
    const step = steps[index];

    try {
      if (step.isEnabled) {
        await axios.delete(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/${step.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/Enable/${step.id}`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      await fetchSteps();
    } catch (error) {
      console.error('Error al actualizar el estado del step:', error);
    }
  };

  const handleAddStep = () => {
    setIsAdding(true);
  };

  const handleNewStepSave = async () => {
    setIsAdding(false);
    if (spreadsheetId) {
      await fetchSteps();
    }
  };

  return (
    <div className="steps-table">
      <table className="tablets">
        <thead>
          <tr>
            <th>Número</th>
            <th>Consigna</th>
            <th>Tipo de Respuesta</th>
            <th>Obligatorio</th>
            <th>Estado</th> {/* Nueva columna para el switch */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6}>
                <div className="spinner"></div>
              </td>
            </tr>
          ) : (
            steps.map((step, index) => (
              <tr key={step.id} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
                <td>{step.id}</td>
                <td>{step.text}</td>
                <td>{step.answerType}</td>
                <td>{step.isRequired ? 'Sí' : 'No'}</td>
                <td>
                  {/* Columna para el switch de estado */}
                  <Switch
                    checked={step.isEnabled}
                    onChange={() => handleSwitchToggle(index)}
                  />
                </td>
                <td>
                  <button className='ver-btn' onClick={() => handleStepEdit(index)}>
                    <TbEdit /> Ver / Editar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button className="add-step-button" onClick={handleAddStep}>
        <TbPlus /> Añadir Consigna
      </button>

      {isAdding && spreadsheetId && (
        <AddStepModal
          spreadsheetId={spreadsheetId}
          onSave={handleNewStepSave}
          onClose={() => setIsAdding(false)}
        />
      )}

      {editingStep && spreadsheetId && (
        <EditStepModal
          step={{
            id: editingStep.id,
            numero: editingStep.id,
            spreadsheetId: spreadsheetId,
            consigna: editingStep.text,
            obligatorio: editingStep.isRequired,
            tipoRespuesta: editingStep.answerType.toString(),
            opciones: editingStep.options ? editingStep.options.split(',') : [],
            isEnabled: editingStep.isEnabled,
          }}
          onSave={handleStepSave}
          onClose={() => {
            setEditingStep(null);
          }}
        />
      )}
    </div>
  );
};

export default StepsTable;


