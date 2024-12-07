// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { User } from '../../Usuarios/hooks/User';
// import { Auditoria, Step } from '../types';




// export interface AuditoriaModalProps {
//   auditoria: Auditoria | null;
//   onClose: () => void;
//   onSave: (data: Auditoria) => void; // Cambiado aquí para aceptar un argumento
//   onStepResponseChange: (index: number, field: string, value: string) => void;
//   pacientes: User[];
//   asistentes: User[];
// }



// const AuditoriaModal: React.FC<AuditoriaModalProps> = ({
//   auditoria,
//   onClose,
//   onSave,
//   onStepResponseChange,
// }) => {
//   const [planillas, setPlanillas] = useState<{ id: number; name: string }[]>([]);
//   const [auditorias, setAuditorias] = useState<Auditoria[]>([]);
//   const [selectedPlanilla, setSelectedPlanilla] = useState<number | null>(null);
//   const [steps, setSteps] = useState<Step[]>(auditoria?.steps || []);
//   const [pacientes, setPacientes] = useState<{ id: number; userName: string }[]>([]);
//   const [asistentes, setAsistentes] = useState<{ id: number; userName: string }[]>([]);

//   const [selectedPacientId, setSelectedPacientId] = useState<number | null>(null);
//   const [selectedAssistantId, setSelectedAssistantId] = useState<number | null>(null);

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchPlanillas = async () => {
//       if (token) {
//         try {
//           const response = await axios.get('https://emmanuel.somee.com/api/v1/Spreadsheets', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'text/plain',
//             },
//           });
//           setPlanillas(response.data);
//         } catch (error) {
//           console.error('Error al cargar planillas:', error);
//         }
//       }
//     };

//     const fetchPacientes = async () => {
//       if (token) {
//         try {
//           const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setPacientes(response.data);
//         } catch (error) {
//           console.error('Error al cargar pacientes:', error);
//         }
//       }
//     };

//     const fetchAsistentes = async () => {
//       if (token) {
//         try {
//           const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Asistente', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setAsistentes(response.data);
//         } catch (error) {
//           console.error('Error al cargar asistentes:', error);
//         }
//       }
//     };

//     const fetchAuditorias = async () => {
//       if (token) {
//         try {
//           const response = await axios.get('https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               'Content-Type': 'application/json',
//             },
//           });
//           setAuditorias(response.data);
//         } catch (error) {
//           console.error('Error al cargar auditorías:', error);
//         }
//       }
//     };

//     fetchPlanillas();
//     fetchPacientes();
//     fetchAsistentes();
//     fetchAuditorias();
//   }, [token]);

//   const handlePlanillaChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const planillaId = Number(e.target.value);
//     setSelectedPlanilla(planillaId);

//     try {
//       const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'text/plain',
//         },
//       });
//       setSteps(response.data);
//     } catch (error) {
//       console.error('Error al cargar los pasos de la planilla:', error);
//     }
//   };

//   const handleStepResponseChange = (index: number, value: string) => {
//     const newSteps = [...steps];
//     newSteps[index].response = value;
//     setSteps(newSteps);
//     onStepResponseChange(index, 'response', value);
//   };

  
//   const handleSave = async () => {
//     try {
//         if (!steps.length || !selectedPacientId || !selectedAssistantId || !selectedPlanilla) {
//             console.error("Todos los campos son obligatorios.");
//             return;
//         }

//         const completedAudit: Auditoria = {
//             id: 0, // Asegúrate de asignar el ID correcto si es necesario.
//             spreadsheetName: `Planilla ${selectedPlanilla}`,
//             steps: steps.map((step) => ({
//                 text: step.text || '',
//                 isRequired: step.isRequired,
//                 answerType: step.answerType,
//                 options: step.options || [], // Asegúrate de que sea un array
//                 response: step.response || '',
//             })),
//             PatientId: selectedPacientId,
//             CarerId: selectedAssistantId,
//             SpreadSheetId: selectedPlanilla,
//             SpreedSheetCompletedItems: steps.map((step) => ({
//                 id: step.id || 0, // Asegúrate de asignar un ID si es necesario
//                 text: step.text || '', 
//                 answer: step.response || '', 
//                 arrayOptions: step.options || [], // Asegúrate de que este campo esté presente y sea un array
//                 isRequired: step.isRequired, // Asegúrate de que esta propiedad esté presente
//                 answerType: step.answerType, // Agrega este campo
//                 options: step.options || '', // Asumiendo que esto es un string, ajusta según tus necesidades
//             })),
//             sheetCompletedDate: new Date().toISOString(),
//             pacientId: selectedPacientId,
//             pacient: '', // Completa según sea necesario
//             carerId: selectedAssistantId,
//             carer: '', // Completa según sea necesario
//             sheetCompletedId: 0, // Asigna un ID si es necesario
//             sheetName: `Planilla ${selectedPlanilla}`, // Ajusta según tu lógica
//         };

//         await axios.post('https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds', completedAudit, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         onSave(completedAudit);
//         onClose();
//     } catch (error) {
//         console.error('Error al guardar auditoría:', error);
//     }
// };

  
  

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h3>{auditoria ? `Editar Auditoría: ${auditoria.spreadsheetName}` : 'Crear Nueva Auditoría'}</h3>

//         <div className="form-group">
//           <label>Seleccione Planilla</label>
//           <select onChange={handlePlanillaChange} value={selectedPlanilla || ''}>
//             <option value="">Seleccione una planilla</option>
//             {planillas.map((planilla) => (
//               <option key={planilla.id} value={planilla.id}>
//                 {planilla.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Seleccione Paciente</label>
//           <select onChange={(e) => setSelectedPacientId(Number(e.target.value))} value={selectedPacientId || ''}>
//             <option value="">Seleccione un paciente</option>
//             {pacientes.map((paciente) => (
//               <option key={paciente.id} value={paciente.id}>
//                 {paciente.userName}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Seleccione Asistente</label>
//           <select onChange={(e) => setSelectedAssistantId(Number(e.target.value))} value={selectedAssistantId || ''}>
//             <option value="">Seleccione un asistente</option>
//             {asistentes.map((asistente) => (
//               <option key={asistente.id} value={asistente.id}>
//                 {asistente.userName}
//               </option>
//             ))}
//           </select>
//         </div>

//         {steps.map((step, index) => (
//           <div key={index} className="step">
//             <h4>{step.text}</h4>
//             <input
//               type="text"
//               value={step.response}
//               onChange={(e) => handleStepResponseChange(index, e.target.value)}
//             />
//           </div>
//         ))}

//         <div className="modal-footer">
//           <button onClick={handleSave}>Guardar</button>
//           <button onClick={onClose}>Cerrar</button>
//         </div>
//       </div>

//       {/* Renderizar lista de auditorías */}
//       <div className="auditoria-list">
//         <h3>Auditorías Guardadas</h3>
//         {auditorias.map((auditoria) => (
//           <div key={auditoria.id}>
//             <h4>{auditoria.spreadsheetName}</h4>
//             {/* Agrega cualquier detalle adicional que desees mostrar */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AuditoriaModal;













import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '../../Usuarios/hooks/User';
import { Auditoria, Step } from '../types';
import './audi.css'

export interface AuditoriaModalProps {
  auditoria: Auditoria | null;
  onClose: () => void;
  onSave: (data: Auditoria) => void;
  onStepResponseChange: (index: number, field: string, value: string) => void;
  pacientes: User[];
  asistentes: User[];
  isViewOnly?: boolean; // Nueva propiedad
}

const AuditoriaModal: React.FC<AuditoriaModalProps> = ({
  auditoria,
  onClose,
  onSave,
  onStepResponseChange,
  isViewOnly
}) => {
  const [planillas, setPlanillas] = useState<{ id: number; name: string }[]>([]);
  const [auditorias, setAuditorias] = useState<Auditoria[]>([]);
  const [selectedPlanilla, setSelectedPlanilla] = useState<number | null>(null);
  const [steps, setSteps] = useState<Step[]>(auditoria?.steps || []);
  const [pacientes, setPacientes] = useState<{ id: number; userName: string }[]>([]);
  const [asistentes, setAsistentes] = useState<{ id: number; userName: string }[]>([]);
  const [selectedPacientId, setSelectedPacientId] = useState<number | null>(null);
  const [selectedAssistantId, setSelectedAssistantId] = useState<number | null>(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPlanillas = async () => {
      if (token) {
        try {
          const response = await axios.get('https://emmanuel.somee.com/api/v1/Spreadsheets', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'text/plain',
            },
          });
          setPlanillas(response.data);
        } catch (error) {
          console.error('Error al cargar planillas:', error);
        }
      }
    };
  
    const fetchPacientes = async () => {
      if (token) {
        try {
          const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPacientes(response.data);
        } catch (error) {
          console.error('Error al cargar pacientes:', error);
        }
      }
    };
  
    const fetchAsistentes = async () => {
      if (token) {
        try {
          const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Asistente', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setAsistentes(response.data);
        } catch (error) {
          console.error('Error al cargar asistentes:', error);
        }
      }
    };
  
    const fetchAuditorias = async () => {
      if (token) {
        try {
          const response = await axios.get('https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
          });
          setAuditorias(response.data);
        } catch (error) {
          console.error('Error al cargar auditorías:', error);
        }
      }
    };
  
    fetchPlanillas();
    fetchPacientes();
    fetchAsistentes();
    fetchAuditorias();
  }, [token]);
  

  const handlePlanillaChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const planillaId = Number(e.target.value);
    setSelectedPlanilla(planillaId);
  
    try {
      const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${planillaId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'text/plain',
        },
      });
  
      const stepsData = response.data.map((step: Step) => ({
        ...step,
        options: Array.isArray(step.options) ? step.options : step.options ? step.options.split(',') : [], 
      }));
  
      setSteps(stepsData);
    } catch (error) {
      console.error('Error al cargar los pasos de la planilla:', error);
    }
  };
  
  
  

  const handleStepResponseChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index].response = value;
    setSteps(newSteps);
    onStepResponseChange(index, 'response', value);
  };







  const handleSave = async () => {
    try {
      if (!steps.length || !selectedPacientId || !selectedAssistantId || !selectedPlanilla) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      const completedAudit: Auditoria = {
        id: 0, 
        spreadsheetName: `Planilla ${selectedPlanilla}`,
        steps: steps.map((step) => ({
          text: step.text || '',
          isRequired: step.isRequired,
          answerType: step.answerType,
          options: Array.isArray(step.options) ? step.options.join(',') : step.options || '', // Convierte a string si es array
          response: step.response || '',
        })),
        PatientId: selectedPacientId,
        CarerId: selectedAssistantId,
        SpreadSheetId: selectedPlanilla,
        SpreedSheetCompletedItems: steps.map((step) => ({
          id: step.id || 0, 
          text: step.text || '',
          answer: step.response || '',
          arrayOptions: Array.isArray(step.options) ? step.options : [], // Asegura que sea un array
          isRequired: step.isRequired,
          answerType: step.answerType,
          options: Array.isArray(step.options) ? step.options.join(',') : step.options || '', // Convierte a string si es array
        })),
        sheetCompletedDate: new Date().toISOString(),
        pacientId: selectedPacientId,
        pacient: '', 
        carerId: selectedAssistantId,
        carer: '', 
        sheetCompletedId: 0, 
        sheetName: `Planilla ${selectedPlanilla}`, 
      };
  
      await axios.post('https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds', completedAudit, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      onSave(completedAudit);
      onClose();
    } catch (error) {
      console.error('Error al guardar auditoría:', error);
    }
  };
  







const renderInputField = (step: Step, index: number) => {
  switch (String(step.answerType)) {
    case "Libre":
      return (
        <input
          type="text"
          value={step.response || ''}
          onChange={(e) => handleStepResponseChange(index, e.target.value)}
          disabled={isViewOnly} // Deshabilitado si es vista
        />
      );
    case "Numerico":
      return (
        <input
          type="number"
          value={step.response || ''}
          onChange={(e) => handleStepResponseChange(index, e.target.value)}
          disabled={isViewOnly}
        />
      );
    case "Fecha":
      return (
        <input
          type="date"
          value={step.response || ''}
          onChange={(e) => handleStepResponseChange(index, e.target.value)}
          disabled={isViewOnly}
        />
      );
    case "Hora":
      return (
        <input
          type="time"
          value={step.response || ''}
          onChange={(e) => handleStepResponseChange(index, e.target.value)}
          disabled={isViewOnly}
        />
      );
    case "MultipleOpciones":
      return (
        <select
          value={step.response || ''}
          onChange={(e) => handleStepResponseChange(index, e.target.value)}
          disabled={isViewOnly}
        >
          <option value="">Seleccione una opción</option>
          {Array.isArray(step.options)
            ? step.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))
            : <option disabled>Opciones no disponibles</option>}
        </select>
      );
    default:
      return (
        <input
          type="text"
          value={step.response || ''}
          onChange={(e) => handleStepResponseChange(index, e.target.value)}
          disabled={isViewOnly}
        />
      );
  }
};



  return (
    <div className="modal-overlay">
      <div className="mod-content">
        <h3>{auditoria ? `Editar Auditoría: ${auditoria.spreadsheetName}` : 'Crear Nueva Auditoría'}</h3>

        {/* Formulario de selección */}
        <div className="form-group">
          <label>Seleccione Planilla</label>
          <select onChange={handlePlanillaChange} value={selectedPlanilla || ''}>
            <option value="">Seleccione una planilla</option>
            {planillas.map((planilla) => (
              <option key={planilla.id} value={planilla.id}>
                {planilla.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Seleccione Paciente</label>
          <select onChange={(e) => setSelectedPacientId(Number(e.target.value))} value={selectedPacientId || ''}>
            <option value="">Seleccione un paciente</option>
            {pacientes.map((paciente) => (
              <option key={paciente.id} value={paciente.id}>
                {paciente.userName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Seleccione Asistente</label>
          <select onChange={(e) => setSelectedAssistantId(Number(e.target.value))} value={selectedAssistantId || ''}>
            <option value="">Seleccione un asistente</option>
            {asistentes.map((asistente) => (
              <option key={asistente.id} value={asistente.id}>
                {asistente.userName}
              </option>
            ))}
          </select>
        </div>

        {/* Campos de entrada para cada paso */}
        {steps.map((step, index) => (
          <div key={index} className="step">
            <h4>{step.text}</h4>
            {renderInputField(step, index)}
          </div>
        ))}

        <div className="modal-footer">

          <button className="mod-button" onClick={handleSave}>
            Guardar
          </button>

          <button className="mod-button" onClick={onClose}>
            Cerrar
          </button>

        </div>
      </div>

      <div className="auditoria-list">
        {auditorias.map((auditoria) => (
          <div key={auditoria.id}>
            <h4>{auditoria.spreadsheetName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditoriaModal;
