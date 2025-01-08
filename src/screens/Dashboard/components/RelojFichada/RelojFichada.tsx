// import React, { useState } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';
// import { BiCalendar } from 'react-icons/bi';

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
//     <div className="reloj-fichada-container">
//       <div className="reloj-fichada-header">
//         <h1 className="reloj-fichada-title"><BiCalendar /> Reloj Fichada</h1>
//         <div className="form-container">
//           <div>
//             <label htmlFor="date">Fecha:</label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               value={selectedDate}
//               onChange={handleDateChange}
//               className="reloj-input"
//             />
//           </div>
//           <button onClick={fetchData} disabled={loading} className="btn-obtener-datos">
//             Obtener Datos
//           </button>
//         </div>
//       </div>

//       {loading && <p className="loading-text">Cargando datos...</p>}
//       {error && <p className="error-text">Error: {error}</p>}

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
//           {fichadas.map((fichada) =>
//             fichada.stateByDates.map((state, index) => (
//               <tr key={`${fichada.userId}-${index}`}>
//                 <td>{fichada.userName}</td>
//                 <td>{fichada.firstName}</td>
//                 <td>{fichada.lastName}</td>
//                 <td>{state.state}</td>
//                 <td>{new Date(state.date).toLocaleString()}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RelojFichada;














// import React, { useState } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';
// import { BiCalendar } from 'react-icons/bi';

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

//   // Paginación
//   const [currentPage, setCurrentPage] = useState(1);
//   const usersPerPage = 8;

//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedDate(e.target.value);
//     setCurrentPage(1); // Reiniciar a la primera página al buscar
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

//   // Calcular datos para la página actual
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentFichadas = fichadas.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(fichadas.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="reloj-fichada-container">
//       <div className="reloj-fichada-header">
//         <h1 className="reloj-fichada-title"><BiCalendar /> Reloj Fichada</h1>
//         <div className="form-container">
//           <div>
//             <label htmlFor="date">Fecha:</label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               value={selectedDate}
//               onChange={handleDateChange}
//               className="reloj-input"
//             />
//           </div>
//           <button onClick={fetchData} disabled={loading} className="btn-obtener-datos">
//             Obtener Datos
//           </button>
//         </div>
//       </div>

//       {loading && <p className="loading-text">Cargando datos...</p>}
//       {error && <p className="error-text">Error: {error}</p>}

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
//           {currentFichadas.map((fichada) =>
//             fichada.stateByDates.map((state, index) => (
//               <tr key={`${fichada.userId}-${index}`}>
//                 <td>{fichada.userName}</td>
//                 <td>{fichada.firstName}</td>
//                 <td>{fichada.lastName}</td>
//                 <td>{state.state}</td>
//                 <td>{new Date(state.date).toLocaleString()}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelojFichada;









// import React, { useState } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';
// import { BiCalendar } from 'react-icons/bi';

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
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Mostrar 8 elementos por página

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
//       setCurrentPage(1); // Reiniciar a la primera página al cargar nuevos datos
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lógica de paginación
//   const totalItems = fichadas.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentFichadas = fichadas.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="reloj-fichada-container">
//       <div className="reloj-fichada-header">
//         <h1 className="reloj-fichada-title"><BiCalendar /> Reloj Fichada</h1>
//         <div className="form-container">
//           <div>
//             <label htmlFor="date">Fecha:</label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               value={selectedDate}
//               onChange={handleDateChange}
//               className="reloj-input"
//             />
//           </div>
//           <button onClick={fetchData} disabled={loading} className="btn-obtener-datos">
//             Obtener Datos
//           </button>
//         </div>
//       </div>

//       {loading && <p className="loading-text">Cargando datos...</p>}
//       {error && <p className="error-text">Error: {error}</p>}

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
//           {currentFichadas.map((fichada) =>
//             fichada.stateByDates.map((state, index) => (
//               <tr key={`${fichada.userId}-${index}`}>
//                 <td>{fichada.userName}</td>
//                 <td>{fichada.firstName}</td>
//                 <td>{fichada.lastName}</td>
//                 <td>{state.state}</td>
//                 <td>{new Date(state.date).toLocaleString()}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelojFichada;












// import React, { useState } from 'react';
// import axios from 'axios';
// import './RelojFichada.css';
// import { BiCalendar } from 'react-icons/bi';

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
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // Mostrar 8 elementos por página

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
//       setCurrentPage(1); // Reiniciar a la primera página al cargar nuevos datos
//     } catch (err: any) {
//       setError(err.message || 'Ocurrió un error desconocido');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Lógica de paginación
//   const totalItems = fichadas.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentFichadas = fichadas.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="reloj-fichada-container">
//       <div className="reloj-fichada-header">
//         <h1 className="reloj-fichada-title"><BiCalendar /> Reloj Fichada</h1>
//         <div className="form-container">
//           <div>
//             <label htmlFor="date">Fecha:</label>
//             <input
//               type="date"
//               name="date"
//               id="date"
//               value={selectedDate}
//               onChange={handleDateChange}
//               className="reloj-input"
//             />
//           </div>
//           <button onClick={fetchData} disabled={loading} className="btn-obtener-datos">
//             Obtener Datos
//           </button>
//         </div>
//       </div>

//       {loading && <p className="loading-text">Cargando datos...</p>}
//       {error && <p className="error-text">Error: {error}</p>}

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
//           {currentFichadas.map((fichada) =>
//             fichada.stateByDates.map((state, index) => (
//               <tr key={`${fichada.userId}-${index}`}>
//                 <td>{fichada.userName}</td>
//                 <td>{fichada.firstName}</td>
//                 <td>{fichada.lastName}</td>
//                 <td>{state.state}</td>
//                 <td>{new Date(state.date).toLocaleString()}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelojFichada;














import React, { useState } from 'react';
import axios from 'axios';
import './RelojFichada.css';
import { BiCalendar } from 'react-icons/bi';

interface StateByDate {
  state: string;
  date: string;
}

interface Fichada {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  stateByDates: StateByDate[];
}

const RelojFichada: React.FC = () => {
  const [fichadas, setFichadas] = useState<Fichada[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Mostrar 8 elementos (userStates) por página

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
      setCurrentPage(1); // Reiniciar a la primera página al cargar nuevos datos
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error desconocido');
    } finally {
      setLoading(false);
    }
  };

  // Transformar fichadas en una lista plana de estados con usuarios
  const flattenedFichadas = fichadas.flatMap((fichada) =>
    fichada.stateByDates.map((state) => ({
      userId: fichada.userId,
      userName: fichada.userName,
      firstName: fichada.firstName,
      lastName: fichada.lastName,
      ...state,
    }))
  );

  // Lógica de paginación
  const totalItems = flattenedFichadas.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFichadas = flattenedFichadas.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
          {currentFichadas.map((fichada, index) => (
            <tr key={`${fichada.userId}-${index}`}>
              <td>{fichada.userName}</td>
              <td>{fichada.firstName}</td>
              <td>{fichada.lastName}</td>
              <td>{fichada.state}</td>
              <td>{new Date(fichada.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RelojFichada;
