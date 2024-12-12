// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');

//   const handleView = (id: number) => {
//     console.log("Ver auditoría con ID:", id);
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => 
//         (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//         (carerFilter ? auditoria.carer.includes(carerFilter) : true)
//       )
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td><button onClick={() => handleView(auditoria.sheetCompletedId)}>Ver</button></td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;















// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>(''); // Fecha desde
//   const [endDate, setEndDate] = useState<string>(''); // Fecha hasta

//   const handleView = (id: number) => {
//     console.log("Ver auditoría con ID:", id);
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => 
//         (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//         (carerFilter ? auditoria.carer.includes(carerFilter) : true) &&
//         (startDate ? new Date(auditoria.sheetCompletedDate) >= new Date(startDate) : true) &&
//         (endDate ? new Date(auditoria.sheetCompletedDate) <= new Date(endDate) : true)
//       )
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input 
//           type="date" 
//           value={startDate} 
//           onChange={(e) => setStartDate(e.target.value)} 
//           placeholder="Desde"
//         />

//         <input 
//           type="date" 
//           value={endDate} 
//           onChange={(e) => setEndDate(e.target.value)} 
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td><button onClick={() => handleView(auditoria.sheetCompletedId)}>Ver</button></td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;











// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>(''); // Fecha desde
//   const [endDate, setEndDate] = useState<string>(''); // Fecha hasta

//   const handleView = (id: number) => {
//     console.log("Ver auditoría con ID:", id);
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input 
//           type="date" 
//           value={startDate} 
//           onChange={(e) => setStartDate(e.target.value)} 
//           placeholder="Desde"
//         />

//         <input 
//           type="date" 
//           value={endDate} 
//           onChange={(e) => setEndDate(e.target.value)} 
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td><button onClick={() => handleView(auditoria.sheetCompletedId)}>Ver</button></td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;
















// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// import VerAuditoriaModal from '../VerAuditoriaModal/VerAuditoriaModal';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
//   const [, setSelectedAuditoria] = useState<AuditoriaItem | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>(''); // Fecha desde
//   const [endDate, setEndDate] = useState<string>(''); // Fecha hasta

//   const handleView = (id: number) => {
//     const auditoria = auditorias.find(a => a.sheetCompletedId === id);
//     if (auditoria) {
//       setSelectedAuditoria(auditoria);
//       setViewModalOpen(true);
//     }
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleCloseViewModal = () => {
//     setViewModalOpen(false);
//     setSelectedAuditoria(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input 
//           type="date" 
//           value={startDate} 
//           onChange={(e) => setStartDate(e.target.value)} 
//           placeholder="Desde"
//         />

//         <input 
//           type="date" 
//           value={endDate} 
//           onChange={(e) => setEndDate(e.target.value)} 
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td><button onClick={() => handleView(auditoria.sheetCompletedId)}>Ver</button></td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}

//       {isViewModalOpen && selectedId && (
//         <VerAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseViewModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;










// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// import VerAuditoriaModal from '../VerAuditoriaModal/VerAuditoriaModal';
// import './AuditoriaTabla.css'


// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
//   const [selectedViewId, setSelectedViewId] = useState<number | null>(null); // nuevo estado para el ID de visualización
//   const [, setSelectedAuditoria] = useState<AuditoriaItem | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>(''); // Fecha desde
//   const [endDate, setEndDate] = useState<string>(''); // Fecha hasta

//   const handleView = (id: number) => {
//     const auditoria = auditorias.find(a => a.sheetCompletedId === id);
//     if (auditoria) {
//       setSelectedAuditoria(auditoria);
//       setSelectedViewId(id); // usar el ID para el modal de vista
//       setViewModalOpen(true);
//     }
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleCloseViewModal = () => {
//     setViewModalOpen(false);
//     setSelectedViewId(null); // limpiar el ID de visualización al cerrar el modal
//     setSelectedAuditoria(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input 
//           type="date" 
//           value={startDate} 
//           onChange={(e) => setStartDate(e.target.value)} 
//           placeholder="Desde"
//         />

//         <input 
//           type="date" 
//           value={endDate} 
//           onChange={(e) => setEndDate(e.target.value)} 
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td><button onClick={() => handleView(auditoria.sheetCompletedId)}>Ver</button></td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}

//       {isViewModalOpen && selectedViewId !== null && ( // cambiar a selectedViewId
//         <VerAuditoriaModal
//           id={selectedViewId} // usar el ID de visualización
//           onClose={handleCloseViewModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;















// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// import VerAuditoriaModal from '../VerAuditoriaModal/VerAuditoriaModal';
// import './AuditoriaTabla.css';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
//   const [selectedViewId, setSelectedViewId] = useState<number | null>(null);
//   const [loadingId, setLoadingId] = useState<number | null>(null);
//   const [, setSelectedAuditoria] = useState<AuditoriaItem | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');

//   const handleView = (id: number) => {
//     setLoadingId(id); // Iniciar el estado de carga en el ID actual
//     const auditoria = auditorias.find(a => a.sheetCompletedId === id);
//     if (auditoria) {
//       setSelectedAuditoria(auditoria);
//       setSelectedViewId(id);
//       setTimeout(() => {
//         setLoadingId(null); // Detener la carga después de abrir el modal
//         setViewModalOpen(true);
//       }, 1000); // Simulamos un tiempo de carga de 1 segundo
//     }
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleCloseViewModal = () => {
//     setViewModalOpen(false);
//     setSelectedViewId(null);
//     setSelectedAuditoria(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           placeholder="Desde"
//         />

//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td>
//                 <button onClick={() => handleView(auditoria.sheetCompletedId)}>
//                   {loadingId === auditoria.sheetCompletedId ? (
//                     <span className="spinner"></span>
//                   ) : (
//                     'Ver'
//                   )}
//                 </button>
//               </td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}

//       {isViewModalOpen && selectedViewId !== null && (
//         <VerAuditoriaModal
//           id={selectedViewId}
//           onClose={handleCloseViewModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;











// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// import VerAuditoriaModal from '../VerAuditoriaModal/VerAuditoriaModal';
// import './AuditoriaTabla.css';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
//   const [selectedViewId, setSelectedViewId] = useState<number | null>(null);
//   const [loadingId, setLoadingId] = useState<number | null>(null);
//   const [, setSelectedAuditoria] = useState<AuditoriaItem | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');

//   const handleView = (id: number) => {
//     setLoadingId(id); // Iniciar el estado de carga en el ID actual
//     const auditoria = auditorias.find(a => a.sheetCompletedId === id);
//     if (auditoria) {
//       setSelectedAuditoria(auditoria);
//       setSelectedViewId(id);
//       setViewModalOpen(true);
//     }
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleCloseViewModal = () => {
//     setViewModalOpen(false);
//     setSelectedViewId(null);
//     setLoadingId(null); // Limpiar el estado de carga cuando se cierre el modal
//     setSelectedAuditoria(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           placeholder="Desde"
//         />

//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td>
//                 <button onClick={() => handleView(auditoria.sheetCompletedId)} disabled={loadingId === auditoria.sheetCompletedId}>
//                   {loadingId === auditoria.sheetCompletedId ? (
//                     <span className="spinner"></span>
//                   ) : (
//                     'Ver'
//                   )}
//                 </button>
//               </td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}

//       {isViewModalOpen && selectedViewId !== null && (
//         <VerAuditoriaModal
//           id={selectedViewId}
//           onClose={handleCloseViewModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;










// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// import VerAuditoriaModal from '../VerAuditoriaModal/VerAuditoriaModal';
// import './AuditoriaTabla.css';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
//   const [selectedViewId, setSelectedViewId] = useState<number | null>(null);
//   const [loadingId, setLoadingId] = useState<number | null>(null);
//   const [, setSelectedAuditoria] = useState<AuditoriaItem | null>(null);
//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');

//   const handleView = (id: number) => {
//     setLoadingId(id); // Iniciar el estado de carga en el ID actual
//     const auditoria = auditorias.find(a => a.sheetCompletedId === id);
//     if (auditoria) {
//       setSelectedAuditoria(auditoria);
//       setSelectedViewId(id);
//       setTimeout(() => {
//         setLoadingId(null); // Detener la carga después de abrir el modal
//         setViewModalOpen(true);
//       }, 1000); // Simulamos un tiempo de carga de 1 segundo
//     }
//   };

//   const handleEdit = (id: number) => {
//     setSelectedId(id);
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   const handleCloseViewModal = () => {
//     setViewModalOpen(false);
//     setSelectedViewId(null);
//     setSelectedAuditoria(null);
//   };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient?.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer?.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           placeholder="Desde"
//         />

//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td>
//               <button onClick={() => handleView(auditoria.sheetCompletedId)}>
//   {loadingId === auditoria.sheetCompletedId ? (
//     <span className="spinner"></span>
//   ) : (
//     'Ver'
//   )}
// </button>

//               </td>
//               <td><button onClick={() => handleEdit(auditoria.sheetCompletedId)}>Editar</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//         />
//       )}

//       {isViewModalOpen && selectedViewId !== null && (
//         <VerAuditoriaModal
//           id={selectedViewId}
//           onClose={handleCloseViewModal}
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;




















// import React, { useState, useEffect } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// // import VerAuditoriaModal from '../VerAuditoriaModal/VerAuditoriaModal';
// import './AuditoriaTabla.css';
// import { User } from '../../Usuarios/hooks/User';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
//   pacientes: User[];
//   asistentes: User[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewModalOpen, setViewModalOpen] = useState<boolean>(false);
//   // const [selectedViewId, setSelectedViewId] = useState<number | null>(null);
//   const [loadingId, setLoadingId] = useState<number | null>(null);
//   const [loadingEditId, setLoadingEditId] = useState<number | null>(null);  // Nuevo estado para el spinner de editar
//   const [, setSelectedAuditoria] = useState<AuditoriaItem | null>(null);

//   const [filteredAuditorias, setFilteredAuditorias] = useState<AuditoriaItem[]>(auditorias);
//   const [pacientFilter, setPacientFilter] = useState<string>('');
//   const [carerFilter, setCarerFilter] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');

//   const handleView = (id: number) => {
//     setLoadingId(id); // Iniciar el estado de carga en el ID actual
//     const auditoria = auditorias.find(a => a.sheetCompletedId === id);
//     if (auditoria) {
//       setSelectedAuditoria(auditoria);
//       // setSelectedViewId(id);
//       setTimeout(() => {
//         setLoadingId(null); // Detener la carga después de abrir el modal
//         setViewModalOpen(true);
//       }, 1000); // Simulamos un tiempo de carga de 1 segundo
//     }
//   };

//   const handleEdit = (id: number) => {
//     setLoadingEditId(id);  // Activar el spinner al hacer clic en editar
//     setSelectedId(id);
//     setTimeout(() => {
//       setLoadingEditId(null); // Detener el spinner después de un tiempo
//       setModalOpen(true);
//     }, 1000);  // Simulamos un tiempo de carga de 1 segundo para la edición
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   // const handleCloseViewModal = () => {
//   //   setViewModalOpen(false);
//   //   setSelectedViewId(null);
//   //   setSelectedAuditoria(null);
//   // };

//   const handleFilter = () => {
//     setFilteredAuditorias(
//       auditorias.filter(auditoria => {
//         const auditDate = new Date(auditoria.sheetCompletedDate);
//         const from = startDate ? new Date(startDate) : null;
//         const to = endDate ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) : null;

//         return (
//           (pacientFilter ? auditoria.pacient?.includes(pacientFilter) : true) &&
//           (carerFilter ? auditoria.carer?.includes(carerFilter) : true) &&
//           (from ? auditDate >= from : true) &&
//           (to ? auditDate < to : true)
//         );
//       })
//     );
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [pacientFilter, carerFilter, startDate, endDate, auditorias]);

//   return (
//     <>
//       <div className="filtros">
//         <select value={pacientFilter} onChange={(e) => setPacientFilter(e.target.value)}>
//           <option value="">Todos los beneficiarios</option>
//           {Array.from(new Set(auditorias.map(a => a.pacient))).map((pacient, index) => (
//             <option key={index} value={pacient}>{pacient}</option>
//           ))}
//         </select>

//         <select value={carerFilter} onChange={(e) => setCarerFilter(e.target.value)}>
//           <option value="">Todos los cuidadores</option>
//           {Array.from(new Set(auditorias.map(a => a.carer))).map((carer, index) => (
//             <option key={index} value={carer}>{carer}</option>
//           ))}
//         </select>

//         <input
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           placeholder="Desde"
//         />

//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           placeholder="Hasta"
//         />
//       </div>

//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAuditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td>
//                 <button onClick={() => handleView(auditoria.sheetCompletedId)}>
//                   {loadingId === auditoria.sheetCompletedId ? (
//                     <span className="spinner"></span>
//                   ) : (
//                     'Ver'
//                   )}
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(auditoria.sheetCompletedId)}>
//                   {loadingEditId === auditoria.sheetCompletedId ? (
//                     <span className="spinner"></span>
//                   ) : (
//                     'Editar'
//                   )}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>



//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//         id={selectedId}
//         onClose={handleCloseModal}
//         isViewOnly={isViewModalOpen} // Propiedad para solo visualización
//       />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;































// import React, { useState } from 'react';
// import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
// import './AuditoriaTabla.css';
// import { User } from '../../Usuarios/hooks/User';

// export interface AuditoriaItem {
//   pacientId: number;
//   pacient: string;
//   carerId: number;
//   carer: string;
//   sheetCompletedDate: string;
//   sheetCompletedId: number;
//   sheetName: string;
// }

// interface AuditoriaTablaProps {
//   auditorias: AuditoriaItem[];
//   pacientes: User[];
//   asistentes: User[];
// }

// const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias }) => {
//   const [isModalOpen, setModalOpen] = useState<boolean>(false);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isViewOnly, setIsViewOnly] = useState<boolean>(false);
//   const [loadingId, setLoadingId] = useState<number | null>(null);
//   const [loadingEditId, setLoadingEditId] = useState<number | null>(null);

//   const handleView = (id: number) => {
//     setLoadingId(id);
//     setIsViewOnly(true);  // Activar modo visualización
//     setSelectedId(id);
//     setTimeout(() => {
//       setLoadingId(null);
//       setModalOpen(true);
//     }, 1000);  // Simulamos un tiempo de carga de 1 segundo
//   };

//   const handleEdit = (id: number) => {
//     setLoadingEditId(id);
//     setIsViewOnly(false);  // Desactivar modo visualización (permitir edición)
//     setSelectedId(id);
//     setTimeout(() => {
//       setLoadingEditId(null);
//       setModalOpen(true);
//     }, 1000);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//     setSelectedId(null);
//   };

//   return (
//     <>
//       <table className="tabla-auditorias">
//         <thead>
//           <tr>
//             <th>Beneficiario</th>
//             <th>Cuidador</th>
//             <th>Fecha de Carga</th>
//             <th>Planilla</th>
//             <th>Ver</th>
//             <th>Editar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {auditorias.map((auditoria) => (
//             <tr key={auditoria.sheetCompletedId}>
//               <td>{auditoria.pacient}</td>
//               <td>{auditoria.carer}</td>
//               <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
//               <td>{auditoria.sheetName}</td>
//               <td>
//                 <button onClick={() => handleView(auditoria.sheetCompletedId)}>
//                   {loadingId === auditoria.sheetCompletedId ? (
//                     <span className="spinner"></span>
//                   ) : (
//                     'Ver'
//                   )}
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => handleEdit(auditoria.sheetCompletedId)}>
//                   {loadingEditId === auditoria.sheetCompletedId ? (
//                     <span className="spinner"></span>
//                   ) : (
//                     'Editar'
//                   )}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {isModalOpen && selectedId !== null && (
//         <EditarAuditoriaModal
//           id={selectedId}
//           onClose={handleCloseModal}
//           isViewOnly={isViewOnly}  // Pasar modo visualización según el botón clicado
//         />
//       )}
//     </>
//   );
// };

// export default AuditoriaTabla;








import React, { useState } from 'react';
import EditarAuditoriaModal from '../EditarAuditoriaModal/EditarAuditoriaModal';
import './AuditoriaTabla.css';
import { User } from '../../Usuarios/hooks/User';

export interface AuditoriaItem {
  pacientId: number;
  pacient: string;
  carerId: number;
  carer: string;
  sheetCompletedDate: string;
  sheetCompletedId: number;
  sheetName: string;
}

interface AuditoriaTablaProps {
  auditorias: AuditoriaItem[];
  pacientes: User[];
  asistentes: User[];
  onViewDetails?: (id: number, carerName: string, patientName: string) => void; // Nueva prop
}

const AuditoriaTabla: React.FC<AuditoriaTablaProps> = ({ auditorias, onViewDetails }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isViewOnly, setIsViewOnly] = useState<boolean>(false);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [loadingEditId, setLoadingEditId] = useState<number | null>(null);

  const handleView = (id: number, carer: string, pacient: string) => {
    if (onViewDetails) {
      onViewDetails(id, carer, pacient); // Llamar a la prop `onViewDetails`
    } else {
      // Comportamiento por defecto si `onViewDetails` no está definida
      setLoadingId(id);
      setIsViewOnly(true); // Activar modo visualización
      setSelectedId(id);
      setTimeout(() => {
        setLoadingId(null);
        setModalOpen(true);
      }, 1000); // Simulamos un tiempo de carga de 1 segundo
    }
  };

  const handleEdit = (id: number, _carer: string, _pacient: string) => {
    setLoadingEditId(id);
    setIsViewOnly(false); // Desactivar modo visualización (permitir edición)
    setSelectedId(id);
    setTimeout(() => {
      setLoadingEditId(null);
      setModalOpen(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedId(null);
  };

  return (
    <>
      <table className="tabla-auditorias">
        <thead>
          <tr>
            <th>Beneficiario</th>
            <th>Cuidador</th>
            <th>Fecha de Carga</th>
            <th>Planilla</th>
            <th>Ver</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {auditorias.map((auditoria) => (
            <tr key={auditoria.sheetCompletedId}>
              <td>{auditoria.pacient}</td>
              <td>{auditoria.carer}</td>
              <td>{new Date(auditoria.sheetCompletedDate).toLocaleDateString()}</td>
              <td>{auditoria.sheetName}</td>
              <td>
                <button
                  onClick={() => handleView(auditoria.sheetCompletedId, auditoria.carer, auditoria.pacient)}
                >
                  {loadingId === auditoria.sheetCompletedId ? (
                    <span className="spinner"></span>
                  ) : (
                    'Ver'
                  )}
                </button>
              </td>
              <td>
                <button onClick={() => handleEdit(auditoria.sheetCompletedId, auditoria.carer, auditoria.pacient)}>
                  {loadingEditId === auditoria.sheetCompletedId ? (
                    <span className="spinner"></span>
                  ) : (
                    'Editar'
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {isModalOpen && selectedId !== null && (
        <EditarAuditoriaModal
          id={selectedId}
          onClose={handleCloseModal}
          isViewOnly={isViewOnly} // Pasar modo visualización según el botón clicado
          carerName={auditoria.carer} patientName={auditoria.pacient}        />
      )} */}

{isModalOpen && selectedId !== null && (
  // Aquí pasamos los datos correctos de la auditoría seleccionada
  <EditarAuditoriaModal
    id={selectedId}
    onClose={handleCloseModal}
    isViewOnly={isViewOnly}
    carerName={auditorias.find(auditoria => auditoria.sheetCompletedId === selectedId)?.carer || ""}
    patientName={auditorias.find(auditoria => auditoria.sheetCompletedId === selectedId)?.pacient || ""}
  />
)}

    </>
  );
};

export default AuditoriaTabla;
