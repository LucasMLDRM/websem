// import React from 'react';
// import './VerAuditoriaModal.css';

// interface VerAuditoriaModalProps {
//   auditoria: {
//     pacient: string;
//     carer: string;
//     sheetCompletedDate: string;
//     sheetName: string;
//   };
//   onClose: () => void;
// }

// const VerAuditoriaModal: React.FC<VerAuditoriaModalProps> = ({ auditoria, onClose }) => {
//   return (
//     <div className="ver-auditoria-modal">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Detalles de la Auditoría</h2>
//         <p><strong>Beneficiario:</strong> {auditoria.pacient}</p>
//         <p><strong>Cuidador:</strong> {auditoria.carer}</p>
//         <p><strong>Fecha de Carga:</strong> {new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</p>
//         <p><strong>Planilla:</strong> {auditoria.sheetName}</p>
//       </div>
//     </div>
//   );
// };

// export default VerAuditoriaModal;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './VerAuditoriaModal.css';

// interface SpreedSheetCompletedItem {
//   id: number;
//   text: string;
//   isRequired: boolean;
//   answerType: string;
//   options: string;
//   answer: string;
//   arrayOptions: string[];
// }

// interface Auditoria {
//   id: number; // Añadido para identificar la auditoría
//   pacient: string;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetName: string;
//   spreedSheetCompletedItems: SpreedSheetCompletedItem[]; // Añadido para los ítems
// }

// const VerAuditoriaModal: React.FC<{ id: number; onClose: () => void }> = ({ id, onClose }) => {
//   const [auditoria, setAuditoria] = useState<Auditoria | null>(null);

//   useEffect(() => {
//     const fetchAuditoria = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(
//           `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setAuditoria(response.data);
//       } catch (error) {
//         console.error("Error al cargar la auditoría:", error);
//       }
//     };

//     fetchAuditoria();
//   }, [id]);

//   if (!auditoria) return <div>Cargando...</div>;

//   return (
//     <div className="ver-auditoria-modal">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Detalles de la Auditoría</h2>
//         <p><strong>Beneficiario:</strong> {auditoria.pacient}</p>
//         <p><strong>Cuidador:</strong> {auditoria.carer}</p>
//         <p><strong>Fecha de Carga:</strong> {new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</p>
//         <p><strong>Planilla:</strong> {auditoria.sheetName}</p>

//         <h3>Ítems Completados en la Auditoría</h3>
//         {auditoria.spreedSheetCompletedItems.length > 0 ? (
//           auditoria.spreedSheetCompletedItems.map(item => (
//             <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//               <p><strong>Texto:</strong> {item.text}</p>
//               <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//               <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//               {item.options && (
//                 <p><strong>Opciones:</strong> {item.options}</p>
//               )}
//               <p><strong>Respuesta:</strong> {item.answer}</p>
//             </div>
//           ))
//         ) : (
//           <p>No hay ítems completados en esta auditoría.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VerAuditoriaModal;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// const VerAuditoriaModal: React.FC<{ id: number; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);

//     useEffect(() => {
//         const fetchPlanilla = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get(
//                     `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     }
//                 );
//                 setPlanilla(response.data);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems && planilla.spreedSheetCompletedItems.length > 0 ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && (
//                                 <p><strong>Opciones:</strong> {item.options}</p>
//                             )}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;




















// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// const VerAuditoriaModal: React.FC<{ id: number; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);

//     useEffect(() => {
//         const fetchPlanilla = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get(
//                     `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     }
//                 );
//                 setPlanilla(response.data);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     if (!planilla) return <div className="spinner"></div>; // Cambiamos "Cargando..." por el spinner

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems && planilla.spreedSheetCompletedItems.length > 0 ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && (
//                                 <p><strong>Opciones:</strong> {item.options}</p>
//                             )}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;


// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// const VerAuditoriaModal: React.FC<{ id: number; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);

//     useEffect(() => {
//         const fetchPlanilla = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get(
//                     `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`
//                         }
//                     }
//                 );
//                 setPlanilla(response.data);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     // No renderizar nada hasta que `planilla` esté cargada
//     if (!planilla) return null;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems && planilla.spreedSheetCompletedItems.length > 0 ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && (
//                                 <p><strong>Opciones:</strong> {item.options}</p>
//                             )}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;













// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// const VerAuditoriaModal: React.FC<{ id: number; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [carerName, setCarerName] = useState<string | null>(null);
//     const [patientName, setPatientName] = useState<string | null>(null);

//     // Función para obtener el nombre de un usuario por su ID
//     const fetchUserName = async (userId: number): Promise<string | null> => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             return response.data.userName || null;
//         } catch (error) {
//             console.error(`Error al obtener el nombre del usuario con ID ${userId}:`, error);
//             return null;
//         }
//     };

//     useEffect(() => {
//         const fetchPlanilla = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get(
//                     `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );

//                 const fetchedPlanilla = response.data;

//                 // Obtén los nombres del cuidador y del paciente
//                 const [carer, patient] = await Promise.all([
//                     fetchUserName(fetchedPlanilla.carerId),
//                     fetchUserName(fetchedPlanilla.patientId),
//                 ]);

//                 setPlanilla(fetchedPlanilla);
//                 setCarerName(carer);
//                 setPatientName(patient);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     // No renderizar nada hasta que `planilla` esté cargada
//     if (!planilla) return null;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName || 'Cargando...'}</p>
//                 <p><strong>Paciente:</strong> {patientName || 'Cargando...'}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems && planilla.spreedSheetCompletedItems.length > 0 ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && (
//                                 <p><strong>Opciones:</strong> {item.options}</p>
//                             )}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;













// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// interface VerAuditoriaModalProps {
//     id: number;
//     onClose: () => void;
// }

// const VerAuditoriaModal: React.FC<VerAuditoriaModalProps> = ({ id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [carerName, setCarerName] = useState<string | null>(null);
//     const [patientName, setPatientName] = useState<string | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     const token = localStorage.getItem('token');

//     // Función para obtener el nombre de un usuario por su ID
//     const fetchUserName = async (userId: number): Promise<string | null> => {
//         try {
//             const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${userId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             return response.data.userName || null;
//         } catch (error) {
//             console.error(`Error al obtener el nombre del usuario con ID ${userId}:`, error);
//             return 'Desconocido';
//         }
//     };

//     // Carga los datos de la planilla y los nombres asociados al cuidador y paciente
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 const fetchedPlanilla = response.data;

//                 // Cargar nombres del cuidador y paciente
//                 const [carer, patient] = await Promise.all([
//                     fetchUserName(fetchedPlanilla.carerId),
//                     fetchUserName(fetchedPlanilla.patientId),
//                 ]);

//                 setPlanilla(fetchedPlanilla);
//                 setCarerName(carer);
//                 setPatientName(patient);
//             } catch (error) {
//                 console.error('Error al cargar los datos:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id, token]);

//     // Mientras carga, mostrar indicador
//     if (loading) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Cargando detalles de la auditoría...</h2>
//                 </div>
//             </div>
//         );
//     }

//     // Si no se encuentra la planilla
//     if (!planilla) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Error</h2>
//                     <p>No se encontraron datos para la planilla solicitada.</p>
//                     <button onClick={onClose}>Cerrar</button>
//                 </div>
//             </div>
//         );
//     }

//     // Renderizar datos de la planilla y los ítems completados
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName}</p>
//                 <p><strong>Paciente:</strong> {patientName}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems?.length ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && (
//                                 <p><strong>Opciones:</strong> {item.options}</p>
//                             )}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;











// import React, { useEffect, useState } from 'react'; 
// import axios from 'axios';

// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// interface VerAuditoriaModalProps {
//     id: number;
//     carerName: string;  // Añadir carerName a las props
//     patientName: string; // Añadir patientName a las props
//     onClose: () => void;
// }

// const VerAuditoriaModal: React.FC<VerAuditoriaModalProps> = ({ id, carerName, patientName, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     const token = localStorage.getItem('token');

//     // Función para obtener el nombre de un usuario por su ID

//     // Carga los datos de la planilla
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 const fetchedPlanilla = response.data;

//                 setPlanilla(fetchedPlanilla);
//             } catch (error) {
//                 console.error('Error al cargar los datos:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id, token]);

//     // Mientras carga, mostrar indicador
//     if (loading) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Cargando detalles de la auditoría...</h2>
//                 </div>
//             </div>
//         );
//     }

//     // Si no se encuentra la planilla
//     if (!planilla) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Error</h2>
//                     <p>No se encontraron datos para la planilla solicitada.</p>
//                     <button onClick={onClose}>Cerrar</button>
//                 </div>
//             </div>
//         );
//     }

//     // Renderizar datos de la planilla y los ítems completados
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName}</p> {/* Mostrar carerName recibido */}
//                 <p><strong>Paciente:</strong> {patientName}</p> {/* Mostrar patientName recibido */}

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems?.length ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && (
//                                 <p><strong>Opciones:</strong> {item.options}</p>
//                             )}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // Tipos de datos para la planilla y los items completados
// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// // Props que el modal necesita para recibir
// interface VerAuditoriaModalProps {
//     id: number;
//     carerName: string;
//     patientName: string;
//     onClose: () => void;
// }

// const VerAuditoriaModal: React.FC<VerAuditoriaModalProps> = ({ id, carerName, patientName, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const token = localStorage.getItem('token');

//     // Cargar los datos de la planilla desde la API
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 // Guardar la planilla obtenida en el estado
//                 setPlanilla(response.data);
//             } catch (error) {
//                 console.error('Error al cargar los datos:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id, token]);

//     // Mientras los datos se están cargando, mostramos un mensaje de carga
//     if (loading) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Cargando detalles de la auditoría...</h2>
//                 </div>
//             </div>
//         );
//     }

//     // Si no se encuentra la planilla
//     if (!planilla) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Error</h2>
//                     <p>No se encontraron datos para la planilla solicitada.</p>
//                     <button onClick={onClose}>Cerrar</button>
//                 </div>
//             </div>
//         );
//     }

//     // Renderizar los detalles de la planilla y los ítems completados
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName}</p> {/* Mostrar nombre del cuidador */}
//                 <p><strong>Paciente:</strong> {patientName}</p> {/* Mostrar nombre del paciente */}

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems?.length ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div
//                             key={item.id}
//                             style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}
//                         >
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && <p><strong>Opciones:</strong> {item.options}</p>}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // Tipos de datos para la planilla y los items completados
// interface SpreedSheetCompletedItem {
//     id: number;
//     text: string;
//     isRequired: boolean;
//     answerType: string;
//     options: string;
//     answer: string;
//     arrayOptions: string[];
// }

// interface Planilla {
//     id: number;
//     spreadSheetId: number;
//     name: string;
//     creationTime: string;
//     carerId: number;
//     patientId: number;
//     spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
// }

// // Props que el modal necesita para recibir
// interface VerAuditoriaModalProps {
//     id: number;
//     carerName: string;
//     patientName: string;
//     onClose: () => void;
// }

// const VerAuditoriaModal: React.FC<VerAuditoriaModalProps> = ({ id, carerName, patientName, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const token = localStorage.getItem('token');

//     // Cargar los datos de la planilla desde la API
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 // Guardar la planilla obtenida en el estado
//                 setPlanilla(response.data);
//             } catch (error) {
//                 console.error('Error al cargar los datos:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [id, token]);

//     // Mientras los datos se están cargando, mostramos un mensaje de carga
//     if (loading) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Cargando detalles de la auditoría...</h2>
//                 </div>
//             </div>
//         );
//     }

//     // Si no se encuentra la planilla
//     if (!planilla) {
//         return (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>Error</h2>
//                     <p>No se encontraron datos para la planilla solicitada.</p>
//                     <button onClick={onClose}>Cerrar</button>
//                 </div>
//             </div>
//         );
//     }

//     // Renderizar los detalles de la planilla y los ítems completados
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Detalles de la Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName}</p> {/* Mostrar nombre del cuidador */}
//                 <p><strong>Paciente:</strong> {patientName}</p> {/* Mostrar nombre del paciente */}

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {planilla.spreedSheetCompletedItems?.length ? (
//                     planilla.spreedSheetCompletedItems.map((item) => (
//                         <div key={item.id} className="completed-item">
//                             <p><strong>Texto:</strong> {item.text}</p>
//                             <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
//                             <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                             {item.options && <p><strong>Opciones:</strong> {item.options}</p>}
//                             <p><strong>Respuesta:</strong> {item.answer}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}

//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default VerAuditoriaModal;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VerAuditoriaModal.css'

// Tipos de datos para la planilla y los items completados
interface SpreedSheetCompletedItem {
    id: number;
    text: string;
    isRequired: boolean;
    answerType: string;
    options: string;
    answer: string;
    arrayOptions: string[];
}

interface Planilla {
    id: number;
    spreadSheetId: number;
    name: string;
    creationTime: string;
    carerId: number;
    patientId: number;
    spreedSheetCompletedItems?: SpreedSheetCompletedItem[];
}

// Props que el modal necesita para recibir
interface VerAuditoriaModalProps {
    id: number;
    carerName: string;
    patientName: string;
    onClose: () => void;
}

const VerAuditoriaModal: React.FC<VerAuditoriaModalProps> = ({ id, carerName, patientName, onClose }) => {
    const [planilla, setPlanilla] = useState<Planilla | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const token = localStorage.getItem('token');

    // Cargar los datos de la planilla desde la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // Guardar la planilla obtenida en el estado
                setPlanilla(response.data);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, token]);

    // Mientras los datos se están cargando, mostramos un mensaje de carga
    if (loading) {
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Cargando detalles de la auditoría...</h2>
                </div>
            </div>
        );
    }

    // Si no se encuentra la planilla
    if (!planilla) {
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Error</h2>
                    <p>No se encontraron datos para la planilla solicitada.</p>
                    <button className="close-btn" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        );
    }

    // Renderizar los detalles de la planilla y los ítems completados
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Detalles de la Planilla: {planilla.name}</h2>
                <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
                <p><strong>Cuidador:</strong> {carerName}</p> 
                <p><strong>Paciente:</strong> {patientName}</p> 

                <h3>Ítems Completados en la Planilla</h3>
                {planilla.spreedSheetCompletedItems?.length ? (
                    planilla.spreedSheetCompletedItems.map((item) => (
                        <div key={item.id} className="completed-item">
                            <p><strong>Texto:</strong> {item.text}</p>
                            <p><strong>Requerido:</strong> {item.isRequired ? 'Sí' : 'No'}</p>
                            <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
                            {item.options && <p><strong>Opciones:</strong> {item.options}</p>}
                            <p><strong>Respuesta:</strong> {item.answer}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay ítems completados en esta planilla.</p>
                )}

                <button className="close-btn" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default VerAuditoriaModal;
