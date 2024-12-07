// // EditarAuditoriaModal.tsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './EditarAuditoriaModal.css'

// interface EditarAuditoriaModalProps {
//   id: number;
//   onClose: () => void;
//   onSave: (data: any) => void;
// }

// const EditarAuditoriaModal: React.FC<EditarAuditoriaModalProps> = ({ id, onClose, onSave }) => {
//   const [spreadsheetCompleted, setSpreadsheetCompleted] = useState<any | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchSpreadsheetCompleted = async () => {
//       try {
//         const token = localStorage.getItem('token'); // Obtener el token del localStorage
//         const response = await axios.put(`https://emmanuel.somee.com/api/v1/SpreadSheetCompleteds/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`, // Agregar el token a los encabezados
//             ContentType: 'text/plain' 
//           },
//         });
//         setSpreadsheetCompleted(response.data);
//       } catch (error) {
//         console.error('Error al obtener los datos de la planilla:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSpreadsheetCompleted();
//   }, [id]);

//   const handleSave = () => {
//     // Lógica para guardar los cambios aquí
//     onSave(spreadsheetCompleted); // Pasar los datos editados al componente padre
//     onClose();
//   };

//   if (loading) return <div>Cargando...</div>;

//   return (
//     <div className="modal">
//       <h2>Editar Auditoría</h2>
//       <div>
//         <label>Nombre de la Planilla:</label>
//         <input
//           type="text"
//           value={spreadsheetCompleted.sheetName}
//           onChange={(e) => setSpreadsheetCompleted({ ...spreadsheetCompleted, sheetName: e.target.value })}
//         />
//       </div>
//       {/* Agrega más campos según la estructura de 'spreadsheetCompleted' */}
//       <button onClick={handleSave}>Guardar</button>
//       <button onClick={onClose}>Cerrar</button>
//     </div>
//   );
// };

// export default EditarAuditoriaModal;




















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './EditarAuditoriaModal.css';

// interface EditarAuditoriaModalProps {
//   id: number;
//   onClose: () => void;
//   onSave: (data: any) => void;
// }

// const EditarAuditoriaModal: React.FC<EditarAuditoriaModalProps> = ({ id, onClose, onSave }) => {
//   const [spreadsheetCompleted, setSpreadsheetCompleted] = useState<any | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchSpreadsheetCompleted = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         setSpreadsheetCompleted(response.data);
//       } catch (error) {
//         console.error('Error al obtener los datos de la auditoría:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSpreadsheetCompleted();
//   }, [id]);

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put(`https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${id}`, spreadsheetCompleted, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });
//       onSave(spreadsheetCompleted);
//       onClose();
//     } catch (error) {
//       console.error('Error al guardar los cambios de la auditoría:', error);
//     }
//   };

//   if (loading) return <div>Cargando...</div>;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Editar Auditoría</h2>
//         <div className="form-group">
//           <label>Nombre de la Planilla:</label>
//           <input
//             type="text"
//             value={spreadsheetCompleted.sheetName || ''}
//             onChange={(e) => setSpreadsheetCompleted({ ...spreadsheetCompleted, sheetName: e.target.value })}
//           />
//         </div>
//         {spreadsheetCompleted.SpreedSheetCompletedItems?.map((item: any, index: number) => (
//           <div key={index} className="form-group">
//             <label>{item.text}</label>
//             <input
//               type="text"
//               value={item.answer || ''}
//               onChange={(e) => {
//                 const updatedItems = [...spreadsheetCompleted.SpreedSheetCompletedItems];
//                 updatedItems[index].answer = e.target.value;
//                 setSpreadsheetCompleted({ ...spreadsheetCompleted, SpreedSheetCompletedItems: updatedItems });
//               }}
//             />
//           </div>
//         ))}
//         <div className="modal-footer">
//           <button onClick={handleSave}>Guardar</button>
//           <button onClick={onClose}>Cerrar</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditarAuditoriaModal;












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
//     spreedSheetCompletedItems: SpreedSheetCompletedItem[];
// }

// const EditPlanilla: React.FC<{ id: number }> = ({ id: Id }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);

//     useEffect(() => {
//         const fetchPlanilla = async () => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get(
//                     `https://emmanuel.somee.com/api/v1/SpreadsheetItems/SpreadSheet/${Id}`,
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
//         <div>
//             <h2>Editar Planilla: {planilla.name}</h2>
//             <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//             <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//             <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//             <h3>Ítems Completados en la Planilla</h3>
//             {planilla.spreedSheetCompletedItems.map((item, index) => (
//                 <div key={index} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                     <p><strong>Texto:</strong> {item.text}</p>
//                     <p><strong>Requerido:</strong> {item.isRequired ? "Sí" : "No"}</p>
//                     <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                     <p><strong>Opciones:</strong> {item.options || "N/A"}</p>
//                     <p><strong>Respuesta:</strong> {item.answer}</p>
//                     {item.arrayOptions.length > 0 && (
//                         <div>
//                             <strong>Opciones del Array:</strong>
//                             <ul>
//                                 {item.arrayOptions.map((option, idx) => (
//                                     <li key={idx}>{option}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default EditPlanilla;







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

// const EditPlanilla: React.FC<{ id: number }> = ({ id: Id }) => {
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
//         <div>
//             <h2>Editar Planilla: {planilla.name}</h2>
//             <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//             <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//             <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//             <h3>Ítems Completados en la Planilla</h3>
//             {planilla.spreedSheetCompletedItems && planilla.spreedSheetCompletedItems.length > 0 ? (
//                 planilla.spreedSheetCompletedItems.map((item) => (
//                     <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                         <p><strong>Texto:</strong> {item.text}</p>
//                         <p><strong>Requerido:</strong> {item.isRequired ? "Sí" : "No"}</p>
//                         <p><strong>Tipo de Respuesta:</strong> {item.answerType}</p>
//                         <p><strong>Opciones:</strong> {item.options || "N/A"}</p>
//                         <p><strong>Respuesta:</strong> {item.answer}</p>
//                         {item.arrayOptions.length > 0 && (
//                             <div>
//                                 <strong>Opciones del Array:</strong>
//                                 <ul>
//                                     {item.arrayOptions.map((option, idx) => (
//                                         <li key={idx}>{option}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 ))
//             ) : (
//                 <p>No hay ítems completados en esta planilla.</p>
//             )}
//         </div>
//     );
// };

// export default EditPlanilla;












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

// const EditPlanilla: React.FC<{ id: number; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: any) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index][field] = value;
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                 { ...planilla, spreedSheetCompletedItems: editedItems },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose(); // Cerrar el modal al guardar
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Editar Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Opciones:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.options}
//                                     onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={handleSave}>Guardar</button>
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;















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

// const EditPlanilla: React.FC<{ id: number; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                 { ...planilla, spreedSheetCompletedItems: editedItems },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose(); // Cerrar el modal al guardar
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Editar Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Opciones:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.options}
//                                     onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={handleSave}>Guardar</button>
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;















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

// const EditPlanilla: React.FC<{ id: any ; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                 { ...planilla, spreedSheetCompletedItems: editedItems },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose(); // Cerrar el modal al guardar
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Editar Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                 />
//                             </label>
//                             {item.options && (
//                                 <label>
//                                     <strong>Opciones:</strong>
//                                     <input
//                                         type="text"
//                                         value={item.options}
//                                         onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                     />
//                                 </label>
//                             )}
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={handleSave}>Guardar</button>
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;











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

// const EditPlanilla: React.FC<{ id: any; onClose: () => void }> = ({ id: Id, onClose }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         if (!planilla) return; // Asegúrate de que planilla no es null

//         // Construir el objeto con la estructura correcta
//         const updatedPlanilla = {
//             id: planilla.id,
//             spreadSheetId: planilla.spreadSheetId,
//             name: planilla.name,
//             creationTime: planilla.creationTime,
//             carerId: planilla.carerId,
//             patientId: planilla.patientId,
//             spreedSheetCompletedItems: editedItems, // Asegúrate de que esto contiene todos los items editados
//         };

//         try {
//             const token = localStorage.getItem('token');
//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
//                 updatedPlanilla, // Envía el objeto actualizado
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose(); // Cerrar el modal al guardar
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Editar Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                 />
//                             </label>
//                             {item.options && (
//                                 <label>
//                                     <strong>Opciones:</strong>
//                                     <input
//                                         type="text"
//                                         value={item.options}
//                                         onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                     />
//                                 </label>
//                             )}
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={handleSave}>Guardar</button>
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;









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
//     spreedSheetCompletedItems: SpreedSheetCompletedItem[];
// }

// const EditPlanilla: React.FC<{ id: any; onClose: () => void }> = ({ id: Id, onClose, isViewOnly }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setPlanilla(response.data);
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         if (!planilla) return;

//         try {
//             const token = localStorage.getItem('token');
//             const dataToUpdate = {
//                 id: planilla.id,
//                 spreadSheetId: planilla.spreadSheetId,
//                 name: planilla.name,
//                 creationTime: planilla.creationTime,
//                 carerId: planilla.carerId,
//                 patientId: planilla.patientId,
//                 spreedSheetCompletedItems: editedItems.map(item => ({
//                     id: item.id,
//                     text: item.text,
//                     isRequired: item.isRequired,
//                     answerType: item.answerType,
//                     options: item.options,
//                     answer: item.answer,
//                     arrayOptions: item.arrayOptions || [],  // Asegurarse de que arrayOptions esté presente como un array vacío si no hay opciones.
//                 })),
//             };

//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds`,
//                 dataToUpdate,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose();
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>Editar Planilla: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                 />
//                             </label>
//                             {item.options && (
//                                 <label>
//                                     <strong>Opciones:</strong>
//                                     <input
//                                         type="text"
//                                         value={item.options}
//                                         onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                     />
//                                 </label>
//                             )}
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 <button onClick={handleSave}>Guardar</button>
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;



































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
//     spreedSheetCompletedItems: SpreedSheetCompletedItem[];
// }

// const EditPlanilla: React.FC<{ id: any; onClose: () => void; isViewOnly: boolean }> = ({ id: Id, onClose, isViewOnly }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setPlanilla(response.data);
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         if (!planilla) return;

//         try {
//             const token = localStorage.getItem('token');
//             const dataToUpdate = {
//                 id: planilla.id,
//                 spreadSheetId: planilla.spreadSheetId,
//                 name: planilla.name,
//                 creationTime: planilla.creationTime,
//                 carerId: planilla.carerId,
//                 patientId: planilla.patientId,
//                 spreedSheetCompletedItems: editedItems.map(item => ({
//                     id: item.id,
//                     text: item.text,
//                     isRequired: item.isRequired,
//                     answerType: item.answerType,
//                     options: item.options,
//                     answer: item.answer,
//                     arrayOptions: item.arrayOptions || [],
//                 })),
//             };

//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds`,
//                 dataToUpdate,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose();
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>{isViewOnly ? "Ver Planilla" : "Editar Planilla"}: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador ID:</strong> {planilla.carerId}</p>
//                 <p><strong>Paciente ID:</strong> {planilla.patientId}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                             {item.options && (
//                                 <label>
//                                     <strong>Opciones:</strong>
//                                     <input
//                                         type="text"
//                                         value={item.options}
//                                         onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 </label>
//                             )}
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 {!isViewOnly && <button onClick={handleSave}>Guardar</button>}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;





















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
//     spreedSheetCompletedItems: SpreedSheetCompletedItem[];
// }

// const EditPlanilla: React.FC<{ id: any; onClose: () => void; isViewOnly: boolean }> = ({ id: Id, onClose, isViewOnly }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [carerName, setCarerName] = useState<string | null>(null);
//     const [patientName, setPatientName] = useState<string | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

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
//                 setPlanilla(response.data);
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         const fetchUserName = async (userId: number, setName: React.Dispatch<React.SetStateAction<string | null>>) => {
//             try {
//                 const token = localStorage.getItem('token');
//                 const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${userId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setName(response.data.name);
//             } catch (error) {
//                 console.error("Error al obtener el nombre del usuario:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     useEffect(() => {
//         if (planilla) {
//             fetchUserName(planilla.carerId, setCarerName);
//             fetchUserName(planilla.patientId, setPatientName);
//         }
//     }, [planilla]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         if (!planilla) return;

//         try {
//             const token = localStorage.getItem('token');
//             const dataToUpdate = {
//                 id: planilla.id,
//                 spreadSheetId: planilla.spreadSheetId,
//                 name: planilla.name,
//                 creationTime: planilla.creationTime,
//                 carerId: planilla.carerId,
//                 patientId: planilla.patientId,
//                 spreedSheetCompletedItems: editedItems.map(item => ({
//                     id: item.id,
//                     text: item.text,
//                     isRequired: item.isRequired,
//                     answerType: item.answerType,
//                     options: item.options,
//                     answer: item.answer,
//                     arrayOptions: item.arrayOptions || [],
//                 })),
//             };

//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds`,
//                 dataToUpdate,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose();
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div>Cargando...</div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>{isViewOnly ? "Ver Planilla" : "Editar Planilla"}: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName || "Cargando..."}</p>
//                 <p><strong>Paciente:</strong> {patientName || "Cargando..."}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }}>
//                             <label>
//                                 <strong>Texto:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.text}
//                                     onChange={(e) => handleChange(index, 'text', e.target.value)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Requerido:</strong>
//                                 <input
//                                     type="checkbox"
//                                     checked={item.isRequired}
//                                     onChange={(e) => handleChange(index, 'isRequired', e.target.checked)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                             <label>
//                                 <strong>Tipo de Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answerType}
//                                     onChange={(e) => handleChange(index, 'answerType', e.target.value)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                             {item.options && (
//                                 <label>
//                                     <strong>Opciones:</strong>
//                                     <input
//                                         type="text"
//                                         value={item.options}
//                                         onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 </label>
//                             )}
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 <input
//                                     type="text"
//                                     value={item.answer}
//                                     onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                     disabled={isViewOnly}
//                                 />
//                             </label>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 {!isViewOnly && <button onClick={handleSave}>Guardar</button>}
//                 <button onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;






















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import'./EditarAuditoriaModal.css'

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
//     spreedSheetCompletedItems: SpreedSheetCompletedItem[];
// }

// const EditPlanilla: React.FC<{ id: any; onClose: () => void; isViewOnly: boolean }> = ({ id: Id, onClose, isViewOnly }) => {
//     const [planilla, setPlanilla] = useState<Planilla | null>(null);
//     const [carerName, setCarerName] = useState<string | null>(null);
//     const [patientName, setPatientName] = useState<string | null>(null);
//     const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

//     // Función para obtener el nombre de un usuario por su ID
//     const fetchUserName = async (userId: number, setName: React.Dispatch<React.SetStateAction<string | null>>) => {
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setName(response.data.name);
//         } catch (error) {
//             console.error("Error al obtener el nombre del usuario:", error);
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
//                 setPlanilla(response.data);
//                 setEditedItems(response.data.spreedSheetCompletedItems || []);
//             } catch (error) {
//                 console.error("Error al cargar la planilla:", error);
//             }
//         };

//         fetchPlanilla();
//     }, [Id]);

//     // Obtener los nombres del cuidador y paciente una vez que se carga la planilla
//     useEffect(() => {
//         if (planilla) {
//             fetchUserName(planilla.carerId, setCarerName);
//             fetchUserName(planilla.patientId, setPatientName);
//         }
//     }, [planilla]);

//     const handleChange = (index: number, field: keyof SpreedSheetCompletedItem, value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]) => {
//         const updatedItems = [...editedItems];
//         updatedItems[index] = { ...updatedItems[index], [field]: value };
//         setEditedItems(updatedItems);
//     };

//     const handleSave = async () => {
//         if (!planilla) return;

//         try {
//             const token = localStorage.getItem('token');
//             const dataToUpdate = {
//                 id: planilla.id,
//                 spreadSheetId: planilla.spreadSheetId,
//                 name: planilla.name,
//                 creationTime: planilla.creationTime,
//                 carerId: planilla.carerId,
//                 patientId: planilla.patientId,
//                 spreedSheetCompletedItems: editedItems.map(item => ({
//                     id: item.id,
//                     text: item.text,
//                     isRequired: item.isRequired,
//                     answerType: item.answerType,
//                     options: item.options,
//                     answer: item.answer,
//                     arrayOptions: item.arrayOptions || [],
//                 })),
//             };

//             await axios.put(
//                 `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds`,
//                 dataToUpdate,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             alert("Planilla actualizada con éxito");
//             onClose();
//         } catch (error) {
//             console.error("Error al guardar la planilla:", error);
//         }
//     };

//     if (!planilla) return <div></div>;

//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 <h2>{isViewOnly ? "Ver Planilla" : "Editar Planilla"}: {planilla.name}</h2>
//                 <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
//                 <p><strong>Cuidador:</strong> {carerName || "Cargando..."}</p>
//                 <p><strong>Paciente:</strong> {patientName || "Cargando..."}</p>

//                 <h3>Ítems Completados en la Planilla</h3>
//                 {editedItems.length > 0 ? (
//                     editedItems.map((item, index) => (
//                         <div key={item.id} className='bordes' >
//                             <label>

//                                 <h3 className='item-text'>{item.text}</h3>
                                
//                             </label>
//                             {item.options && (
//                                 <label>
//                                     <strong>Opciones:</strong>
//                                     <input
//                                         type="text"
//                                         value={item.options}
//                                         onChange={(e) => handleChange(index, 'options', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 </label>
//                             )}
//                             <label>
//                                 <strong>Respuesta:</strong>
//                                 {item.answerType === "Libre" && (
//                                     <input
//                                         type="text"
//                                         value={item.answer}
//                                         onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 )}
//                                 {item.answerType === "Numerico" && (
//                                     <input
//                                         type="number"
//                                         value={item.answer}
//                                         onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 )}
//                                 {item.answerType === "Fecha" && (
//                                     <input
//                                         type="date"
//                                         value={item.answer}
//                                         onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 )}
//                                 {item.answerType === "Hora" && (
//                                     <input
//                                         type="time"
//                                         value={item.answer}
//                                         onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                         disabled={isViewOnly}
//                                     />
//                                 )}
//                                 {item.answerType === "MultipleOpciones" && item.arrayOptions && (
//                                     <select
//                                         value={item.answer}
//                                         onChange={(e) => handleChange(index, 'answer', e.target.value)}
//                                         disabled={isViewOnly}
//                                     >
//                                         {item.arrayOptions.map((option, optIndex) => (
//                                             <option key={optIndex} value={option}>
//                                                 {option}
//                                             </option>
//                                         ))}
//                                     </select>
//                                 )}
//                             </label>

//                         </div>
//                     ))
//                 ) : (
//                     <p>No hay ítems completados en esta planilla.</p>
//                 )}
//                 {!isViewOnly && <button className='edit-bot' onClick={handleSave}>Guardar</button>}
//                 <button className='edit-bot' onClick={onClose}>Cerrar</button>
//             </div>
//         </div>
//     );
// };

// export default EditPlanilla;











import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EditarAuditoriaModal.css';

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
    spreedSheetCompletedItems: SpreedSheetCompletedItem[];
}

interface EditPlanillaProps {
    id: any;
    onClose: () => void;
    isViewOnly: boolean;
    carerName: string;  // Recibido como prop
    patientName: string;  // Recibido como prop
}

const EditPlanilla: React.FC<EditPlanillaProps> = ({ id: Id, onClose, isViewOnly, carerName, patientName }) => {
    const [planilla, setPlanilla] = useState<Planilla | null>(null);
    const [editedItems, setEditedItems] = useState<SpreedSheetCompletedItem[]>([]);

    // Función para cargar la planilla desde la API
    useEffect(() => {
        const fetchPlanilla = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(
                    `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${Id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setPlanilla(response.data);
                setEditedItems(response.data.spreedSheetCompletedItems || []);
            } catch (error) {
                console.error('Error al cargar la planilla:', error);
            }
        };

        fetchPlanilla();
    }, [Id]);

    const handleChange = (
        index: number,
        field: keyof SpreedSheetCompletedItem,
        value: SpreedSheetCompletedItem[keyof SpreedSheetCompletedItem]
    ) => {
        const updatedItems = [...editedItems];
        updatedItems[index] = { ...updatedItems[index], [field]: value };
        setEditedItems(updatedItems);
    };

    const handleSave = async () => {
        if (!planilla) return;

        try {
            const token = localStorage.getItem('token');
            const dataToUpdate = {
                id: planilla.id,
                spreadSheetId: planilla.spreadSheetId,
                name: planilla.name,
                creationTime: planilla.creationTime,
                carerId: planilla.carerId,
                patientId: planilla.patientId,
                spreedSheetCompletedItems: editedItems.map((item) => ({
                    id: item.id,
                    text: item.text,
                    isRequired: item.isRequired,
                    answerType: item.answerType,
                    options: item.options,
                    answer: item.answer,
                    arrayOptions: item.arrayOptions || [],
                })),
            };

            await axios.put(
                `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds`,
                dataToUpdate,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert('Planilla actualizada con éxito');
            onClose();
        } catch (error) {
            console.error('Error al guardar la planilla:', error);
        }
    };

    if (!planilla) return <div></div>;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{isViewOnly ? 'Ver Planilla' : 'Editar Planilla Nº'} {planilla.name}</h2>
                <p><strong>Fecha de creación:</strong> {new Date(planilla.creationTime).toLocaleDateString()}</p>
                <p><strong>Cuidador:</strong> {carerName || 'Cargando...'}</p>
                <p><strong>Paciente:</strong> {patientName || 'Cargando...'}</p>

                <h3>Ítems Completados en la Planilla</h3>
                {editedItems.length > 0 ? (
                    editedItems.map((item, index) => (
                        <div key={item.id} className="bordes">
                            <label>
                                <h3 className="item-text">{item.text}</h3>
                            </label>
                            {item.options && (
                                <label>
                                    <strong>Opciones:</strong>
                                    <input
                                        type="text"
                                        value={item.options}
                                        onChange={(e) => handleChange(index, 'options', e.target.value)}
                                        disabled={isViewOnly}
                                    />
                                </label>
                            )}
                            <label>
                                <strong>Respuesta:</strong>
                                {item.answerType === 'Libre' && (
                                    <input
                                        type="text"
                                        value={item.answer}
                                        onChange={(e) => handleChange(index, 'answer', e.target.value)}
                                        disabled={isViewOnly}
                                    />
                                )}
                                {item.answerType === 'Numerico' && (
                                    <input
                                        type="number"
                                        value={item.answer}
                                        onChange={(e) => handleChange(index, 'answer', e.target.value)}
                                        disabled={isViewOnly}
                                    />
                                )}
                                {item.answerType === 'Fecha' && (
                                    <input
                                        type="date"
                                        value={item.answer}
                                        onChange={(e) => handleChange(index, 'answer', e.target.value)}
                                        disabled={isViewOnly}
                                    />
                                )}
                                {item.answerType === 'Hora' && (
                                    <input
                                        type="time"
                                        value={item.answer}
                                        onChange={(e) => handleChange(index, 'answer', e.target.value)}
                                        disabled={isViewOnly}
                                    />
                                )}
                                {item.answerType === 'MultipleOpciones' && item.arrayOptions && (
                                    <select
                                        value={item.answer}
                                        onChange={(e) => handleChange(index, 'answer', e.target.value)}
                                        disabled={isViewOnly}
                                    >
                                        {item.arrayOptions.map((option, optIndex) => (
                                            <option key={optIndex} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </label>
                        </div>
                    ))
                ) : (
                    <p>No hay ítems completados en esta planilla.</p>
                )}
                {!isViewOnly && <button className="edit-bot" onClick={handleSave}>Guardar</button>}
                <button className="edit-bot" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default EditPlanilla;
