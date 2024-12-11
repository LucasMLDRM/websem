// import React, { useState, useEffect } from 'react';
// import CrearTurnoModal from './CrearTurnoModal/CrearTurnoModal';
// import EditarTurnoModal from './EditarTurnoModal/EditarTurnoModal';
// import axios from 'axios';
// import './turnos.css';
// import { Turno } from './types';
// import { BiSpreadsheet } from "react-icons/bi"; 



// const Turnos: React.FC = () => {
//   const [turnos, setTurnos] = useState<Turno[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [modalAbierto, setModalAbierto] = useState(false);
//   const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
//   const [turnoSeleccionado, setTurnoSeleccionado] = useState<Turno | null>(null);

//   const abrirModal = () => setModalAbierto(true);
//   const cerrarModal = () => setModalAbierto(false);

//   const obtenerNombreUsuarioPorId = async (id: number): Promise<string | null> => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('No se encontró el token');

//       const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "text/plain",
//         },
//       });

//       return response.data.userName;
//     } catch (error) {
//       console.error('Error al obtener el nombre del usuario:', error);
//       return null;
//     }
//   };

//   const obtenerTurnos = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('No se encontró un token en el almacenamiento');

//       const response = await axios.get('https://emmanuel.somee.com/api/v1/Schedulers', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: 'text/plain',
//         },
//       });

//       const turnosData = await Promise.all(
//         response.data.map(async (turno: Turno) => {
//           const carerUserName = await obtenerNombreUsuarioPorId(turno.carerId);
//           const patientUserName = await obtenerNombreUsuarioPorId(turno.patientId);
//           return { ...turno, carerUserName, patientUserName };
//         })
//       );

//       setTurnos(turnosData);
//     } catch (err) {
//       setError('Error al cargar los turnos');
//       console.error('Error al cargar los turnos:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTurnoEditado = () => {
//     obtenerTurnos();
//   };

//   const handleEditarClick = (turno: Turno) => {
//     setTurnoSeleccionado(turno);
//     setIsEditarModalOpen(true);
//   };

//   const turnosFiltrados = turnos.filter(
//     (turno) =>
//       (turno.carerUserName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         turno.patientUserName?.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   const handleEliminarTurno = async (id: number) => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('No se encontró el token');

//       await axios.delete(`https://emmanuel.somee.com/api/v1/Schedulers/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setTurnos(turnos.filter(turno => turno.id !== id));
//     } catch (error) {
//       console.error('Error al eliminar el turno:', error);
//     }
//   };

//   useEffect(() => {
//     obtenerTurnos();
//   }, []);

//   const renderTurnos = () => {
//     return (
//       <table className="tabla-turnos">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Fecha Desde</th>
//             <th>Hora Desde</th>
//             <th>Fecha Hasta</th>
//             <th>Hora Hasta</th>
//             <th>Creado por</th>
//             <th>Fecha Creación</th>
//             <th>Cuidador</th>
//             <th>Beneficiario</th>
//             <th>Eliminar</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {turnosFiltrados.map((turno) => (
//             <tr key={turno.id}>
//               <td>{turno.id}</td>
//               <td>{new Date(turno.date).toLocaleDateString()}</td>
//               <td>{turno.startTime || 'Hora no disponible'}</td>
//               <td>{new Date(turno.dateTo).toLocaleDateString()}</td>
//               <td>{turno.endTime || 'Hora no disponible'}</td>
//               <td>{turno.creationUser}</td>
//               <td>{new Date(turno.creationDate).toLocaleString()}</td>
//               <td>{turno.carerUserName || 'Cargando...'}</td>
//               <td>{turno.patientUserName || 'Cargando...'}</td>
//               <td>
//                 <button onClick={() => handleEliminarTurno(turno.id)} className="btn-eliminar">
//                   Eliminar
//                 </button>
//               </td>
//               <td>
//                 <button className='btn-editar' onClick={() => handleEditarClick(turno)}>Editar</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="turnos-container">
//       <div className="turnos-head">

//       <h1 className='turn-title'><BiSpreadsheet/>Turnos Asignados</h1>
//       <div className="busqueda-container">



//         <input
//           type="text"
//           placeholder="    Buscar cuidador o paciente..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="turn-search-input"
//         />


//       </div>
//       </div>
      
//         <CrearTurnoModal
//           isOpen={modalAbierto}
//           onClose={cerrarModal}
//           onTurnoCreado={obtenerTurnos}
//         />
//         <EditarTurnoModal
//           isOpen={isEditarModalOpen}
//           onClose={() => setIsEditarModalOpen(false)}
//           turno={turnoSeleccionado}
//           onTurnoEditado={handleTurnoEditado}
//         />        
    

//       {loading ? (
//         <p>Cargando turnos...</p>
//       ) : error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : (
//         renderTurnos()
//       )}
        
//         <button onClick={abrirModal} className="btn-crear-turno">
//           Crear Turno
//         </button>
//     </div>
//   );
// };

// export default Turnos;





import React, { useState, useEffect } from 'react';
import CrearTurnoModal from './CrearTurnoModal/CrearTurnoModal';
import EditarTurnoModal from './EditarTurnoModal/EditarTurnoModal';
import axios from 'axios';
import './turnos.css';
import { Turno } from './types';
import { BsCalendar2Week } from "react-icons/bs"; 

const Turnos: React.FC = () => {
  const [turnos, setTurnos] = useState<Turno[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState<Turno | null>(null);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  const obtenerNombreUsuarioPorId = async (id: number): Promise<string | null> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No se encontró el token');

      const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "text/plain",
        },
      });

      return response.data.userName;
    } catch (error) {
      console.error('Error al obtener el nombre del usuario:', error);
      return null;
    }
  };

  const obtenerTurnos = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No se encontró un token en el almacenamiento');

      const response = await axios.get('https://emmanuel.somee.com/api/v1/Schedulers', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'text/plain',
        },
      });

      const turnosData = await Promise.all(
        response.data.map(async (turno: Turno) => {
          const carerUserName = await obtenerNombreUsuarioPorId(turno.carerId);
          const patientUserName = await obtenerNombreUsuarioPorId(turno.patientId);
          return { ...turno, carerUserName, patientUserName };
        })
      );

      setTurnos(turnosData);
    } catch (err) {
      setError('Error al cargar los turnos');
      console.error('Error al cargar los turnos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTurnoEditado = () => {
    obtenerTurnos();
  };

  const handleEditarClick = (turno: Turno) => {
    setTurnoSeleccionado(turno);
    setIsEditarModalOpen(true);
  };

  const turnosFiltrados = turnos.filter(
    (turno) =>
      (turno.carerUserName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        turno.patientUserName?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEliminarTurno = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No se encontró el token');

      await axios.delete(`https://emmanuel.somee.com/api/v1/Schedulers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTurnos(turnos.filter(turno => turno.id !== id));
    } catch (error) {
      console.error('Error al eliminar el turno:', error);
    }
  };

  useEffect(() => {
    obtenerTurnos();
  }, []);

  const renderTurnos = () => {
    return (
      <table className="tabla-turnos">
        <thead>
          <tr>
            <th>Fecha Desde</th>
            <th>Hora Desde</th>
            <th>Fecha Hasta</th>
            <th>Hora Hasta</th>
            <th>Creado por</th>
            <th>Fecha Creación</th>
            <th>Cuidador</th>
            <th>Beneficiario</th>
            <th>Eliminar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {turnosFiltrados.map((turno) => (
            <tr key={turno.id}>
              <td>{new Date(turno.date).toLocaleDateString()}</td>
              <td>{turno.startTime || 'Hora no disponible'}</td>
              <td>{new Date(turno.dateTo).toLocaleDateString()}</td>
              <td>{turno.endTime || 'Hora no disponible'}</td>
              <td>{turno.creationUser}</td>
              <td>{new Date(turno.creationDate).toLocaleString()}</td>
              <td>{turno.carerUserName || 'Cargando...'}</td>
              <td>{turno.patientUserName || 'Cargando...'}</td>
              <td>
                <button onClick={() => handleEliminarTurno(turno.id)} className="btn-eliminar">
                  Eliminar
                </button>
              </td>
              <td>
                <button className='btn-editar' onClick={() => handleEditarClick(turno)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="turnos-container">
      <div className="turnos-head">

      <h1 className='turn-title'><BsCalendar2Week/>Turnos Asignados</h1>
      <div className="busqueda-container">



        <input
          type="text"
          placeholder="    Buscar cuidador o paciente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="turn-search-input"
        />


      </div>
      </div>
      
        <CrearTurnoModal
          isOpen={modalAbierto}
          onClose={cerrarModal}
          onTurnoCreado={obtenerTurnos}
        />
        <EditarTurnoModal
          isOpen={isEditarModalOpen}
          onClose={() => setIsEditarModalOpen(false)}
          turno={turnoSeleccionado}
          onTurnoEditado={handleTurnoEditado}
        />        
    

      {loading ? (
        <p>Cargando turnos...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        renderTurnos()
      )}
        
        <button onClick={abrirModal} className="btn-crear-turno">
          Crear Turno
        </button>
    </div>
  );
};

export default Turnos;
