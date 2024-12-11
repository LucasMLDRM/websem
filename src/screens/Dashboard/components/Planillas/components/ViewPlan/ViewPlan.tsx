// import React, { useState, useEffect } from 'react';
// import './ViewPlan.css';
// import { useNavigate } from 'react-router-dom';
// import StepsTable from './components/StepsTable/StepsTable';

// interface Step {
//   numero: number;
//   consigna: string;
//   tipoRespuesta: string;
//   obligatorio: boolean;
//   isEnabled: boolean;
// }

// interface Planilla {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   status: string;
//   steps: Step[];
// }

// const ViewPlan: React.FC = () => {
//   const [planilla, setPlanilla] = useState<Planilla | null>(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('');
//   const [steps, setSteps] = useState<Step[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPlanilla = localStorage.getItem('selectedPlanilla');
//     if (storedPlanilla) {
//       const planillaData = JSON.parse(storedPlanilla);
//       const stepsWithEnabled = planillaData.steps.map((step: Step) => ({
//         ...step,
//         isEnabled: step.isEnabled !== undefined ? step.isEnabled : true,  // Ensure isEnabled is present
//       }));
//       setPlanilla(planillaData);
//       setTitle(planillaData.title);
//       setDescription(planillaData.description);
//       setStatus(planillaData.status);
//       setSteps(stepsWithEnabled);
//     }
//   }, []);

//   const handleStepsChange = (updatedSteps: Step[]) => {
//     setSteps(updatedSteps);
//   };

//   const handleSaveChanges = () => {
//     if (planilla) {
//       const updatedPlanilla = {
//         ...planilla,
//         title,
//         description,
//         status,
//         steps,
//       };
  
//       const storedPlanillas = localStorage.getItem('planillas');
//       if (storedPlanillas) {
//         const planillasArray = JSON.parse(storedPlanillas);
//         const updatedPlanillas = planillasArray.map((p: Planilla) =>
//           p.id === updatedPlanilla.id ? updatedPlanilla : p
//         );
//         localStorage.setItem('planillas', JSON.stringify(updatedPlanillas));
//       }
  
//       localStorage.setItem('selectedPlanilla', JSON.stringify(updatedPlanilla));
//       navigate('/dashboard/planillas');
//     }
//   };

//   if (!planilla) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <div className="view-plan">
//       <div className="planilla-info">
//         <div className="planilla-field">
//           <label>Nº </label>
//           <span>{planilla.id}</span>
//         </div>
//         <div className="planilla-field">
//           <label>Nombre de Planilla: </label>
//           <input
//             className='name-plan-inp'
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           <br></br><label>Descripción:</label><br></br>
//           <textarea
//             className='name-plan-inp'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           Estado:
//           <select className='stat-sel' value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="Completado">Completado</option>
//             <option value="Pendiente">Pendiente</option>
//           </select>
//         </div>
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={handleStepsChange} />
//       <button className="save-button" onClick={handleSaveChanges}>
//         Guardar Cambios
//       </button>
//     </div>
//   );
// };

// export default ViewPlan;










// import React, { useState, useEffect } from 'react';
// import './ViewPlan.css';
// import { useNavigate } from 'react-router-dom';
// import StepsTable from './components/StepsTable/StepsTable';
// import axios from 'axios';

// interface Step {
//   numero: number;
//   consigna: string;
//   tipoRespuesta: string;
//   obligatorio: boolean;
//   isEnabled: boolean;
// }

// interface Planilla {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   status: string;
//   steps: Step[];
// }

// const ViewPlan: React.FC = () => {
//   const [planilla, setPlanilla] = useState<Planilla | null>(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('');
//   const [steps, setSteps] = useState<Step[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPlanilla = localStorage.getItem('selectedPlanilla');
//     if (storedPlanilla) {
//       const planillaData = JSON.parse(storedPlanilla);
//       const planillaId = planillaData.id;  // Extraer el id de la planilla seleccionada

//       const token = localStorage.getItem('token');  // Asegúrate de tener el token

//       axios
//         .get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           const planillaData = response.data;
//           const stepsWithEnabled = planillaData.steps.map((step: Step) => ({
//             ...step,
//             isEnabled: step.isEnabled !== undefined ? step.isEnabled : true,
//           }));
//           setPlanilla(planillaData);
//           setTitle(planillaData.title);
//           setDescription(planillaData.description);
//           setStatus(planillaData.status);
//           setSteps(stepsWithEnabled);
//         })
//         .catch((error) => {
//           console.error('Error fetching planilla:', error);
//         });
//     }
//   }, []);

//   const handleStepsChange = (updatedSteps: Step[]) => {
//     setSteps(updatedSteps);
//   };

//   const handleSaveChanges = () => {
//     if (planilla) {
//       const updatedPlanilla = {
//         ...planilla,
//         title,
//         description,
//         status,
//         steps,
//       };

//       const storedPlanillas = localStorage.getItem('planillas');
//       if (storedPlanillas) {
//         const planillasArray = JSON.parse(storedPlanillas);
//         const updatedPlanillas = planillasArray.map((p: Planilla) =>
//           p.id === updatedPlanilla.id ? updatedPlanilla : p
//         );
//         localStorage.setItem('planillas', JSON.stringify(updatedPlanillas));
//       }

//       localStorage.setItem('selectedPlanilla', JSON.stringify(updatedPlanilla));
//       navigate('/dashboard/planillas');
//     }
//   };

//   if (!planilla) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <div className="view-plan">
//       <div className="planilla-info">
//         <div className="planilla-field">
//           <label>Nº </label>
//           <span>{planilla.id}</span>
//         </div>
//         <div className="planilla-field">
//           <label>Nombre de Planilla: </label>
//           <input
//             className='name-plan-inp'
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           <br></br><label>Descripción:</label><br></br>
//           <textarea
//             className='name-plan-inp'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           Estado:
//           <select className='stat-sel' value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="Completado">Completado</option>
//             <option value="Pendiente">Pendiente</option>
//           </select>
//         </div>
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={handleStepsChange} />
//       <button className="save-button" onClick={handleSaveChanges}>
//         Guardar Cambios
//       </button>
//     </div>
//   );
// };

// export default ViewPlan;















// import React, { useState, useEffect } from 'react';
// import './ViewPlan.css';
// import { useNavigate } from 'react-router-dom';
// import StepsTable from './components/StepsTable/StepsTable';
// import axios from 'axios';

// interface Step {
//   spreadsheetId: number;
//   id: number;
//   text: string;
//   isRequired: boolean;
//   answerType: number;
//   options: string;
//   isEnabled: boolean;
// }

// interface Planilla {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   status: string;
//   steps: Step[];
// }

// const ViewPlan: React.FC = () => {
//   const [planilla] = useState<Planilla | null>(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('');
//   const [steps, setSteps] = useState<Step[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPlanilla = localStorage.getItem('selectedPlanilla');
//     if (storedPlanilla) {
//       const planillaData = JSON.parse(storedPlanilla);
//       const planillaId = planillaData.id;

//       const token = localStorage.getItem('token'); 

//       axios
//         .get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           const stepsData = response.data;
//           const stepsWithEnabled = stepsData.map((step: Step) => ({
//             ...step,
//             isEnabled: step.isEnabled !== undefined ? step.isEnabled : true,
//           }));
//           setSteps(stepsWithEnabled);
//         })
//         .catch((error) => {
//           console.error('Error fetching steps:', error);
//         });
//     }
//   }, []);

//   const handleStepsChange = (updatedSteps: Step[]) => {
//     setSteps(updatedSteps);
//   };

//   const handleSaveChanges = () => {
//     if (planilla) {
//       const updatedPlanilla = {
//         ...planilla,
//         title,
//         description,
//         status,
//         steps,
//       };

//       const storedPlanillas = localStorage.getItem('planillas');
//       if (storedPlanillas) {
//         const planillasArray = JSON.parse(storedPlanillas);
//         const updatedPlanillas = planillasArray.map((p: Planilla) =>
//           p.id === updatedPlanilla.id ? updatedPlanilla : p
//         );
//         localStorage.setItem('planillas', JSON.stringify(updatedPlanillas));
//       }

//       localStorage.setItem('selectedPlanilla', JSON.stringify(updatedPlanilla));
//       navigate('/dashboard/planillas');
//     }
//   };

//   if (!planilla) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <div className="view-plan">
//       <div className="planilla-info">
//         <div className="planilla-field">
//           <label>Nº </label>
//           <span>{planilla.id}</span>
//         </div>
//         <div className="planilla-field">
//           <label>Nombre de Planilla: </label>
//           <input
//             className='name-plan-inp'
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           <br></br><label>Descripción:</label><br></br>
//           <textarea
//             className='name-plan-inp'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           Estado:
//           <select className='stat-sel' value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="Completado">Completado</option>
//             <option value="Pendiente">Pendiente</option>
//           </select>
//         </div>
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={handleStepsChange} />
//       <button className="save-button" onClick={handleSaveChanges}>
//         Guardar Cambios
//       </button>
//     </div>
//   );
// };

// export default ViewPlan; 












// import React, { useState, useEffect } from 'react';
// import './ViewPlan.css';
// import { useNavigate } from 'react-router-dom';
// import StepsTable, { Step as TableStep } from './components/StepsTable/StepsTable';
// import axios from 'axios';

// interface ApiStep {
//   spreadsheetId: number;
//   id: number;
//   text: string;
//   isRequired: boolean;
//   answerType: number;
//   options: string;
//   isEnabled: boolean;
// }

// const ViewPlan: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [status, setStatus] = useState('');
//   const [steps, setSteps] = useState<TableStep[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPlanilla = localStorage.getItem('selectedPlanilla');
//     if (storedPlanilla) {
//       const planillaData = JSON.parse(storedPlanilla);
//       const planillaId = planillaData.id;

//       const token = localStorage.getItem('token');

//       axios
//         .get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((response) => {
//           const apiSteps: ApiStep[] = response.data;

//           // Convertir los ApiStep a TableStep
//           const stepsForTable: TableStep[] = apiSteps.map((step, index) => ({
//             numero: index + 1,
//             consigna: step.text,
//             tipoRespuesta: step.answerType.toString(), // Convertir a string si es necesario
//             opciones: step.options.split(','), // Dividir opciones por comas si es necesario
//             obligatorio: step.isRequired,
//             isEnabled: step.isEnabled,
//           }));

//           setTitle(planillaData.title);
//           setDescription(planillaData.description);
//           setStatus(planillaData.status);
//           setSteps(stepsForTable);
//         })
//         .catch((error) => {
//           console.error('Error fetching planilla:', error);
//         });
//     }
//   }, []);

//   const handleStepsChange = (updatedSteps: TableStep[]) => {
//     setSteps(updatedSteps);
//   };

// const handleSaveChanges = () => {
//   const storedPlanilla = localStorage.getItem('selectedPlanilla');
//   const planillaId = storedPlanilla ? JSON.parse(storedPlanilla).id : null;

//   const updatedPlanilla = {
//     id: planillaId, // Agregar el id aquí
//     title,
//     description,
//     status,
//     steps,
//   };

//   const storedPlanillas = localStorage.getItem('planillas');
//   if (storedPlanillas) {
//     const planillasArray = JSON.parse(storedPlanillas);
//     const updatedPlanillas = planillasArray.map((p: any) =>
//       p.id === updatedPlanilla.id ? updatedPlanilla : p
//     );
//     localStorage.setItem('planillas', JSON.stringify(updatedPlanillas));
//   }

//   localStorage.setItem('selectedPlanilla', JSON.stringify(updatedPlanilla));
//   navigate('/dashboard/planillas');
// };


//   return (
//     <div className="view-plan">
//       <div className="planilla-info">
//         <div className="planilla-field">
//           <label>Nº </label>
//           <span>{title}</span>
//         </div>
//         <div className="planilla-field">
//           <label>Nombre de Planilla: </label>
//           <input
//             className='name-plan-inp'
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           <label>Descripción:</label><br></br>
//           <textarea
//             className='name-plan-inp'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="planilla-field">
//           Estado:
//           <select className='stat-sel' value={status} onChange={(e) => setStatus(e.target.value)}>
//             <option value="Completado">Completado</option>
//             <option value="Pendiente">Pendiente</option>
//           </select>
//         </div>
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={handleStepsChange} />
//       <button className="save-button" onClick={handleSaveChanges}>
//         Guardar Cambios
//       </button>
//     </div>
//   );
// };

// export default ViewPlan;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import StepsTable from './components/StepsTable/StepsTable';
// import { Step } from '../../types';

// interface Planilla {
//   id: number;
//   name: string;
//   description: string;
//   isEnabled: boolean;
//   createdAt: string;
//   createdByName: string;
//   updatedAt: string;
//   updatedByName: string;
// }

// interface ApiStep {
//   spreadsheetId: number;
//   id: number;
//   text: string;
//   isRequired: boolean;
//   answerType: number;
//   options: string;
//   isEnabled: boolean;
// }

// interface TableStep {
//   numero: number;
//   consigna: string;
//   tipoRespuesta: string;
//   opciones: string[];
//   obligatorio: boolean;
//   isEnabled: boolean;
// }

// interface ViewPlanProps {
//   planillaId: number;
// }

// const ViewPlan: React.FC<ViewPlanProps> = ({ planillaId }) => {
//   const [planilla, setPlanilla] = useState<Planilla | null>(null);
//   const [steps, setSteps] = useState<TableStep[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPlanillaAndSteps = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem('token'); // Obtener el token de localStorage

//         // Obtener la planilla
//         const planillaResponse = await axios.get(`https://emmanuel.somee.com/api/v1/Spreadsheets/${planillaId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setPlanilla(planillaResponse.data);

//         // Obtener los pasos
//         const stepsResponse = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const apiSteps: ApiStep[] = stepsResponse.data;

//         // Convertir `ApiStep` a `TableStep`
//         const stepsForTable: Step[] = apiSteps.map((step) => ({
//           id: step.id,
//           text: step.text,
//           answerType: step.answerType,
//           options: step.options,
//           isRequired: step.isRequired,
//           isEnabled: step.isEnabled,
//         }));
        

//         setSteps(stepsForTable);
//       } catch (err) {
//         setError('Error fetching data');
//         console.error('Error fetching data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlanillaAndSteps();
//   }, [planillaId]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="view-plan">
//       {planilla && (
//         <div className="planilla-details">
//           <h1>{planilla.name}</h1>
//           <p>{planilla.description}</p>
//           <p>Created By: {planilla.createdByName}</p>
//           <p>Updated By: {planilla.updatedByName}</p>
//         </div>
//       )}
//       <StepsTable initialSteps={steps} onStepsChange={setSteps} />
//     </div>
//   );
// };

// export default ViewPlan;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StepsTable from './components/StepsTable/StepsTable'; // Asegúrate de que la ruta sea correcta
// import { Step } from '../../types'; // Importa el tipo Step

// interface ViewPlanProps {
//   planillaId: number;
// }

// const ViewPlan: React.FC<ViewPlanProps> = ({ planillaId }) => {
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [planilla, setPlanilla] = useState<any>(null); // Cambia 'any' por el tipo adecuado si tienes uno definido

//   useEffect(() => {
//     const fetchPlanilla = async () => {
//       try {
//         const response = await axios.get(`https://emmanuel.somee.com/api/v1/Spreadsheets/${planillaId}`, {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         setPlanilla(response.data);
//       } catch (error) {
//         console.error("Error fetching planilla", error);
//       }
//     };

//     const fetchSteps = async () => {
//       try {
//         const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         });
//         setSteps(response.data);
//       } catch (error) {
//         console.error("Error fetching steps", error);
//       }
//     };

//     fetchPlanilla();
//     fetchSteps();
//   }, [planillaId]);

//   return (
//     <div>
//       {planilla && (
//         <div>
//           <h1>{planilla.name}</h1>
//           <p>{planilla.description}</p>
//           <StepsTable initialSteps={steps} onStepsChange={setSteps} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPlan;














import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StepsTable from '../ViewPlan/components/StepsTable/StepsTable'; // Asegúrate de que la ruta sea correcta
import { Step } from '../../types'; // Importa el tipo Step
import './ViewPlan.css'
import { BsLayoutTextSidebar } from "react-icons/bs";

const ViewPlan: React.FC = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [planilla, setPlanilla] = useState<any>(null); // Cambia 'any' por el tipo adecuado si tienes uno definido
  const [planillaId, setPlanillaId] = useState<number | null>(null);

  useEffect(() => {
    // Obtener el ID de la planilla del localStorage
    const storedPlanilla = localStorage.getItem('selectedPlanilla');
    if (storedPlanilla) {
      const { id } = JSON.parse(storedPlanilla);
      setPlanillaId(id);
    }
  }, []);

  useEffect(() => {
    if (planillaId === null) return;

    const fetchPlanilla = async () => {
      try {
        const response = await axios.get(`https://emmanuel.somee.com/api/v1/Spreadsheets/${planillaId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setPlanilla(response.data);
      } catch (error) {
        console.error("Error fetching planilla", error);
      }
    };

    const fetchSteps = async () => {
      try {
        const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setSteps(response.data);
      } catch (error) {
        console.error("Error fetching steps", error);
      }
    };

    fetchPlanilla();
    fetchSteps();
  }, [planillaId]);

  return (
    <div>
      {planilla && (
        <div>
          <h1 className='miti'><strong className='planitx'><BsLayoutTextSidebar/> Planilla:</strong> {planilla.name}</h1> <br></br>
          <p className='plan-tex'> <span className='descp'>Descripción de la Planilla</span> <br></br>{planilla.description}</p>
          <StepsTable initialSteps={steps} onStepsChange={setSteps} />
        </div>
      )}
    </div>
  );
};

export default ViewPlan;

