// import React, { useState } from 'react';
// import './StepsTable.css';
// import { TbEdit } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';

// interface Step {
//   numero: number;
//   consigna: string;
//   tipoRespuesta: string;
//   opciones?: string[];
//   obligatorio: boolean;
// }

// interface StepsTableProps {
//   initialSteps: Step[];
//   onStepsChange: (steps: Step[]) => void;
// }

// const StepsTable: React.FC<StepsTableProps> = ({ initialSteps, onStepsChange }) => {
//   const [steps, setSteps] = useState<Step[]>(initialSteps);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     const updatedSteps = steps.map((step) =>
//       step.numero === updatedStep.numero ? updatedStep : step
//     );
//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   const handleStepRemove = (index: number) => {
//     const updatedSteps = steps.filter((_, i) => i !== index);
//     updatedSteps.forEach((step, i) => (step.numero = i + 1)); // Reordenar números
//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   return (
//     <div className="steps-table">
//       <table>
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
//           {steps.map((step, index) => (
//             <tr key={index}>
//               <td>{step.numero}</td>
//               <td>{step.consigna}</td>
//               <td>{step.tipoRespuesta}</td>
//               <td>{step.obligatorio ? 'Sí' : 'No'}</td>
//               <td>
//                 <button onClick={() => handleStepEdit(index)}>
//                   <TbEdit />
//                 </button>
//                 <button onClick={() => handleStepRemove(index)}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {editingStep && (
//         <EditStepModal
//           step={editingStep}
//           onSave={handleStepSave}
//           onClose={() => setEditingStep(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;









// import React, { useState } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';

// export interface Step {
//   numero: number;
//   consigna: string;
//   tipoRespuesta: string;
//   opciones?: string[];
//   obligatorio: boolean;
// }




// interface StepsTableProps {
//   initialSteps: Step[];
//   onStepsChange: (steps: Step[]) => void;
// }

// const StepsTable: React.FC<StepsTableProps> = ({ initialSteps, onStepsChange }) => {
//   const [steps, setSteps] = useState<Step[]>(initialSteps);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps([...steps, updatedStep]);
//     } else {
//       const updatedSteps = steps.map((step) =>
//         step.numero === updatedStep.numero ? updatedStep : step
//       );
//       setSteps(updatedSteps);
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleStepRemove = (index: number) => {
//     const updatedSteps = steps.filter((_, i) => i !== index);
//     updatedSteps.forEach((step, i) => (step.numero = i + 1)); // Reordenar números
//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       numero: steps.length + 1,
//       consigna: '',
//       tipoRespuesta: 'Libre',
//       opciones: [],
//       obligatorio: false,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
//   };

//   return (
//     <div className="steps-table">
//       <table className='tablets'>
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
//           {steps.map((step, index) => (
//             <tr key={index}>
//               <td>{step.numero}</td>
//               <td>{step.consigna}</td>
//               <td>{step.tipoRespuesta}</td>
//               <td>{step.obligatorio ? 'Sí' : 'No'}</td>
//               <td>
//                 <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                   <TbEdit/> Ver  / /  Editar
//                 </button>
//                 <button onClick={() => handleStepRemove(index)}>Eliminar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>
//       {editingStep && (
//         <EditStepModal
//           step={editingStep}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//             setIsAdding(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;

















// import React, { useState } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

// export interface Step {
//   numero: number;
//   consigna: string;
//   tipoRespuesta: string;
//   opciones?: string[];
//   obligatorio: boolean;
//   isEnabled: boolean;
// }

// interface StepsTableProps {
//   initialSteps: Step[];
//   onStepsChange: (steps: Step[]) => void;
// }

// const StepsTable: React.FC<StepsTableProps> = ({ initialSteps, onStepsChange }) => {
//   const [steps, setSteps] = useState<Step[]>(initialSteps);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps([...steps, updatedStep]);
//     } else {
//       const updatedSteps = steps.map((step) =>
//         step.numero === updatedStep.numero ? updatedStep : step
//       );
//       setSteps(updatedSteps);
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };


//   const handleSwitchToggle = (index: number) => {
//     const updatedSteps = [...steps];
//     updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;
  
//     // Reordenar los números solo si se deshabilita el paso
//     if (!updatedSteps[index].isEnabled) {
//       updatedSteps.forEach((step, i) => {
//         step.numero = i + 1;
//       });
//     }
  
//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       numero: steps.length + 1,
//       consigna: '',
//       tipoRespuesta: 'Libre',
//       opciones: [],
//       obligatorio: false,
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
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
//               <tbody>
//         {steps.map((step, index) => (
//           <tr key={index} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//             <td>{step.numero}</td>
//             <td>{step.consigna}</td>
//             <td>{step.tipoRespuesta}</td>
//             <td>{step.obligatorio ? 'Sí' : 'No'}</td>
//             <td>
//               <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                 <TbEdit/> Ver / Editar
//               </button>
//               <Switch
//                 checked={step.isEnabled}
//                 onChange={() => handleSwitchToggle(index)}
//               />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>
//       {editingStep && (
//         <EditStepModal
//           step={editingStep}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//             setIsAdding(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;














// import React, { useState } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

// // Actualiza el tipo Step para reflejar las propiedades que realmente recibes
// export interface Step {
//   id: number;
//   spreadsheetId: number;
//   text: string;
//   isRequired: boolean;
//   answerType: number;
//   options?: string;
//   isEnabled: boolean;
// }

// interface StepsTableProps {
//   initialSteps: Step[];
//   onStepsChange: (steps: Step[]) => void;
// }

// const StepsTable: React.FC<StepsTableProps> = ({ initialSteps, onStepsChange }) => {
//   const [steps, setSteps] = useState<Step[]>(initialSteps);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps([...steps, updatedStep]);
//     } else {
//       const updatedSteps = steps.map((step) =>
//         step.id === updatedStep.id ? updatedStep : step
//       );
//       setSteps(updatedSteps);
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleSwitchToggle = (index: number) => {
//     const updatedSteps = [...steps];
//     updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;

//     // Reordenar los números solo si se deshabilita el paso
//     if (!updatedSteps[index].isEnabled) {
//       updatedSteps.forEach((step, i) => {
//         step.id = i + 1; // Aquí actualizamos el id, pero podrías manejarlo de otra manera según tu lógica.
//       });
//     }

//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       id: steps.length + 1,
//       spreadsheetId: 1, // o el valor correspondiente
//       text: '',
//       isRequired: false,
//       answerType: 0,
//       options: '',
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
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
//           {steps.map((step, index) => (
//             <tr key={index} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//               <td>{step.id}</td>
//               <td>{step.text}</td>
//               <td>{step.answerType}</td>
//               <td>{step.isRequired ? 'Sí' : 'No'}</td>
//               <td>
//                 <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                   <TbEdit /> Ver / Editar
//                 </button>
//                 <Switch
//                   checked={step.isEnabled}
//                   onChange={() => handleSwitchToggle(index)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>
//       {editingStep && (
//         <EditStepModal
//           step={editingStep}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//             setIsAdding(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;













// import React, { useState } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

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
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps([...steps, updatedStep]);
//     } else {
//       const updatedSteps = steps.map((step) =>
//         step.id === updatedStep.id ? updatedStep : step
//       );
//       setSteps(updatedSteps);
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleSwitchToggle = (index: number) => {
//     const updatedSteps = [...steps];
//     updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;

//     if (!updatedSteps[index].isEnabled) {
//       updatedSteps.forEach((step, i) => {
//         step.id = i + 1;
//       });
//     }

//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       id: steps.length + 1,
//       text: '',
//       answerType: 2,
//       options: '',
//       isRequired: false,
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
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
//           {steps.map((step, index) => (
//             <tr key={index} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//               <td>{step.id}</td>
//               <td>{step.text}</td>
//               <td>{step.answerType}</td>
//               <td>{step.isRequired ? 'Sí' : 'No'}</td>
//               <td>
//                 <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                   <TbEdit /> Ver / Editar
//                 </button>
//                 <Switch
//                   checked={step.isEnabled}
//                   onChange={() => handleSwitchToggle(index)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>
//       {editingStep && (
//   <EditStepModal
//     step={{
//       numero: editingStep.id,
//       consigna: editingStep.text,
//       tipoRespuesta: 'Libre', // Mapear `answerType` a un string significativo
//       opciones: editingStep.options ? editingStep.options.split(',') : [],
//       obligatorio: editingStep.isRequired,
//     }}
//     onSave={handleStepSave}
//     onClose={() => {
//       setEditingStep(null);
//       setIsAdding(false);
//     }}
//   />
// )}
//     </div>
//   );
// };

// export default StepsTable;












// import React, { useState } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

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
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps([...steps, updatedStep]);
//     } else {
//       const updatedSteps = steps.map((step) =>
//         step.id === updatedStep.id ? updatedStep : step
//       );
//       setSteps(updatedSteps);
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleSwitchToggle = (index: number) => {
//     const updatedSteps = [...steps];
//     updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;

//     if (!updatedSteps[index].isEnabled) {
//       updatedSteps.forEach((step, i) => {
//         step.id = i + 1;
//       });
//     }

//     setSteps(updatedSteps);
//     onStepsChange(updatedSteps);
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       id: steps.length + 1,
//       text: '',
//       answerType: 2,
//       options: '',
//       isRequired: false,
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
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
//           {steps.map((step, index) => (
//             <tr key={step.id} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//               <td>{step.id}</td>
//               <td>{step.text}</td>
//               <td>{step.answerType}</td>
//               <td>{step.isRequired ? 'Sí' : 'No'}</td>
//               <td>
//                 <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                   <TbEdit /> Ver / Editar
//                 </button>
//                 <Switch
//                   checked={step.isEnabled}
//                   onChange={() => handleSwitchToggle(index)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>
//       {editingStep && (
//         <EditStepModal
//           step={{
//             numero: editingStep.id,
//             consigna: editingStep.text,
//             tipoRespuesta: editingStep.answerType.toString(), // Convertir answerType a string si es necesario
//             opciones: editingStep.options ? editingStep.options.split(',') : [],
//             obligatorio: editingStep.isRequired,
//           }}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//             setIsAdding(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;
















// import React, { useState, useEffect } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

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
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   useEffect(() => {
//     setSteps(initialSteps);
//   }, [initialSteps]);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps((prevSteps) => [...prevSteps, updatedStep]);
//     } else {
//       setSteps((prevSteps) =>
//         prevSteps.map((step) =>
//           step.id === updatedStep.id ? updatedStep : step
//         )
//       );
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleSwitchToggle = (index: number) => {
//     setSteps((prevSteps) => {
//       const updatedSteps = [...prevSteps];
//       updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;

//       if (!updatedSteps[index].isEnabled) {
//         updatedSteps.forEach((step, i) => {
//           step.id = i + 1;
//         });
//       }

//       onStepsChange(updatedSteps);
//       return updatedSteps;
//     });
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       id: steps.length + 1,
//       text: '',
//       answerType: 2,
//       options: '',
//       isRequired: false,
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
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
//           {steps.map((step, index) => (
//             <tr key={step.id} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//               <td>{step.id}</td>
//               <td>{step.text}</td>
//               <td>{step.answerType}</td>
//               <td>{step.isRequired ? 'Sí' : 'No'}</td>
//               <td>
//                 <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                   <TbEdit /> Ver / Editar
//                 </button>
//                 <Switch
//                   checked={step.isEnabled}
//                   onChange={() => handleSwitchToggle(index)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button className="add-step-button" onClick={handleAddStep}>
//         <TbPlus /> Añadir Step
//       </button>
//       {editingStep && (
//         <EditStepModal
//           step={{
//             numero: editingStep.id,
//             consigna: editingStep.text,
//             tipoRespuesta: editingStep.answerType.toString(),
//             opciones: editingStep.options ? editingStep.options.split(',') : [],
//             obligatorio: editingStep.isRequired,
//           }}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//             setIsAdding(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default StepsTable;











// import React, { useState, useEffect } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

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
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [loading, setLoading] = useState(true); // Nuevo estado para la carga
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   useEffect(() => {
//     // Simulación de carga
//     setTimeout(() => {
//       setSteps(initialSteps);
//       setLoading(false);
//     }, 1000); // 1 segundo de carga, puedes ajustar esto según tu caso
//   }, [initialSteps]);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps((prevSteps) => [...prevSteps, updatedStep]);
//     } else {
//       setSteps((prevSteps) =>
//         prevSteps.map((step) =>
//           step.id === updatedStep.id ? updatedStep : step
//         )
//       );
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleSwitchToggle = (index: number) => {
//     setSteps((prevSteps) => {
//       const updatedSteps = [...prevSteps];
//       updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;

//       if (!updatedSteps[index].isEnabled) {
//         updatedSteps.forEach((step, i) => {
//           step.id = i + 1;
//         });
//       }

//       onStepsChange(updatedSteps);
//       return updatedSteps;
//     });
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       id: steps.length + 1,
//       text: '',
//       answerType: 2,
//       options: '',
//       isRequired: false,
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
//   };

//   return (
//     <div className="steps-table">
//       {loading ? (
//         <div className="cards-container loading">
//           <div className="spinner"></div>
//         </div>
//       ) : (
//         <>
//           <table className="tablets">
//             <thead>
//               <tr>
//                 <th>Número</th>
//                 <th>Consigna</th>
//                 <th>Tipo de Respuesta</th>
//                 <th>Obligatorio</th>
//                 <th>Acciones</th>
//               </tr>
//             </thead>
//             <tbody>
//               {steps.map((step, index) => (
//                 <tr key={step.id} style={{ opacity: step.isEnabled ? 1 : 0.5 }}>
//                   <td>{step.id}</td>
//                   <td>{step.text}</td>
//                   <td>{step.answerType}</td>
//                   <td>{step.isRequired ? 'Sí' : 'No'}</td>
//                   <td>
//                     <button className='ver-btn' onClick={() => handleStepEdit(index)}>
//                       <TbEdit /> Ver / Editar
//                     </button>
//                     <Switch
//                       checked={step.isEnabled}
//                       onChange={() => handleSwitchToggle(index)}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button className="add-step-button" onClick={handleAddStep}>
//             <TbPlus /> Añadir Step
//           </button>
//           {editingStep && (
//             <EditStepModal
//               step={{
//                 numero: editingStep.id,
//                 consigna: editingStep.text,
//                 tipoRespuesta: editingStep.answerType.toString(),
//                 opciones: editingStep.options ? editingStep.options.split(',') : [],
//                 obligatorio: editingStep.isRequired,
//               }}
//               onSave={handleStepSave}
//               onClose={() => {
//                 setEditingStep(null);
//                 setIsAdding(false);
//               }}
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default StepsTable;
















// import React, { useState, useEffect } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus } from 'react-icons/tb';
// import EditStepModal from '../EditStepModal/EditStepModal';
// import Switch from '../../../TabSwitch/TabSwitch';

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
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [loading, setLoading] = useState(true); // Estado de carga para los steps
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const spreadId = localStorage.getItem('selectedPlanilla');
//   let spreadsheetId

//   if (spreadId) {
//     const { id } = JSON.parse(spreadId);
//     spreadsheetId = id;
//   }

//   useEffect(() => {
//     // Simulación de carga
//     setTimeout(() => {
//       setSteps(initialSteps);
//       setLoading(false);
//     }, 1000); // Ajusta el tiempo de carga según tu necesidad
//   }, [initialSteps]);

//   const handleStepEdit = (index: number) => {
//     setEditingStep(steps[index]);
//   };

//   const handleStepSave = (updatedStep: Step) => {
//     if (isAdding) {
//       setSteps((prevSteps) => [...prevSteps, updatedStep]);
//     } else {
//       setSteps((prevSteps) =>
//         prevSteps.map((step) =>
//           step.id === updatedStep.id ? updatedStep : step
//         )
//       );
//     }
//     onStepsChange(steps);
//     setEditingStep(null);
//     setIsAdding(false);
//   };

//   const handleSwitchToggle = (index: number) => {
//     setSteps((prevSteps) => {
//       const updatedSteps = [...prevSteps];
//       updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;

//       if (!updatedSteps[index].isEnabled) {
//         updatedSteps.forEach((step, i) => {
//           step.id = i + 1;
//         });
//       }

//       onStepsChange(updatedSteps);
//       return updatedSteps;
//     });
//   };

//   const handleAddStep = () => {
//     const newStep: Step = {
//       id: steps.length + 1,
//       text: '',
//       answerType: 2,
//       options: '',
//       isRequired: false,
//       isEnabled: true,
//     };
//     setEditingStep(newStep);
//     setIsAdding(true);
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
//       {/* {editingStep && (
//         <EditStepModal
//           step={{
//             id: editingStep.id,
//             spreadsheetId: spreadsheetId,
//             consigna: editingStep.text,
//             obligatorio: editingStep.isRequired,
//             tipoRespuesta: editingStep.answerType.toString(),
//             opciones: editingStep.options ? editingStep.options.split(',') : [],
//           }}
//           onSave={handleStepSave}
//           onClose={() => {
//             setEditingStep(null);
//             setIsAdding(false);
//           }}
//         />
//       )} */}

// {editingStep && (
//   <EditStepModal
//     step={{
//       id: editingStep.id,
//       numero: editingStep.id, // Asignar el número del step
//       spreadsheetId: spreadsheetId,
//       consigna: editingStep.text,
//       obligatorio: editingStep.isRequired,
//       tipoRespuesta: editingStep.answerType.toString(),
//       opciones: editingStep.options ? editingStep.options.split(',') : [],
//       isEnabled: editingStep.isEnabled, // Asegurarse de incluir isEnabled
//     }}
//     onSave={handleStepSave}
//     onClose={() => {
//       setEditingStep(null);
//       setIsAdding(false);
//     }}
//   />
// )}

//     </div>
//   );
// };

// export default StepsTable;










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
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [editingStep, setEditingStep] = useState<Step | null>(null);
//   const [isAdding, setIsAdding] = useState(false);

//   const spreadId = localStorage.getItem('selectedPlanilla');
//   let spreadsheetId;

//   if (spreadId) {
//     const { id } = JSON.parse(spreadId);
//     spreadsheetId = id;
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       setSteps(initialSteps);
//       setLoading(false);
//     }, 1000);
//   }, [initialSteps]);

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

//       await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/Enable/${step.id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });
  

//       setSteps((prevSteps) => {
//         const updatedSteps = [...prevSteps];
//         updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;
  
//         if (!updatedSteps[index].isEnabled) {
//           updatedSteps.forEach((step, i) => {
//             step.id = i + 1;
//           });
//         }
  
//         onStepsChange(updatedSteps);
//         return updatedSteps;
//       });
//     } catch (error) {
//       console.error('Error al actualizar el estado del step:', error);
//     }
//   };

//   const handleAddStep = () => {
//     setIsAdding(true);
//   };

//   const handleNewStepSave = () => {

//     setIsAdding(false);
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

//       {isAdding && (
//         <AddStepModal
//           spreadsheetId={spreadsheetId}
//           onSave={handleNewStepSave}
//           onClose={() => setIsAdding(false)}
//         />
//       )}

//       {editingStep && (
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

//   useEffect(() => {
//     const fetchSteps = async () => {
//       try {
//         const response = await axios.get<Step[]>(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${spreadsheetId}`, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setSteps(response.data);
//         onStepsChange(response.data);
//       } catch (error) {
//         console.error('Error al cargar los steps:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

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
//       await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/Enable/${step.id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });
  
//       setSteps((prevSteps) => {
//         const updatedSteps = [...prevSteps];
//         updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;
  
//         onStepsChange(updatedSteps);
//         return updatedSteps;
//       });
//     } catch (error) {
//       console.error('Error al actualizar el estado del step:', error);
//     }
//   };

//   const handleAddStep = () => {
//     setIsAdding(true);
//   };

//   const handleNewStepSave = () => {
//     setIsAdding(false);
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
//       await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/Enable/${step.id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });
  
//       setSteps((prevSteps) => {
//         const updatedSteps = [...prevSteps];
//         updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;
  
//         onStepsChange(updatedSteps);
//         return updatedSteps;
//       });
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
//       await fetchSteps(); // Refrescar la lista de steps después de añadir un nuevo step
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




















// import React, { useState, useEffect } from 'react';
// import './StepsTable.css';
// import { TbEdit, TbPlus, TbTrash } from 'react-icons/tb';
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
//       await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/Enable/${step.id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });
  
//       setSteps((prevSteps) => {
//         const updatedSteps = [...prevSteps];
//         updatedSteps[index].isEnabled = !updatedSteps[index].isEnabled;
  
//         onStepsChange(updatedSteps);
//         return updatedSteps;
//       });
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
//       await fetchSteps(); // Refrescar la lista de steps después de añadir un nuevo step
//     }
//   };

//   const handleStepDelete = async (stepId: number) => {
//     const token = localStorage.getItem('token');
  
//     try {
//       await axios.delete(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/${stepId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       await fetchSteps(); // Actualizar la lista de steps después de eliminar uno
//     } catch (error) {
//       console.error('Error al eliminar el step:', error);
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
//             <th>Eliminar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan={6}>
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
//                 <td>
//                   <button className='delete-btn' onClick={() => handleStepDelete(step.id)}>
//                     <TbTrash /> 
//                   </button>
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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={5}>
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
                  <button className='ver-btn' onClick={() => handleStepEdit(index)}>
                    <TbEdit /> Ver / Editar
                  </button>
                  <Switch
                    checked={step.isEnabled}
                    onChange={() => handleSwitchToggle(index)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button className="add-step-button" onClick={handleAddStep}>
        <TbPlus /> Añadir Step
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



