// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './reportsTable.css';
// import { FaRegUser } from "react-icons/fa6"; 

// interface Report {
//   id: number;
//   reportTime: string;
//   senderId: number;
//   receiverId: number;
//   reportType: string;
//   observations: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const ReportsTable: React.FC = () => {
//   const [reports, setReports] = useState<Report[]>([]);
//   const [users, setUsers] = useState<Record<number, User>>({});

//   // Fetch individual user details
//   const fetchUser = async (id: number) => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       if (!users[id]) {
//         const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers((prev) => ({ ...prev, [id]: response.data }));
//       }
//     } catch (error) {
//       console.error(`Error al obtener usuario con ID ${id}:`, error);
//     }
//   };

//   // Fetch all reports
//   useEffect(() => {
//     const fetchReports = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserReports', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const reports = Array.isArray(response.data) ? response.data : [];
//         setReports(reports);

//         // Fetch users for senderId and receiverId
//         reports.forEach((report) => {
//           fetchUser(report.senderId);
//           fetchUser(report.receiverId);
//         });
//       } catch (error) {
//         console.error('Error al obtener reportes:', error);
//         setReports([]);
//       }
//     };

//     fetchReports();
//   }, []);

//   return (
//     <div className="reports-table">
//       <h3 className="titulo-reports">
//         <FaRegUser className="icon-reports" /> Reportes
//       </h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Fecha</th>
//             <th>Asistente</th>
   
//             <th>Tipo de Reporte</th>
//             <th>Observación</th>
//             <th>Estado</th>
//             <th>Resolver</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map((report) => (
//             <tr key={report.id}>
//               <td>{new Date(report.reportTime).toLocaleString()}</td>
//               <td>
//                 {users[report.senderId]
//                   ? `${users[report.senderId].firstName} ${users[report.senderId].lastName}`
//                   : 'Cargando...'}
//               </td>
//               <td>
//                 {users[report.receiverId]
//                   ? `${users[report.receiverId].firstName} ${users[report.receiverId].lastName}`
//                   : 'Cargando...'}
//               </td>
//               <td>{report.reportType}</td>
//               <td>{report.observations}</td>
//               <td>
//                 <button>Resolver</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReportsTable;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './reportsTable.css';
// import { FaRegUser } from "react-icons/fa6";

// interface Report {
//   id: number;
//   reportTime: string;
//   userReporting: number; // Cambié senderId a userReporting
//   reportType: string;
//   observations: string;
//   status: string;
//   result: string;
//   resultTime: string;
//   userResult: number;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const ReportsTable: React.FC = () => {
//   const [reports, setReports] = useState<Report[]>([]);
//   const [users, setUsers] = useState<Record<number, User>>({});

//   // Fetch individual user details
//   const fetchUser = async (id: number) => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       if (!users[id]) {
//         const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers((prev) => ({ ...prev, [id]: response.data }));
//       }
//     } catch (error) {
//       console.error(`Error al obtener usuario con ID ${id}:`, error);
//     }
//   };

//   // Fetch all reports
//   useEffect(() => {
//     const fetchReports = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserReports', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const reports = Array.isArray(response.data) ? response.data : [];
//         setReports(reports);

//         // Fetch users for userReporting (as the senderId) and userResult
//         reports.forEach((report) => {
//           fetchUser(report.userReporting); // userReporting instead of senderId
//           fetchUser(report.userResult); // userResult
//         });
//       } catch (error) {
//         console.error('Error al obtener reportes:', error);
//         setReports([]);
//       }
//     };

//     fetchReports();
//   }, []);

//   return (
//     <div className="reports-table">
//       <h3 className="titulo-reports">
//         <FaRegUser className="icon-reports" /> Reportes
//       </h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Fecha</th>
//             <th>Asistente</th>
//             <th>Tipo de Reporte</th>
//             <th>Observación</th>
//             <th>Estado</th>
//             <th>Resultado</th>
//             <th>Resolver</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map((report) => (
//             <tr key={report.id}>
//               <td>{new Date(report.reportTime).toLocaleString()}</td>
//               <td>
//                 {users[report.userReporting]
//                   ? `${users[report.userReporting].firstName} ${users[report.userReporting].lastName}`
//                   : 'Cargando...'}
//               </td>
//               <td>{report.reportType}</td>
//               <td>{report.observations}</td>
//               <td>{report.status}</td>
//               <td>{report.result}</td>
//               <td>
//                 <button>Resolver</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReportsTable;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './reportsTable.css';
// import { FaRegUser } from "react-icons/fa6";

// interface Report {
//   id: number;
//   reportTime: string;
//   userReporting: number; // Cambié senderId a userReporting
//   reportType: string;
//   observations: string;
//   status: string;
//   result: string;
//   resultTime: string;
//   userResult: number;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const ReportsTable: React.FC = () => {
//   const [reports, setReports] = useState<Report[]>([]);
//   const [users, setUsers] = useState<Record<number, User>>({});
//   const [selectedReport, setSelectedReport] = useState<Report | null>(null);
//   const [resolution, setResolution] = useState<number>(0);

//   // Fetch individual user details
//   const fetchUser = async (id: number) => {
//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       if (!users[id]) {
//         const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers((prev) => ({ ...prev, [id]: response.data }));
//       }
//     } catch (error) {
//       console.error(`Error al obtener usuario con ID ${id}:`, error);
//     }
//   };

//   // Fetch all reports
//   useEffect(() => {
//     const fetchReports = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserReports', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const reports = Array.isArray(response.data) ? response.data : [];
//         setReports(reports);

//         // Fetch users for userReporting (as the senderId) and userResult
//         reports.forEach((report) => {
//           fetchUser(report.userReporting); // userReporting instead of senderId
//           fetchUser(report.userResult); // userResult
//         });
//       } catch (error) {
//         console.error('Error al obtener reportes:', error);
//         setReports([]);
//       }
//     };

//     fetchReports();
//   }, []);

//   // Handle resolution change
//   const handleResolutionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setResolution(Number(event.target.value));
//   };

//   // Handle form submission
//   const handleFormSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!selectedReport) return;

//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const response = await axios.put(
//         `https://emmanuel.somee.com/api/v1/UserReports/${selectedReport.id}`,
//         { result: resolution },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       alert('Reporte resuelto con éxito');
//       // Refresh the reports after updating
//       setReports((prevReports) =>
//         prevReports.map((report) =>
//           report.id === selectedReport.id
//             ? { ...report, result: resolution.toString() }
//             : report
//         )
//       );
//       setSelectedReport(null); // Close the form
//     } catch (error) {
//       console.error('Error al resolver reporte:', error);
//       alert('Error al resolver el reporte.');
//     }
//   };

//   return (
//     <div className="reports-table">
//       <h3 className="titulo-reports">
//         <FaRegUser className="icon-reports" /> Reportes
//       </h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Fecha</th>
//             <th>Asistente</th>
//             <th>Tipo de Reporte</th>
//             <th>Observación</th>
//             <th>Estado</th>
//             <th>Resultado</th>
//             <th>Resolver</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map((report) => (
//             <tr key={report.id}>
//               <td>{new Date(report.reportTime).toLocaleString()}</td>
//               <td>
//                 {users[report.userReporting]
//                   ? `${users[report.userReporting].firstName} ${users[report.userReporting].lastName}`
//                   : 'Cargando...'}
//               </td>
//               <td>{report.reportType}</td>
//               <td>{report.observations}</td>
//               <td>{report.status}</td>
//               <td>{report.result}</td>
//               <td>
//                 <button onClick={() => setSelectedReport(report)}>Resolver</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedReport && (
//         <div className="resolve-form">
//           <h4>Formulario de Resolución</h4>
//           <form onSubmit={handleFormSubmit}>
//             <div>
//               <label>Asistente:</label>
//               <input
//                 type="text"
//                 value={`${users[selectedReport.userReporting]?.firstName} ${users[selectedReport.userReporting]?.lastName}`}
//                 readOnly
//               />
//             </div>

//             <div>
//               <label>Tipo de Reporte:</label>
//               <input type="text" value={selectedReport.reportType} readOnly />
//             </div>
//             <div>
//               <label>Observación:</label>
//               <input type="text" value={selectedReport.observations} readOnly />
//             </div>
//             <div>
//               <label>Resolución:</label>
//               <select value={resolution} onChange={handleResolutionChange}>
//                 <option value={0}>Pendiente</option>
//                 <option value={1}>Resuelto</option>
//                 <option value={2}>Cancelado</option>
//               </select>
//             </div>
//             <div>
//               <button type="submit">Guardar Resolución</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReportsTable;









import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './reportsTable.css';
import { FaRegUser } from "react-icons/fa6";

interface Report {
  id: number;
  reportTime: string;
  userReporting: number; // Cambié senderId a userReporting
  reportType: string;
  observations: string;
  status: string;
  result: string;
  resultTime: string;
  userResult: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const ReportsTable: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({});
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [resolution, setResolution] = useState<number>(0);

  // Fetch individual user details
  const fetchUser = async (id: number) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      if (!users[id]) {
        const response = await axios.get(`https://emmanuel.somee.com/api/v1/Users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers((prev) => ({ ...prev, [id]: response.data }));
      }
    } catch (error) {
      console.error(`Error al obtener usuario con ID ${id}:`, error);
    }
  };

  // Fetch all reports
  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('https://emmanuel.somee.com/api/v1/UserReports', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const reports = Array.isArray(response.data) ? response.data : [];
        setReports(reports);

        // Fetch users for userReporting (as the senderId) and userResult
        reports.forEach((report) => {
          fetchUser(report.userReporting); // userReporting instead of senderId
          fetchUser(report.userResult); // userResult
        });
      } catch (error) {
        console.error('Error al obtener reportes:', error);
        setReports([]);
      }
    };

    fetchReports();
  }, []);

  // Handle resolution change
  const handleResolutionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setResolution(Number(event.target.value));
  };

  // Handle form submission
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedReport) return;

    const token = localStorage.getItem('token');
    if (!token) return;

    const status = resolution === 0 ? "Pendiente" : resolution === 1 ? "Resuelto" : "Cancelado";

    // Prepare the payload for the PUT request

    try {

      alert('Reporte resuelto con éxito');
      // Refresh the reports after updating
      setReports((prevReports) =>
        prevReports.map((report) =>
          report.id === selectedReport.id
            ? { ...report, result: resolution.toString(), status }
            : report
        )
      );
      setSelectedReport(null); // Close the form
    } catch (error) {
      console.error('Error al resolver reporte:', error);
      alert('Error al resolver el reporte.');
    }
  };

  return (
    <div className="reports-table">
      <h3 className="titulo-reports">
        <FaRegUser className="icon-reports" /> Reportes
      </h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Asistente</th>
            <th>Tipo de Reporte</th>
            <th>Observación</th>
            <th>Estado</th>
            {/* <th>Resultado</th> */}
            <th>Resolver</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{new Date(report.reportTime).toLocaleString()}</td>
              <td>
                {users[report.userReporting]
                  ? `${users[report.userReporting].firstName} ${users[report.userReporting].lastName}`
                  : 'Cargando...'}
              </td>
              <td>{report.reportType}</td>
              <td>{report.observations}</td>
              <td>{report.status}</td>
              {/* <td>{report.result}</td> */}
              <td>
                <button onClick={() => setSelectedReport(report)}>Resolver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReport && (
        <div className="resolve-form">
          <h4>Formulario de Resolución</h4>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Asistente:</label>
              <input
                type="text"
                value={`${users[selectedReport.userReporting]?.firstName} ${users[selectedReport.userReporting]?.lastName}`}
                readOnly
              />
            </div>

            <div>
              <label>Tipo de Reporte:</label>
              <input type="text" value={selectedReport.reportType} readOnly />
            </div>
            <div>
              <label>Observación:</label>
              <input type="text" value={selectedReport.observations} readOnly />
            </div>
            <div>
              <label>Resolución:</label>
              <select value={resolution} onChange={handleResolutionChange}>
                <option value={0}>Pendiente</option>
                <option value={1}>Resuelto</option>
                <option value={2}>Cancelado</option>
              </select>
            </div>
            <div>
              <button type="submit">Guardar Resolución</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReportsTable;
