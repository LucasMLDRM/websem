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

// interface Assistant {
//   id: number;
//   name: string;
// }

// const RelojFichada: React.FC = () => {
//   const [fichadas, setFichadas] = useState<Fichada[]>([]);
//   const [assistants, setAssistants] = useState<Assistant[]>([]);
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

//   // Fetch data (mocked URL for now)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
        
//         // Fetch assistants
//         const assistantsResponse = await axios.get('/api/assistants', config); // Placeholder URL
//         setAssistants(assistantsResponse.data);

//         // Fetch fichadas
//         const fichadasResponse = await axios.get('/api/fichadas', config); // Placeholder URL
//         setFichadas(fichadasResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Handle filters
//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Open popup with selected row data
//   const handleEdit = (fichada: Fichada) => {
//     setSelectedFichada(fichada);
//     setEditForm({
//       dateTime: fichada.dateTime,
//       observations: fichada.observations,
//     });
//   };

//   // Close popup
//   const handleCancel = () => {
//     setSelectedFichada(null);
//   };

//   // Save edited data
//   const handleSave = async () => {
//     if (!selectedFichada) return;

//     const updatedFichada = {
//       ...selectedFichada,
//       dateTime: editForm.dateTime,
//       observations: editForm.observations,
//     };

//     try {
//       const token = localStorage.getItem('token');
//       const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
//       await axios.put(`/api/fichadas/${selectedFichada.id}`, updatedFichada, config); // Placeholder URL

//       // Update table data
//       setFichadas((prevFichadas) =>
//         prevFichadas.map((fichada) =>
//           fichada.id === updatedFichada.id ? updatedFichada : fichada
//         )
//       );

//       setSelectedFichada(null);
//       alert('Fichada actualizada con éxito');
//     } catch (error) {
//       console.error('Error saving fichada:', error);
//       alert('Error al guardar los cambios.');
//     }
//   };

//   return (
//     <div className="reloj-fichada">
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
//           type="text"
//           name="search"
//           placeholder="Buscar"
//           value={filters.search}
//           onChange={handleFilterChange}
//         />

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
//           {fichadas.map((fichada) => (
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
//             <h3>Editar Fichada</h3>
//             <div>
//               <label>Nombre y Apellido:</label>
//               <input
//                 type="text"
//                 value={selectedFichada.assistantName}
//                 readOnly
//               />
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








// import React, { useState } from 'react';
// // import axios from 'axios';
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
//   const [assistants, setAssistants] = useState<Assistant[]>(hardcodedAssistants);
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

//   // const fetchData = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
//   //
//   //     const assistantsResponse = await axios.get('/api/assistants', config);
//   //     setAssistants(assistantsResponse.data);
//   //
//   //     const fichadasResponse = await axios.get('/api/fichadas', config);
//   //     setFichadas(fichadasResponse.data);
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //   }
//   // };

//   // Handle filters
//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Open popup with selected row data
//   const handleEdit = (fichada: Fichada) => {
//     setSelectedFichada(fichada);
//     setEditForm({
//       dateTime: fichada.dateTime,
//       observations: fichada.observations,
//     });
//   };

//   // Close popup
//   const handleCancel = () => {
//     setSelectedFichada(null);
//   };

//   // Save edited data
//   const handleSave = () => {
//     if (!selectedFichada) return;

//     const updatedFichada = {
//       ...selectedFichada,
//       dateTime: editForm.dateTime,
//       observations: editForm.observations,
//     };

//     // Actualizar datos localmente
//     setFichadas((prevFichadas) =>
//       prevFichadas.map((fichada) =>
//         fichada.id === updatedFichada.id ? updatedFichada : fichada
//       )
//     );

//     setSelectedFichada(null);
//     alert('Fichada actualizada con éxito');

//     // const token = localStorage.getItem('token');
//     // const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
//     // axios.put(`/api/fichadas/${updatedFichada.id}`, updatedFichada, config)
//     //   .then(() => alert('Fichada actualizada con éxito'))
//     //   .catch(error => {
//     //     console.error('Error saving fichada:', error);
//     //     alert('Error al guardar los cambios.');
//     //   });
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
//           className='filters-search-input'
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
//           {fichadas.map((fichada) => (
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
//             <h3>Editar Fichada</h3>
//             <div>
//               <label>Nombre y Apellido:</label>
//               <input
//                 type="text"
//                 value={selectedFichada.assistantName}
//                 readOnly
//               />
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






import React, { useState } from 'react';
import './RelojFichada.css';
import { FaClock } from 'react-icons/fa';

interface Fichada {
  id: number;
  assistantId: number;
  assistantName: string;
  dateTime: string;
  state: string;
  observations: string;
}

interface Assistant {
  id: number;
  name: string;
}

const RelojFichada: React.FC = () => {
  // Datos hardcodeados
  const hardcodedAssistants: Assistant[] = [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'Ana López' },
    { id: 3, name: 'Carlos Gómez' },
  ];

  const hardcodedFichadas: Fichada[] = [
    { id: 1, assistantId: 1, assistantName: 'Juan Pérez', dateTime: '2024-12-04T08:30', state: 'Activo', observations: 'Llegó a tiempo' },
    { id: 2, assistantId: 2, assistantName: 'Ana López', dateTime: '2024-12-04T09:00', state: 'Activo', observations: 'Retraso leve' },
    { id: 3, assistantId: 3, assistantName: 'Carlos Gómez', dateTime: '2024-12-04T07:45', state: 'Activo', observations: 'Llegó temprano' },
  ];

  const [fichadas, setFichadas] = useState<Fichada[]>(hardcodedFichadas);
  const [assistants] = useState<Assistant[]>(hardcodedAssistants);
  const [filters, setFilters] = useState({
    assistant: '',
    search: '',
    fromDate: '',
    toDate: '',
  });
  const [selectedFichada, setSelectedFichada] = useState<Fichada | null>(null);
  const [editForm, setEditForm] = useState({
    dateTime: '',
    observations: '',
  });

  // Manejar cambios en los filtros
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Filtrar fichadas según los filtros seleccionados
  const getFilteredFichadas = () => {
    return fichadas.filter((fichada) => {
      const matchesAssistant =
        !filters.assistant || fichada.assistantId === parseInt(filters.assistant);

      const matchesSearch =
        !filters.search ||
        fichada.assistantName.toLowerCase().includes(filters.search.toLowerCase());

      const matchesFromDate =
        !filters.fromDate || new Date(fichada.dateTime) >= new Date(filters.fromDate);

      const matchesToDate =
        !filters.toDate || new Date(fichada.dateTime) <= new Date(filters.toDate);

      return matchesAssistant && matchesSearch && matchesFromDate && matchesToDate;
    });
  };

  // Abrir popup con datos seleccionados
  const handleEdit = (fichada: Fichada) => {
    setSelectedFichada(fichada);
    setEditForm({
      dateTime: fichada.dateTime,
      observations: fichada.observations,
    });
  };

  // Cerrar popup
  const handleCancel = () => {
    setSelectedFichada(null);
  };

  // Guardar datos editados
  const handleSave = () => {
    if (!selectedFichada) return;

    const updatedFichada = {
      ...selectedFichada,
      dateTime: editForm.dateTime,
      observations: editForm.observations,
    };

    setFichadas((prevFichadas) =>
      prevFichadas.map((fichada) =>
        fichada.id === updatedFichada.id ? updatedFichada : fichada
      )
    );

    setSelectedFichada(null);
    alert('Fichada actualizada con éxito');
  };

  return (
    <div className="reloj-fichada">
      <div className='hedrej'>
      <FaClock className="clock-icon" />
      <h1>Reloj Fichada</h1>
      </div>
      <header className="filters">
        <select name="assistant" value={filters.assistant} onChange={handleFilterChange}>
          <option value="">Seleccionar Asistente</option>
          {assistants.map((assistant) => (
            <option key={assistant.id} value={assistant.id}>
              {assistant.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleFilterChange}
        />

        <input
          type="date"
          name="toDate"
          value={filters.toDate}
          onChange={handleFilterChange}
        />

        <input
          className="filters-search-input"
          type="text"
          name="search"
          placeholder="Buscar"
          value={filters.search}
          onChange={handleFilterChange}
        />
      </header>

      <table className="fichada-table">
        <thead>
          <tr>
            <th>Asistente</th>
            <th>Fecha y Hora</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredFichadas().map((fichada) => (
            <tr key={fichada.id}>
              <td>{fichada.assistantName}</td>
              <td>{new Date(fichada.dateTime).toLocaleString()}</td>
              <td>{fichada.state}</td>
              <td>
                <button onClick={() => handleEdit(fichada)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedFichada && (
        <div className="edit-popup">
          <div className="edit-form">
            <h3>Editar Ficha</h3>
            <div>
              <label>Nombre y Apellido:</label>
              <input type="text" value={selectedFichada.assistantName} readOnly />
            </div>
            <div>
              <label>Fecha y Hora:</label>
              <input
                type="datetime-local"
                value={editForm.dateTime}
                onChange={(e) =>
                  setEditForm({ ...editForm, dateTime: e.target.value })
                }
              />
            </div>
            <div>
              <label>Estado:</label>
              <input type="text" value={selectedFichada.state} readOnly />
            </div>
            <div>
              <label>Observaciones:</label>
              <textarea
                value={editForm.observations}
                onChange={(e) =>
                  setEditForm({ ...editForm, observations: e.target.value })
                }
              />
            </div>
            <div className="popup-actions">
              <button onClick={handleSave}>Guardar</button>
              <button onClick={handleCancel}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelojFichada;
