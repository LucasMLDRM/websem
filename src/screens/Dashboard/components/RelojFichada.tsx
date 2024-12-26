// import React, { useState } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface Assistant {
//   id: number;
//   name: string;
// }

// const RelojFichada: React.FC = () => {
//   // Datos hardcodeados
//   const hardcodedAssistants: Assistant[] = [
//     { id: 1, name: 'Juan Pérez' },
//     { id: 2, name: 'Ana López' },
//     { id: 3, name: 'Carlos Gómez' },
//   ];

//   const hardcodedFichadas: Fichada[] = [
//     { id: 1, assistantId: 1, assistantName: 'Juan Pérez', dateTime: '2024-12-04T08:30', state: 'Activo', observations: 'Llegó a tiempo' },
//     { id: 2, assistantId: 2, assistantName: 'Ana López', dateTime: '2024-12-04T09:00', state: 'Activo', observations: 'Retraso leve' },
//     { id: 3, assistantId: 3, assistantName: 'Carlos Gómez', dateTime: '2024-12-04T07:45', state: 'Activo', observations: 'Llegó temprano' },
//   ];

//   const [fichadas, setFichadas] = useState<Fichada[]>(hardcodedFichadas);
//   const [assistants] = useState<Assistant[]>(hardcodedAssistants);
//   const [filters, setFilters] = useState({
//     assistant: '',
//     search: '',
//     fromDate: '',
//     toDate: '',
//   });
//   const [selectedFichada, setSelectedFichada] = useState<Fichada | null>(null);
//   const [editForm, setEditForm] = useState({
//     dateTime: '',
//     observations: '',
//   });

//   // Manejar cambios en los filtros
//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Filtrar fichadas según los filtros seleccionados
//   const getFilteredFichadas = () => {
//     return fichadas.filter((fichada) => {
//       const matchesAssistant =
//         !filters.assistant || fichada.assistantId === parseInt(filters.assistant);

//       const matchesSearch =
//         !filters.search ||
//         fichada.assistantName.toLowerCase().includes(filters.search.toLowerCase());

//       const matchesFromDate =
//         !filters.fromDate || new Date(fichada.dateTime) >= new Date(filters.fromDate);

//       const matchesToDate =
//         !filters.toDate || new Date(fichada.dateTime) <= new Date(filters.toDate);

//       return matchesAssistant && matchesSearch && matchesFromDate && matchesToDate;
//     });
//   };

//   // Abrir popup con datos seleccionados
//   const handleEdit = (fichada: Fichada) => {
//     setSelectedFichada(fichada);
//     setEditForm({
//       dateTime: fichada.dateTime,
//       observations: fichada.observations,
//     });
//   };

//   // Cerrar popup
//   const handleCancel = () => {
//     setSelectedFichada(null);
//   };

//   // Guardar datos editados
//   const handleSave = () => {
//     if (!selectedFichada) return;

//     const updatedFichada = {
//       ...selectedFichada,
//       dateTime: editForm.dateTime,
//       observations: editForm.observations,
//     };

//     setFichadas((prevFichadas) =>
//       prevFichadas.map((fichada) =>
//         fichada.id === updatedFichada.id ? updatedFichada : fichada
//       )
//     );

//     setSelectedFichada(null);
//     alert('Fichada actualizada con éxito');
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       <header className="filters">
//         <select name="assistant" value={filters.assistant} onChange={handleFilterChange}>
//           <option value="">Seleccionar Asistente</option>
//           {assistants.map((assistant) => (
//             <option key={assistant.id} value={assistant.id}>
//               {assistant.name}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           name="fromDate"
//           value={filters.fromDate}
//           onChange={handleFilterChange}
//         />

//         <input
//           type="date"
//           name="toDate"
//           value={filters.toDate}
//           onChange={handleFilterChange}
//         />

//         <input
//           className="filters-search-input"
//           type="text"
//           name="search"
//           placeholder="Buscar"
//           value={filters.search}
//           onChange={handleFilterChange}
//         />
//       </header>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Asistente</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getFilteredFichadas().map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>
//                 <button onClick={() => handleEdit(fichada)}>Editar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedFichada && (
//         <div className="edit-popup">
//           <div className="edit-form">
//             <h3>Editar Ficha</h3>
//             <div>
//               <label>Nombre y Apellido:</label>
//               <input type="text" value={selectedFichada.assistantName} readOnly />
//             </div>
//             <div>
//               <label>Fecha y Hora:</label>
//               <input
//                 type="datetime-local"
//                 value={editForm.dateTime}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, dateTime: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label>Estado:</label>
//               <input type="text" value={selectedFichada.state} readOnly />
//             </div>
//             <div>
//               <label>Observaciones:</label>
//               <textarea
//                 value={editForm.observations}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, observations: e.target.value })
//                 }
//               />
//             </div>
//             <div className="popup-actions">
//               <button onClick={handleSave}>Guardar</button>
//               <button onClick={handleCancel}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RelojFichada;









// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface Assistant {
//   id: number;
//   name: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [assistants] = useState<Assistant[]>([
//     { id: 1, name: 'Juan Pérez' },
//     { id: 2, name: 'Ana López' },
//     { id: 3, name: 'Carlos Gómez' },
//   ]);
//   const [filters, setFilters] = useState({
//     assistant: '',
//     search: '',
//     fromDate: '',
//     toDate: '',
//   });
//   const [selectedFichada, setSelectedFichada] = useState<Fichada | null>(null);
//   const [editForm, setEditForm] = useState({
//     dateTime: '',
//     observations: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Obtener datos desde la API
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates');
//         if (!response.ok) {
//           throw new Error('Error al obtener los datos de la API');
//         }

//         const data: Array<{
//           id: number;
//           state: string;
//           date: string;
//           userId: number;
//           observations: string;
//         }> = await response.json();

//         // Transformar los datos para ajustarse a la estructura de `Fichada`
//         const transformedData: Fichada[] = data.map((item) => ({
//           id: item.id,
//           assistantId: item.userId, // Mapeo del campo `userId` a `assistantId`
//           assistantName: assistants.find((a) => a.id === item.userId)?.name || 'Desconocido',
//           dateTime: item.date,
//           state: item.state,
//           observations: item.observations,
//         }));

//         setFichadas(transformedData);
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error desconocido');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [assistants]);

//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const getFilteredFichadas = () => {
//     return fichadas.filter((fichada) => {
//       const matchesAssistant =
//         !filters.assistant || fichada.assistantId === parseInt(filters.assistant);

//       const matchesSearch =
//         !filters.search ||
//         fichada.assistantName.toLowerCase().includes(filters.search.toLowerCase());

//       const matchesFromDate =
//         !filters.fromDate || new Date(fichada.dateTime) >= new Date(filters.fromDate);

//       const matchesToDate =
//         !filters.toDate || new Date(fichada.dateTime) <= new Date(filters.toDate);

//       return matchesAssistant && matchesSearch && matchesFromDate && matchesToDate;
//     });
//   };

//   const handleEdit = (fichada: Fichada) => {
//     setSelectedFichada(fichada);
//     setEditForm({
//       dateTime: fichada.dateTime,
//       observations: fichada.observations,
//     });
//   };

//   const handleCancel = () => {
//     setSelectedFichada(null);
//   };

//   const handleSave = () => {
//     if (!selectedFichada) return;

//     const updatedFichada = {
//       ...selectedFichada,
//       dateTime: editForm.dateTime,
//       observations: editForm.observations,
//     };

//     setFichadas((prevFichadas) =>
//       prevFichadas.map((fichada) =>
//         fichada.id === updatedFichada.id ? updatedFichada : fichada
//       )
//     );

//     setSelectedFichada(null);
//     alert('Fichada actualizada con éxito');
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <header className="filters">
//         <select name="assistant" value={filters.assistant} onChange={handleFilterChange}>
//           <option value="">Seleccionar Asistente</option>
//           {assistants.map((assistant) => (
//             <option key={assistant.id} value={assistant.id}>
//               {assistant.name}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           name="fromDate"
//           value={filters.fromDate}
//           onChange={handleFilterChange}
//         />

//         <input
//           type="date"
//           name="toDate"
//           value={filters.toDate}
//           onChange={handleFilterChange}
//         />

//         <input
//           className="filters-search-input"
//           type="text"
//           name="search"
//           placeholder="Buscar"
//           value={filters.search}
//           onChange={handleFilterChange}
//         />
//       </header>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Asistente</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getFilteredFichadas().map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>
//                 <button onClick={() => handleEdit(fichada)}>Editar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedFichada && (
//         <div className="edit-popup">
//           <div className="edit-form">
//             <h3>Editar Ficha</h3>
//             <div>
//               <label>Nombre y Apellido:</label>
//               <input type="text" value={selectedFichada.assistantName} readOnly />
//             </div>
//             <div>
//               <label>Fecha y Hora:</label>
//               <input
//                 type="datetime-local"
//                 value={editForm.dateTime}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, dateTime: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label>Estado:</label>
//               <input type="text" value={selectedFichada.state} readOnly />
//             </div>
//             <div>
//               <label>Observaciones:</label>
//               <textarea
//                 value={editForm.observations}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, observations: e.target.value })
//                 }
//               />
//             </div>
//             <div className="popup-actions">
//               <button onClick={handleSave}>Guardar</button>
//               <button onClick={handleCancel}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RelojFichada;





// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface Assistant {
//   id: number;
//   name: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [assistants] = useState<Assistant[]>([
//     { id: 1, name: 'Juan Pérez' },
//     { id: 2, name: 'Ana López' },
//     { id: 3, name: 'Carlos Gómez' },
//   ]);
//   const [filters, setFilters] = useState({
//     assistant: '',
//     search: '',
//     fromDate: '',
//     toDate: '',
//   });
//   const [selectedFichada, setSelectedFichada] = useState<Fichada | null>(null);
//   const [editForm, setEditForm] = useState({
//     dateTime: '',
//     observations: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Obtener datos desde la API con el token de localStorage
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         // Recuperar el token del localStorage
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates/GetByUserIdDate', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'text/plain',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Error al obtener los datos de la API');
//         }

//         const data: Array<{
//           id: number;
//           state: string;
//           date: string;
//           userId: number;
//           observations: string;
//         }> = await response.json();

//         // Transformar los datos para ajustarse a la estructura de `Fichada`
//         const transformedData: Fichada[] = data.map((item) => ({
//           id: item.id,
//           assistantId: item.userId, // Mapeo del campo `userId` a `assistantId`
//           assistantName: assistants.find((a) => a.id === item.userId)?.name || 'Desconocido',
//           dateTime: item.date,
//           state: item.state,
//           observations: item.observations,
//         }));

//         setFichadas(transformedData);
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error desconocido');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [assistants]);

//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const getFilteredFichadas = () => {
//     return fichadas.filter((fichada) => {
//       const matchesAssistant =
//         !filters.assistant || fichada.assistantId === parseInt(filters.assistant);

//       const matchesSearch =
//         !filters.search ||
//         fichada.assistantName.toLowerCase().includes(filters.search.toLowerCase());

//       const matchesFromDate =
//         !filters.fromDate || new Date(fichada.dateTime) >= new Date(filters.fromDate);

//       const matchesToDate =
//         !filters.toDate || new Date(fichada.dateTime) <= new Date(filters.toDate);

//       return matchesAssistant && matchesSearch && matchesFromDate && matchesToDate;
//     });
//   };

//   const handleEdit = (fichada: Fichada) => {
//     setSelectedFichada(fichada);
//     setEditForm({
//       dateTime: fichada.dateTime,
//       observations: fichada.observations,
//     });
//   };

//   const handleCancel = () => {
//     setSelectedFichada(null);
//   };

//   const handleSave = () => {
//     if (!selectedFichada) return;

//     const updatedFichada = {
//       ...selectedFichada,
//       dateTime: editForm.dateTime,
//       observations: editForm.observations,
//     };

//     setFichadas((prevFichadas) =>
//       prevFichadas.map((fichada) =>
//         fichada.id === updatedFichada.id ? updatedFichada : fichada
//       )
//     );

//     setSelectedFichada(null);
//     alert('Fichada actualizada con éxito');
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <header className="filters">
//         <select name="assistant" value={filters.assistant} onChange={handleFilterChange}>
//           <option value="">Seleccionar Asistente</option>
//           {assistants.map((assistant) => (
//             <option key={assistant.id} value={assistant.id}>
//               {assistant.name}
//             </option>
//           ))}
//         </select>

//         <input
//           type="date"
//           name="fromDate"
//           value={filters.fromDate}
//           onChange={handleFilterChange}
//         />

//         <input
//           type="date"
//           name="toDate"
//           value={filters.toDate}
//           onChange={handleFilterChange}
//         />

//         <input
//           className="filters-search-input"
//           type="text"
//           name="search"
//           placeholder="Buscar"
//           value={filters.search}
//           onChange={handleFilterChange}
//         />
//       </header>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Asistente</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getFilteredFichadas().map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>
//                 <button onClick={() => handleEdit(fichada)}>Editar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedFichada && (
//         <div className="edit-popup">
//           <div className="edit-form">
//             <h3>Editar Ficha</h3>
//             <div>
//               <label>Nombre y Apellido:</label>
//               <input type="text" value={selectedFichada.assistantName} readOnly />
//             </div>
//             <div>
//               <label>Fecha y Hora:</label>
//               <input
//                 type="datetime-local"
//                 value={editForm.dateTime}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, dateTime: e.target.value })
//                 }
//               />
//             </div>
//             <div>
//               <label>Estado:</label>
//               <input type="text" value={selectedFichada.state} readOnly />
//             </div>
//             <div>
//               <label>Observaciones:</label>
//               <textarea
//                 value={editForm.observations}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, observations: e.target.value })
//                 }
//               />
//             </div>
//             <div className="popup-actions">
//               <button onClick={handleSave}>Guardar</button>
//               <button onClick={handleCancel}>Cancelar</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RelojFichada;

















// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface Assistant {
//   id: number;
//   name: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [assistants, setAssistants] = useState<Assistant[]>([]);
//   const [formData, setFormData] = useState({
//     day: '',
//     month: '',
//     year: '',
//     userId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Aquí puedes cargar la lista de asistentes desde una API
//     const fetchAssistants = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/Assistants', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error('Error al cargar la lista de asistentes');
//         }

//         const data: Assistant[] = await response.json();
//         setAssistants(data);
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los asistentes');
//       }
//     };

//     fetchAssistants();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { day, month, year, userId } = formData;
//     return day && month && year && userId;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           Day: parseInt(formData.day, 10),
//           Month: parseInt(formData.month, 10),
//           Year: parseInt(formData.year, 10),
//           UserId: parseInt(formData.userId, 10),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Error al obtener los datos de la API');
//       }

//       const data: Array<{
//         id: number;
//         state: string;
//         date: string;
//         userId: number;
//         observations: string;
//       }> = await response.json();

//       const transformedData: Fichada[] = data.map((item) => ({
//         id: item.id,
//         assistantId: item.userId,
//         assistantName: assistants.find((a) => a.id === item.userId)?.name || 'Desconocido',
//         dateTime: item.date,
//         state: item.state,
//         observations: item.observations,
//       }));

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="day">Día:</label>
//           <input
//             type="number"
//             name="day"
//             id="day"
//             value={formData.day}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="month">Mes:</label>
//           <input
//             type="number"
//             name="month"
//             id="month"
//             value={formData.month}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="year">Año:</label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={formData.year}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario (ID):</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {assistants.map((assistant) => (
//               <option key={assistant.id} value={assistant.id}>
//                 {assistant.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Asistente</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;











// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     day: '',
//     month: '',
//     year: '',
//     userId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Cargar la lista de usuarios desde la API
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error('Error al cargar la lista de usuarios');
//         }

//         const data: User[] = await response.json();
//         setUsers(data.map((user) => ({
//           id: user.id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//         })));
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { day, month, year, userId } = formData;
//     return day && month && year && userId;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           Day: parseInt(formData.day, 10),
//           Month: parseInt(formData.month, 10),
//           Year: parseInt(formData.year, 10),
//           UserId: parseInt(formData.userId, 10),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Error al obtener los datos de la API');
//       }

//       const data: Array<{
//         id: number;
//         state: string;
//         date: string;
//         userId: number;
//         observations: string;
//       }> = await response.json();

//       const transformedData: Fichada[] = data.map((item) => ({
//         id: item.id,
//         assistantId: item.userId,
//         assistantName: users.find((u) => u.id === item.userId)?.firstName || 'Desconocido',
//         dateTime: item.date,
//         state: item.state,
//         observations: item.observations,
//       }));

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="day">Día:</label>
//           <input
//             type="number"
//             name="day"
//             id="day"
//             value={formData.day}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="month">Mes:</label>
//           <input
//             type="number"
//             name="month"
//             id="month"
//             value={formData.month}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="year">Año:</label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={formData.year}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;






// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     day: '',
//     month: '',
//     year: '',
//     date: '',
//     userId: '',
//     observations: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error('Error al cargar la lista de usuarios');
//         }

//         const data: User[] = await response.json();
//         setUsers(data.map((user) => ({
//           id: user.id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//         })));
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { day, month, year, date, userId, observations } = formData;
//     return day && month && year && date && userId && observations;
//   };

//   const fetchData = async () => {
//   if (!isFormValid()) {
//     setError('Todos los campos son obligatorios.');
//     return;
//   }

//   setLoading(true);
//   setError(null);

//   try {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       throw new Error('Token no encontrado en localStorage');
//     }

//     const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         Day: parseInt(formData.day, 10),
//         Month: parseInt(formData.month, 10),
//         Year: parseInt(formData.year, 10),
//         Date: formData.date,
//         UserId: parseInt(formData.userId, 10),
//         Observations: formData.observations,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Error al obtener los datos de la API');
//     }

//     const data = await response.json();

//     // Si `data` no es un array, transformarlo en uno.
//     const transformedData: Fichada[] = Array.isArray(data)
//       ? data.map((item) => ({
//           id: item.id,
//           assistantId: item.userId,
//           assistantName: users.find((u) => u.id === item.userId)?.firstName || 'Desconocido',
//           dateTime: item.date,
//           state: item.state,
//           observations: item.observations,
//         }))
//       : [
//           {
//             id: data.id,
//             assistantId: data.userId,
//             assistantName: users.find((u) => u.id === data.userId)?.firstName || 'Desconocido',
//             dateTime: data.date,
//             state: data.state,
//             observations: data.observations,
//           },
//         ];

//     setFichadas(transformedData);
//   } catch (err: any) {
//     setError(err.message || 'Ocurrió un error desconocido');
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="day">Día:</label>
//           <input
//             type="number"
//             name="day"
//             id="day"
//             value={formData.day}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="month">Mes:</label>
//           <input
//             type="number"
//             name="month"
//             id="month"
//             value={formData.month}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="year">Año:</label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={formData.year}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Fecha (YYYY-MM-DD):</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="observations">Observaciones:</label>
//           <textarea
//             name="observations"
//             id="observations"
//             value={formData.observations}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;







// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     userId: '',
//     observations: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error('Error al cargar la lista de usuarios');
//         }

//         const data: User[] = await response.json();
//         setUsers(data.map((user) => ({
//           id: user.id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//         })));
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { date, userId, observations } = formData;
//     return date && userId && observations;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           Date: formData.date,
//           UserId: parseInt(formData.userId, 10),
//           Observations: formData.observations,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Error al obtener los datos de la API');
//       }

//       const data = await response.json();

//       // Transformar datos si es necesario
//       const transformedData: Fichada[] = Array.isArray(data)
//         ? data.map((item) => ({
//             id: item.id,
//             assistantId: item.userId,
//             assistantName: users.find((u) => u.id === item.userId)?.firstName || 'Desconocido',
//             dateTime: item.date,
//             state: item.state,
//             observations: item.observations,
//           }))
//         : [
//             {
//               id: data.id,
//               assistantId: data.userId,
//               assistantName: users.find((u) => u.id === data.userId)?.firstName || 'Desconocido',
//               dateTime: data.date,
//               state: data.state,
//               observations: data.observations,
//             },
//           ];

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="date">Fecha (YYYY-MM-DD):</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="observations">Observaciones:</label>
//           <textarea
//             name="observations"
//             id="observations"
//             value={formData.observations}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;







// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     userId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error('Error al cargar la lista de usuarios');
//         }

//         const data: User[] = await response.json();
//         setUsers(data.map((user) => ({
//           id: user.id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//         })));
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { date, userId } = formData;
//     return date && userId;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await fetch('https://emmanuel.somee.com/api/v1/UserStates', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           Date: formData.date,
//           UserId: parseInt(formData.userId, 10),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Error al obtener los datos de la API');
//       }

//       const data = await response.json();

//       const transformedData: Fichada[] = Array.isArray(data)
//         ? data.map((item) => ({
//             id: item.id,
//             assistantId: item.userId,
//             assistantName: users.find((u) => u.id === item.userId)?.firstName || 'Desconocido',
//             dateTime: item.date,
//             state: item.state,
//             observations: item.observations || '',
//           }))
//         : [
//             {
//               id: data.id,
//               assistantId: data.userId,
//               assistantName: users.find((u) => u.id === data.userId)?.firstName || 'Desconocido',
//               dateTime: data.date,
//               state: data.state,
//               observations: data.observations || '',
//             },
//           ];

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="date">Fecha (YYYY-MM-DD):</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;







// import React, { useState, useEffect } from 'react';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     userId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await fetch('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         if (!response.ok) {
//           throw new Error('Error al cargar la lista de usuarios');
//         }

//         const data: User[] = await response.json();
//         setUsers(data);
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { date, userId } = formData;
//     return date && userId;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await fetch(
//         `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
//         {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             Date: formData.date,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Error al obtener los datos de la API');
//       }

//       const data = await response.json();

//       const userMap = new Map(users.map((user) => [user.id, `${user.firstName} ${user.lastName}`]));

//       const transformedData: Fichada[] = data.map((item: any) => ({
//         id: item.id,
//         assistantId: item.userId,
//         assistantName: userMap.get(item.userId) || 'Desconocido',
//         dateTime: item.date,
//         state: item.state,
//         observations: item.observations || '',
//       }));

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="date">Fecha (YYYY-MM-DD):</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     date: '',
//     userId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await axios.get('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUsers(response.data);
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { date, userId } = formData;
//     return date && userId;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await axios.get(
//         `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           params: {
//             Date: formData.date,
//           },
//         }
//       );

//       const userMap = new Map(users.map((user) => [user.id, `${user.firstName} ${user.lastName}`]));

//       const transformedData: Fichada[] = response.data.map((item: any) => ({
//         id: item.id,
//         assistantId: item.userId,
//         assistantName: userMap.get(item.userId) || 'Desconocido',
//         dateTime: item.date,
//         state: item.state,
//         observations: item.observations || '',
//       }));

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="date">Fecha (YYYY-MM-DD):</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={formData.date}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [formData, setFormData] = useState({
//     day: '',
//     month: '',
//     year: '',
//     userId: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('Token no encontrado en localStorage');
//         }

//         const response = await axios.get('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setUsers(response.data);
//       } catch (err: any) {
//         setError(err.message || 'Ocurrió un error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { day, month, year, userId } = formData;
//     return day && month && year && userId;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await axios.get(
//         `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           params: {
//             Day: formData.day,
//             Month: formData.month,
//             Year: formData.year,
//           },
//         }
//       );

//       const userMap = new Map(users.map((user) => [user.id, `${user.firstName} ${user.lastName}`]));

//       const transformedData: Fichada[] = response.data.map((item: any) => ({
//         id: item.id,
//         assistantId: item.userId,
//         assistantName: userMap.get(item.userId) || 'Desconocido',
//         dateTime: item.date,
//         state: item.state,
//         observations: item.observations || '',
//       }));

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="day">Día:</label>
//           <input
//             type="number"
//             name="day"
//             id="day"
//             value={formData.day}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="month">Mes:</label>
//           <input
//             type="number"
//             name="month"
//             id="month"
//             value={formData.month}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="year">Año:</label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={formData.year}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="userId">Usuario:</label>
//           <select
//             name="userId"
//             id="userId"
//             value={formData.userId}
//             onChange={handleInputChange}
//           >
//             <option value="">Seleccionar Usuario</option>
//             {users.map((user) => (
//               <option key={user.id} value={user.id}>
//                 {user.firstName} {user.lastName}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;














// import React, { useState } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';

// interface Fichada {
//   id: number;
//   assistantId: number;
//   assistantName: string;
//   dateTime: string;
//   state: string;
//   observations: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [formData, setFormData] = useState({
//     day: '',
//     month: '',
//     year: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { day, month, year } = formData;
//     return day && month && year;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await axios.get(
//         `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           params: {
//             Day: formData.day,
//             Month: formData.month,
//             Year: formData.year,
//           },
//         }
//       );

//       const transformedData: Fichada[] = response.data.map((item: any) => ({
//         id: item.id,
//         assistantId: item.userId,
//         assistantName: `${item.userFirstName} ${item.userLastName}` || 'Desconocido',
//         dateTime: item.date,
//         state: item.state,
//         observations: item.observations || '',
//       }));

//       setFichadas(transformedData);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="day">Día:</label>
//           <input
//             type="number"
//             name="day"
//             id="day"
//             value={formData.day}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="month">Mes:</label>
//           <input
//             type="number"
//             name="month"
//             id="month"
//             value={formData.month}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="year">Año:</label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={formData.year}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Fecha y Hora</th>
//             <th>Estado</th>
//             <th>Observaciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             <tr key={fichada.id}>
//               <td>{fichada.assistantName}</td>
//               <td>{new Date(fichada.dateTime).toLocaleString()}</td>
//               <td>{fichada.state}</td>
//               <td>{fichada.observations}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';

// interface Fichada {
//   userId: number;
//   userName: string;
//   firstName: string;
//   lastName: string;
//   stateByDates: {
//     state: string;
//     date: string;
//   }[];
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [formData, setFormData] = useState({
//     day: '',
//     month: '',
//     year: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isFormValid = () => {
//     const { day, month, year } = formData;
//     return day && month && year;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('Todos los campos son obligatorios.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const response = await axios.get(
//         `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           params: {
//             Day: formData.day,
//             Month: formData.month,
//             Year: formData.year,
//           },
//         }
//       );

//       setFichadas(response.data);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="day">Día:</label>
//           <input
//             type="number"
//             name="day"
//             id="day"
//             value={formData.day}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="month">Mes:</label>
//           <input
//             type="number"
//             name="month"
//             id="month"
//             value={formData.month}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="year">Año:</label>
//           <input
//             type="number"
//             name="year"
//             id="year"
//             value={formData.year}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Nombre</th>
//             <th>Apellido</th>
//             <th>Estado</th>
//             <th>Fecha</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             fichada.stateByDates.map((state, index) => (
//               <tr key={`${fichada.userId}-${index}`}>
//                 <td>{fichada.userName}</td>
//                 <td>{fichada.firstName}</td>
//                 <td>{fichada.lastName}</td>
//                 <td>{state.state}</td>
//                 <td>{new Date(state.date).toLocaleString()}</td>
//               </tr>
//             ))
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;





// import React, { useState } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';

// interface Fichada {
//   userId: number;
//   userName: string;
//   firstName: string;
//   lastName: string;
//   stateByDates: {
//     state: string;
//     date: string;
//   }[];
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [selectedDate, setSelectedDate] = useState<string>('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedDate(e.target.value);
//   };

//   const isFormValid = () => {
//     return !!selectedDate;
//   };

//   const fetchData = async () => {
//     if (!isFormValid()) {
//       setError('La fecha es obligatoria.');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('Token no encontrado en localStorage');
//       }

//       const [year, month, day] = selectedDate.split('-');

//       const response = await axios.get(
//         `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           params: {
//             Day: day,
//             Month: month,
//             Year: year,
//           },
//         }
//       );

//       setFichadas(response.data);
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="reloj-fichada">
//       <h1>Reloj Fichada</h1>
//       {loading && <p>Cargando datos...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//       <div className="form-container">
//         <h2>Completar datos para obtener información</h2>
//         <div>
//           <label htmlFor="date">Fecha:</label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={selectedDate}
//             onChange={handleDateChange}
//           />
//         </div>
//         <button onClick={fetchData} disabled={loading}>
//           Obtener Datos
//         </button>
//       </div>

//       <table className="fichada-table">
//         <thead>
//           <tr>
//             <th>Usuario</th>
//             <th>Nombre</th>
//             <th>Apellido</th>
//             <th>Estado</th>
//             <th>Fecha</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fichadas.map((fichada) => (
//             fichada.stateByDates.map((state, index) => (
//               <tr key={`${fichada.userId}-${index}`}>
//                 <td>{fichada.userName}</td>
//                 <td>{fichada.firstName}</td>
//                 <td>{fichada.lastName}</td>
//                 <td>{state.state}</td>
//                 <td>{new Date(state.date).toLocaleString()}</td>
//               </tr>
//             ))
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;






import React, { useState } from 'react';
import axios from 'axios';
import './RelojFichada.css';
import { BiCalendar } from 'react-icons/bi';

interface Fichada {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  stateByDates: {
    state: string;
    date: string;
  }[];
}

const RelojFichada: React.FC = () => {
  const [fichadas, setFichadas] = useState<Fichada[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const isFormValid = () => {
    return !!selectedDate;
  };

  const fetchData = async () => {
    if (!isFormValid()) {
      setError('La fecha es obligatoria.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token no encontrado en localStorage');
      }

      const [year, month, day] = selectedDate.split('-');

      const response = await axios.get(
        `https://emmanuel.somee.com/api/v1/UserStates/GetUsersStatesByDate`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            Day: day,
            Month: month,
            Year: year,
          },
        }
      );

      setFichadas(response.data);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reloj-fichada-container">
      <div className="reloj-fichada-header">
        <h1 className="reloj-fichada-title"><BiCalendar /> Reloj Fichada</h1>
        <div className="form-container">
          <div>
            <label htmlFor="date">Fecha:</label>
            <input
              type="date"
              name="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="reloj-input"
            />
          </div>
          <button onClick={fetchData} disabled={loading} className="btn-obtener-datos">
            Obtener Datos
          </button>
        </div>
      </div>

      {loading && <p className="loading-text">Cargando datos...</p>}
      {error && <p className="error-text">Error: {error}</p>}

      <table className="fichada-table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {fichadas.map((fichada) =>
            fichada.stateByDates.map((state, index) => (
              <tr key={`${fichada.userId}-${index}`}>
                <td>{fichada.userName}</td>
                <td>{fichada.firstName}</td>
                <td>{fichada.lastName}</td>
                <td>{state.state}</td>
                <td>{new Date(state.date).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RelojFichada;
