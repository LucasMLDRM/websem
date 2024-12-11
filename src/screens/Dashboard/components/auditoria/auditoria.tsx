// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AuditoriaModal from './AuditoriaCrear/AuditoriaCrear';
// import VerAuditoriaModal from './VerAuditoriaModal/VerAuditoriaModal';
// import AuditoriaTabla from './AuditoriaTabla/AuditoriaTabla';
// import { BiSpreadsheet } from "react-icons/bi";
// import { Auditoria } from './types';
// import "./auditoria.css";

// const AuditoriaClinica: React.FC = () => {
//   const [auditorias, setAuditorias] = useState<Auditoria[]>([]);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const [selectedAuditoria, setSelectedAuditoria] = useState<{
//     id: number;
//     carerName: string;
//     patientName: string;
//   } | null>(null); // Para gestionar los datos del modal

//   const token = localStorage.getItem('token');

//   const obtenerAuditorias = async (page: number) => {
//     try {
//       const response = await axios.get('https://emmanuel.somee.com/api/v1/MedicalRecords/GetByPacientDate', {
//         headers: { Authorization: `Bearer ${token}`, ContentType: 'text/plain' },
//         params: {
//           pageSize: 5,
//           pageNumber: page,
//         },
//       });
//       return response.data.items || [];
//     } catch (error) {
//       console.error('Error al cargar auditorías:', error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     const fetchAuditorias = async () => {
//       const current = await obtenerAuditorias(currentPage);
//       setAuditorias(current);
//       setHasMore(current.length === 5); // Si se reciben 5 auditorías, hay más
//     };

//     fetchAuditorias();
//   }, [token, currentPage]);

//   const handleSave = (data: Auditoria) => {
//     console.log('Guardando auditoría:', data);
//     setShowModal(false);
//   };

//   const handleViewDetails = (id: number, carerName: string, patientName: string) => {
//     setSelectedAuditoria({ id, carerName, patientName });
//   };

//   const handleNextPage = async () => {
//     if (hasMore) {
//       const nextPage = currentPage + 1;
//       setCurrentPage(nextPage);
//       const nextAuditorias = await obtenerAuditorias(nextPage);
//       setAuditorias(nextAuditorias);
//       setHasMore(nextAuditorias.length === 5);
//     }
//   };

//   const handlePreviousPage = async () => {
//     if (currentPage > 1) {
//       const prevPage = currentPage - 1;
//       setCurrentPage(prevPage);
//       const previousAuditorias = await obtenerAuditorias(prevPage);
//       setAuditorias(previousAuditorias);
//       setHasMore(previousAuditorias.length === 5);
//     }
//   };

//   return (
//     <div className="auditoria-clinica">
//       <div className="cent-tt">
//         <h2 className='audt-title'><BiSpreadsheet className='log-audt'/>Auditoría Clínica</h2>
//       </div>

//       <AuditoriaTabla
//         auditorias={auditorias}
//         pacientes={[]} 
//         asistentes={[]} 
//         onViewDetails={handleViewDetails} // Agregar función para ver detalles
//       />

//       <div className='foot-audit'>
//         <button className="crear-auditoria-btn" onClick={() => setShowModal(true)}>
//           Crear Auditoría
//         </button>

//         <div className="pagination-cont">
//           <button className='pagination-audit' onClick={handlePreviousPage} disabled={currentPage === 1}>
//             Anterior
//           </button>
//           <button className='pagination-audit' onClick={handleNextPage} disabled={!hasMore}>
//             Siguiente
//           </button>
//         </div>
//       </div>

//       {showModal && (
//         <AuditoriaModal
//           onClose={() => setShowModal(false)}
//           onSave={handleSave}
//           pacientes={[]} 
//           asistentes={[]} 
//           auditoria={null}
//           onStepResponseChange={function (): void {
//             throw new Error('Function not implemented.');
//           }}
//         />
//       )}

//       {selectedAuditoria && (
//         <VerAuditoriaModal
//           id={selectedAuditoria.id}
//           carerName={selectedAuditoria.carerName}
//           patientName={selectedAuditoria.patientName}
//           onClose={() => setSelectedAuditoria(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default AuditoriaClinica;
















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuditoriaModal from './AuditoriaCrear/AuditoriaCrear';
import VerAuditoriaModal from './VerAuditoriaModal/VerAuditoriaModal';
import AuditoriaTabla from './AuditoriaTabla/AuditoriaTabla';
import { BsJournalCheck } from "react-icons/bs";
import { Auditoria } from './types';
import "./auditoria.css";

const AuditoriaClinica: React.FC = () => {
  const [auditorias, setAuditorias] = useState<Auditoria[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedAuditoria, setSelectedAuditoria] = useState<{
    id: number;
    carerName: string;
    patientName: string;
  } | null>(null); 


  const token = localStorage.getItem('token');

  const obtenerAuditorias = async (page: number) => {
    try {
      const response = await axios.get('https://emmanuel.somee.com/api/v1/MedicalRecords/GetByPacientDate', {
        headers: { Authorization: `Bearer ${token}`, ContentType: 'text/plain' },
        params: {
          pageSize: 5,
          pageNumber: page,
        },
      });
      return response.data.items || [];
    } catch (error) {
      console.error('Error al cargar auditorías:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAuditorias = async () => {
      const current = await obtenerAuditorias(currentPage);
      setAuditorias(current);
      setHasMore(current.length === 5); 
    };

    fetchAuditorias();
  }, [token, currentPage]);

  const handleSave = (data: Auditoria) => {
    console.log('Guardando auditoría:', data);
    setShowModal(false);
  };



  const handleNextPage = async () => {
    if (hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      const nextAuditorias = await obtenerAuditorias(nextPage);
      setAuditorias(nextAuditorias);
      setHasMore(nextAuditorias.length === 5);
    }
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      const previousAuditorias = await obtenerAuditorias(prevPage);
      setAuditorias(previousAuditorias);
      setHasMore(previousAuditorias.length === 5);
    }
  };

  return (
    <div className="auditoria-clinica">
      <div className="cent-tt">
        <h2 className='audt-title'><BsJournalCheck className='log-audt'/>Auditoría Clínica</h2>
      </div>

      <AuditoriaTabla
  auditorias={auditorias}
  pacientes={[]} 
  asistentes={[]} 


/>

      <div className='foot-audit'>
        <button className="crear-auditoria-btn" onClick={() => setShowModal(true)}>
          Crear Auditoría
        </button>

        <div className="pagination-cont">
          <button className='pagination-audit' onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <button className='pagination-audit' onClick={handleNextPage} disabled={!hasMore}>
            Siguiente
          </button>
        </div>
      </div>

      {showModal && (
        <AuditoriaModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
          pacientes={[]} 
          asistentes={[]} 
          auditoria={null}
          onStepResponseChange={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}

      {selectedAuditoria && (
        <VerAuditoriaModal
          id={selectedAuditoria.id}
          carerName={selectedAuditoria.carerName}
          patientName={selectedAuditoria.patientName}
          onClose={() => setSelectedAuditoria(null)}
        />
      )}

     
    </div>
  );
};

export default AuditoriaClinica;
