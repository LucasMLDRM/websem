
// const MisDatos = () => {
//   return (
//     <div>
//       <h1>Mis Datos</h1>
//       <p>Aquí puedes mostrar los datos del usuario (Paciente o Familiar).</p>
//     </div>
//   );
// };

// export default MisDatos;






// import React, { useState } from 'react';

// const MisDatos: React.FC = () => {
//   const [fechaFiltro, setFechaFiltro] = useState<string>('');

//   const datosPlanillas = [
//     { fecha: '2024-12-30', detalle: 'Planilla 1' },
//     { fecha: '2024-12-29', detalle: 'Planilla 2' },
//     { fecha: '2024-12-28', detalle: 'Planilla 3' },
//   ];

//   // Filtrar datos por fecha
//   const datosFiltrados = fechaFiltro
//     ? datosPlanillas.filter((planilla) =>
//         planilla.fecha.startsWith(fechaFiltro)
//       )
//     : datosPlanillas;

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: '2px solid black',
//           padding: '20px',
//           marginBottom: '20px',
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         <p>Nombre: Juan Pérez</p>
//         <p>Edad: 35</p>
//         <p>Diagnóstico: Diabetes Tipo 2</p>
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: '2px solid black', padding: '20px' }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid black', padding: '10px' }}>
//                 Fecha
//               </th>
//               <th style={{ border: '1px solid black', padding: '10px' }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {datosFiltrados.length > 0 ? (
//               datosFiltrados.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: '1px solid black',
//                       padding: '10px',
//                       textAlign: 'center',
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: '1px solid black',
//                       padding: '10px',
//                       textAlign: 'center',
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: '1px solid black',
//                     padding: '10px',
//                     textAlign: 'center',
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;











// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );

//         const patientID = userLogged?.patientID;
//         if (!patientID) {
//           console.error("No se encontró el patientID del usuario logueado");
//           return;
//         }

//         // Obtener datos del usuario
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, []);

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Fecha
//               </th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );
//         console.log("Datos del usuario logueado:", userLogged);

//         const patientID = userLogged?.patientID;
//         if (!patientID) {
//           console.error("No se encontró el patientID del usuario logueado");
//           return;
//         }

//         // Obtener datos del usuario
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         console.log("Datos del paciente:", usuarioData);
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         console.log("Planillas del paciente:", planillasData);
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, []);

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Fecha
//               </th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;





// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );
//         console.log("Datos del usuario logueado:", userLogged);

//         const { userName, role } = userLogged;

//         if (!userName || !role) {
//           console.error("No se encontró el userName o role del usuario logueado");
//           return;
//         }

//         // Obtener usuarios por rol
//         const { data: usuariosByRol } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/GetbyRol/${role}`,
//           { headers }
//         );
//         console.log("Usuarios obtenidos por rol:", usuariosByRol);

//         // Filtrar usuario por userName
//         const usuarioFiltrado = usuariosByRol.find(
//           (usuario: any) => usuario.userName === userName
//         );

//         if (!usuarioFiltrado || !usuarioFiltrado.patientID) {
//           console.error("No se encontró el usuario correspondiente o el patientID");
//           return;
//         }

//         const patientID = usuarioFiltrado.patientID;
//         console.log("PatientID obtenido:", patientID);

//         // Obtener datos del usuario
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         console.log("Datos del paciente:", usuarioData);
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         console.log("Planillas del paciente:", planillasData);
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, []);

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Fecha
//               </th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;









// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );
//         console.log("Datos del usuario logueado:", userLogged);

//         const { userName, role } = userLogged;

//         if (!userName || !role) {
//           console.error("No se encontró el userName o role del usuario logueado");
//           return;
//         }

//         // Obtener usuarios por rol
//         const { data: usuariosByRol } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/GetbyRol/${role}`,
//           { headers }
//         );
//         console.log("Usuarios obtenidos por rol:", usuariosByRol);

//         // Filtrar usuario por userName
//         const usuarioFiltrado = usuariosByRol.find(
//           (usuario: any) => usuario.userName === userName
//         );

//         if (!usuarioFiltrado || !usuarioFiltrado.id) {
//           console.error("No se encontró el usuario correspondiente o su ID");
//           return;
//         }

//         const usuarioId = usuarioFiltrado.id;
//         console.log("ID del usuario obtenido:", usuarioId);

//         // Obtener datos del usuario por ID
//         const { data: usuarioCompleto } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/${usuarioId}`,
//           { headers }
//         );
//         console.log("Datos completos del usuario:", usuarioCompleto);

//         const patientID = usuarioCompleto.patientID;
//         if (!patientID) {
//           console.error("No se encontró el patientID en los datos del usuario");
//           return;
//         }
//         console.log("PatientID obtenido:", patientID);

//         // Obtener datos del paciente
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         console.log("Datos del paciente:", usuarioData);
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         console.log("Planillas del paciente:", planillasData);
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, []);

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Fecha
//               </th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );
//         console.log("Datos del usuario logueado:", userLogged);

//         const { userName, role } = userLogged;

//         if (!userName || !role) {
//           console.error("No se encontró el userName o role del usuario logueado");
//           return;
//         }

//         // Obtener usuarios por rol
//         const { data: usuariosByRol } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/GetbyRol/${role}`,
//           { headers }
//         );
//         console.log("Usuarios obtenidos por rol:", usuariosByRol);

//         // Filtrar usuario por userName
//         const usuarioFiltrado = usuariosByRol.find(
//           (usuario: any) => usuario.userName === userName
//         );

//         if (!usuarioFiltrado || !usuarioFiltrado.id) {
//           console.error("No se encontró el usuario correspondiente o su ID");
//           return;
//         }

//         const usuarioId = usuarioFiltrado.id;
//         console.log("ID del usuario obtenido:", usuarioId);

//         // Obtener datos del usuario por ID
//         const { data: usuarioCompleto } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/${usuarioId}`,
//           { headers }
//         );
//         console.log("Datos completos del usuario:", usuarioCompleto);

//         const patientID = usuarioCompleto.patientID;
//         if (!patientID) {
//           console.error("No se encontró el patientID en los datos del usuario");
//           return;
//         }
//         console.log("PatientID obtenido:", patientID);

//         // Obtener datos del paciente
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         console.log("Datos del paciente:", usuarioData);
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         console.log("Planillas del paciente:", planillasData);
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate(-1); // Regresa a la página anterior
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Fecha
//               </th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );
//         console.log("Datos del usuario logueado:", userLogged);

//         const { userName, role } = userLogged;

//         if (!userName || !role) {
//           console.error("No se encontró el userName o role del usuario logueado");
//           return;
//         }

//         // Obtener usuarios por rol
//         const { data: usuariosByRol } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/GetbyRol/${role}`,
//           { headers }
//         );
//         console.log("Usuarios obtenidos por rol:", usuariosByRol);

//         // Filtrar usuario por userName
//         const usuarioFiltrado = usuariosByRol.find(
//           (usuario: any) => usuario.userName === userName
//         );

//         if (!usuarioFiltrado || !usuarioFiltrado.id) {
//           console.error("No se encontró el usuario correspondiente o su ID");
//           return;
//         }

//         const usuarioId = usuarioFiltrado.id;
//         console.log("ID del usuario obtenido:", usuarioId);

//         // Obtener datos del usuario por ID
//         const { data: usuarioCompleto } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Users/${usuarioId}`,
//           { headers }
//         );
//         console.log("Datos completos del usuario:", usuarioCompleto);

//         const patientID = usuarioCompleto.patientID;
//         if (!patientID) {
//           console.error("No se encontró el patientID en los datos del usuario");
//           return;
//         }
//         console.log("PatientID obtenido:", patientID);

//         // Obtener datos del paciente
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         console.log("Datos del paciente:", usuarioData);
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         console.log("Planillas del paciente:", planillasData);
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Fecha
//               </th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>
//                 Detalle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;



















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("No se encontró el token en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener usuario logueado
//         const { data: userLogged } = await axios.get(
//           "https://emmanuel.somee.com/api/v1/users/getuserlogged",
//           { headers }
//         );

//         const patientID = userLogged.patientID;
//         if (!patientID) {
//           console.error("No se encontró el patientID en los datos del usuario logueado");
//           return;
//         }

//         // Obtener datos completos del usuario
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener datos completos del usuario usando patientId
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <p>Diagnóstico: {usuario.diagnostico}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener datos completos del usuario usando patientId
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: planillasData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
//           { headers }
//         );
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div
//         style={{
//           border: "2px solid black",
//           padding: "20px",
//           marginBottom: "20px",
//         }}
//       >
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//             <p>Profesión: {usuario.profession}</p>
//             <p>Estado: {usuario.isEnabled ? "Activo" : "Inactivo"}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.fecha}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.detalle}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay datos disponibles para la fecha seleccionada.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;












// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener datos completos del usuario usando patientId
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener planillas del usuario
//         const { data: medicalRecordsData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/MedicalRecords/getByPacient/${patientID}`,
//           { headers }
//         );

//         // Extraer los spreadSheetId
//         const spreadSheetIds = medicalRecordsData.spreadSheetCompletedMedicalModelResponses.map(
//           (record: any) => record.spreadSheetId
//         );

//         // Obtener las planillas usando los spreadSheetIds
//         const planillasPromises = spreadSheetIds.map(async (spreadSheetId: number) => {
//           const { data: planillaData } = await axios.get(
//             `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${spreadSheetId}`,
//             { headers }
//           );
//           return planillaData;
//         });

//         const planillasData = await Promise.all(planillasPromises);
//         setPlanillas(planillasData);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//             <p>Profesión: {usuario.profession}</p>
//             <p>Estado: {usuario.isEnabled ? "Activo" : "Inactivo"}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MisDatos;













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         const headers = { Authorization: `Bearer ${token}` };

//         // Obtener datos completos del usuario usando patientId
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Función para obtener registros médicos con paginación
//         // const obtenerMedicalRecords = async (page: number) => {
//         //   try {
//         //     const { data: medicalRecordsData } = await axios.get(
//         //       `https://emmanuel.somee.com/api/v1/MedicalRecords/GetByPacientDate`,
//         //       {
//         //         headers,
//         //         params: {
//         //           patientId: patientID,
//         //           pageSize: 5,
//         //           pageNumber: page,
//         //         },
//         //       }
//         //     );

//         //     if (medicalRecordsData.items) {
//         //       // Obtener los registros médicos
//         //       const spreadSheetIds = medicalRecordsData.items.map((record: any) => record.spreadSheetId);

//         //       // Obtener las planillas usando los spreadSheetIds
//         //       const planillasPromises = spreadSheetIds.map(async (spreadSheetId: number) => {
//         //         const { data: planillaData } = await axios.get(
//         //           `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${spreadSheetId}`,
//         //           { headers }
//         //         );
//         //         return planillaData;
//         //       });

//         //       const planillasData = await Promise.all(planillasPromises);

//         //       // Agregar los registros médicos nuevos a los existentes
//         //       setPlanillas((prevPlanillas) => [...prevPlanillas, ...planillasData]);

//         //       // Verificar si hay más registros médicos
//         //       setHasMore(medicalRecordsData.items.length === 5); // Si recibimos 5 elementos, significa que puede haber más
//         //     }
//         //   } catch (error) {
//         //     console.error("Error al obtener los registros médicos:", error);
//         //   }
//         // };

//         const obtenerMedicalRecords = async () => {
//           try {
//             const token = localStorage.getItem("token");
//             const patientID = localStorage.getItem("patientId");
        
//             if (!token || !patientID) {
//               console.error("Token o patientId no encontrado en localStorage");
//               return;
//             }
        
//             const headers = { Authorization: `Bearer ${token}` };
        
//             // Obtener registros médicos del paciente
//             const { data: medicalRecordsData } = await axios.get(
//               `https://emmanuel.somee.com/api/v1/MedicalRecords/GetByPacientDate`,
//               {
//                 headers,
//                 params: {
//                   patientId: patientID, // Asegúrate de que este parámetro es necesario
//                   pageSize: 5,
//                   pageNumber: 1, // Podemos comenzar con la primera página
//                 },
//               }
//             );
        
//             console.log("Medical Records Data:", medicalRecordsData);
        
//             if (medicalRecordsData && medicalRecordsData.items) {
//               const spreadSheetIds = medicalRecordsData.items.map((record: any) => record.spreadSheetId);
//               console.log("SpreadSheetIds:", spreadSheetIds);
//               // Continuar con el procesamiento si obtenemos los registros
//             } else {
//               console.error("No se encontraron registros médicos.");
//             }
//           } catch (error) {
//             console.error("Error al obtener los registros médicos:", error);
//           }
//         };
        
//         useEffect(() => {
//           obtenerMedicalRecords();
//         }, []);
        


//     //     await obtenerMedicalRecords(currentPage);
//     //   } catch (error) {
//     //     console.error("Error al obtener los datos:", error);
//     //   }
//     // };

//   //   fetchDatos();
//   // }, [navigate, currentPage]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   // Manejo de la paginación
//   const handleNextPage = () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button onClick={handleNextPage} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MisDatos;
















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const navigate = useNavigate();

//   // Función para obtener registros médicos
//   const obtenerMedicalRecords = async (patientID: string, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` };

//       // Obtener registros médicos del paciente
//       const { data: medicalRecordsData } = await axios.get(
//         `https://emmanuel.somee.com/api/v1/MedicalRecords/GetByPacientDate`,
//         {
//           headers,
//           params: {
//             patientId: patientID,
//             pageSize: 5,
//             pageNumber: currentPage,
//           },
//         }
//       );

//       if (medicalRecordsData && medicalRecordsData.items) {
//         const spreadSheetIds = medicalRecordsData.items.map((record: any) => record.spreadSheetId);
//         // Procesar spreadSheetIds, obtener las planillas correspondientes
//         const planillasPromises = spreadSheetIds.map(async (spreadSheetId: number) => {
//           const { data: planillaData } = await axios.get(
//             `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${spreadSheetId}`,
//             { headers }
//           );
//           return planillaData;
//         });

//         const planillasData = await Promise.all(planillasPromises);

//         // Actualiza el estado de las planillas
//         setPlanillas((prevPlanillas) => [...prevPlanillas, ...planillasData]);

//         // Verificar si hay más registros médicos
//         setHasMore(medicalRecordsData.items.length === 5);
//       }
//     } catch (error) {
//       console.error("Error al obtener los registros médicos:", error);
//     }
//   };

//   // Función para obtener los datos del usuario y registros médicos
//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         // Obtener datos del usuario
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener registros médicos
//         await obtenerMedicalRecords(patientID, token);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate, currentPage]); // Asegúrate de incluir currentPage si la paginación está en uso

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   // Manejo de la paginación
//   const handleNextPage = () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button onClick={handleNextPage} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MisDatos;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const navigate = useNavigate();

//   // Función para obtener registros médicos
//   const obtenerMedicalRecords = async (patientID: string, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` };

//       // Obtener registros médicos del paciente
//       const { data: medicalRecordsData } = await axios.get(
//         `https://emmanuel.somee.com/api/v1/MedicalRecords/getByPacient/${patientID}`,
//         {
//           headers,
//           params: {
//             patientId: patientID,
//             pageSize: 5,
//             pageNumber: currentPage,
//           },
//         }
//       );

//       if (medicalRecordsData && medicalRecordsData.items) {
//         const sheetCompletedIds = medicalRecordsData.items.map((record: any) => record.sheetCompletedId);
//         // Procesar sheetCompletedIds, obtener las planillas correspondientes
//         const planillasPromises = sheetCompletedIds.map(async (sheetCompletedId: number) => {
//           const { data: planillaData } = await axios.get(
//             `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${sheetCompletedId}`,
//             { headers }
//           );
//           return planillaData;
//         });

//         const planillasData = await Promise.all(planillasPromises);

//         // Actualiza el estado de las planillas
//         setPlanillas((prevPlanillas) => [...prevPlanillas, ...planillasData]);

//         // Verificar si hay más registros médicos
//         setHasMore(medicalRecordsData.items.length === 5);
//       }
//     } catch (error) {
//       console.error("Error al obtener los registros médicos:", error);
//     }
//   };

//   // Función para obtener los datos del usuario y registros médicos
//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         // Obtener datos del usuario
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener registros médicos
//         await obtenerMedicalRecords(patientID, token);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate, currentPage]); // Asegúrate de incluir currentPage si la paginación está en uso

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   // Manejo de la paginación
//   const handleNextPage = () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button onClick={handleNextPage} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MisDatos;














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const navigate = useNavigate();

//   // Función para obtener registros médicos
//   const obtenerMedicalRecords = async (patientID: string, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` };

//       // Obtener registros médicos del paciente
//       const { data: medicalRecordsData } = await axios.get(
//         `https://emmanuel.somee.com/api/v1/MedicalRecords/getByPacient/${patientID}`,
//         {
//           headers,
//         }
//       );

//       if (medicalRecordsData && medicalRecordsData.items) {
//         const sheetCompletedIds = medicalRecordsData.items.map((record: any) => record.sheetCompletedId);
//         // Procesar sheetCompletedIds, obtener las planillas correspondientes
//         const planillasPromises = sheetCompletedIds.map(async (sheetCompletedId: number) => {
//           const { data: planillaData } = await axios.get(
//             `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${sheetCompletedId}`,
//             { headers }
//           );
//           return planillaData;
//         });

//         const planillasData = await Promise.all(planillasPromises);

//         // Actualiza el estado de las planillas
//         setPlanillas((prevPlanillas) => [...prevPlanillas, ...planillasData]);

//         // Verificar si hay más registros médicos
//         setHasMore(medicalRecordsData.items.length === 5);
//       }
//     } catch (error) {
//       console.error("Error al obtener los registros médicos:", error);
//     }
//   };

//   // Función para obtener los datos del usuario y registros médicos
//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         // Obtener datos del usuario
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener registros médicos
//         await obtenerMedicalRecords(patientID, token);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate, currentPage]); // Asegúrate de incluir currentPage si la paginación está en uso

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   // Manejo de la paginación
//   const handleNextPage = () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button onClick={handleNextPage} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MisDatos;
























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const navigate = useNavigate();

//   // Función para obtener las planillas completadas del paciente
//   const obtenerPlanillasCompletadas = async (patientID: string, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` };

//       // Obtener planillas completadas del paciente
//       const { data: planillasData } = await axios.get(
//         `https://emmanuel.somee.com/api/v1/SpreadSheetCompleteds/GetByPacient/${patientID}`,
//         {
//           headers,
//         }
//       );

//       // Mostrar las planillas en consola para verificar la estructura
//       console.log("Planillas del paciente:", planillasData);

//       // Actualizar el estado de las planillas
//       setPlanillas(planillasData);

//       // Verificar si hay más registros (dependiendo de la respuesta)
//       setHasMore(planillasData.length === 5); // Este es solo un ejemplo, ajusta según la estructura de los datos
//     } catch (error) {
//       console.error("Error al obtener las planillas:", error);
//     }
//   };

//   // Función para obtener los datos del usuario
//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         // Obtener datos del usuario
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener las planillas completadas
//         await obtenerPlanillasCompletadas(patientID, token);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]); // Solo recargamos cuando cambiamos de paciente

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   // Manejo de la paginación
//   const handleNextPage = () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button onClick={handleNextPage} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MisDatos;




















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [fechaFiltro, setFechaFiltro] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const [selectedPlanilla, setSelectedPlanilla] = useState<any | null>(null);
//   const navigate = useNavigate();

//   // Función para obtener las planillas completadas del paciente
//   const obtenerPlanillasCompletadas = async (patientID: string, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` };

//       // Obtener planillas completadas del paciente
//       const { data: planillasData } = await axios.get(
//         `https://emmanuel.somee.com/api/v1/SpreadSheetCompleteds/GetByPacient/${patientID}`,
//         {
//           headers,
//         }
//       );

//       // Mostrar las planillas en consola para verificar la estructura
//       console.log("Planillas del paciente:", planillasData);

//       // Actualizar el estado de las planillas
//       setPlanillas(planillasData);

//       // Verificar si hay más registros (dependiendo de la respuesta)
//       setHasMore(planillasData.length === 5); // Este es solo un ejemplo, ajusta según la estructura de los datos
//     } catch (error) {
//       console.error("Error al obtener las planillas:", error);
//     }
//   };

//   // Función para obtener los datos del usuario
//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         // Obtener datos del usuario
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener las planillas completadas
//         await obtenerPlanillasCompletadas(patientID, token);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };

//   // Filtrar planillas por fecha
//   const planillasFiltradas = fechaFiltro
//     ? planillas.filter((planilla) => planilla.creationTime.startsWith(fechaFiltro))
//     : planillas;

//   // Manejo de la paginación
//   const handleNextPage = () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   // Función para abrir el popup con los detalles de una planilla
//   const handlePlanillaClick = (planilla: any) => {
//     setSelectedPlanilla(planilla);
//   };

//   // Función para cerrar el popup
//   const closePopup = () => {
//     setSelectedPlanilla(null);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Filtro por Fecha */}
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
//           <input
//             type="date"
//             id="fechaFiltro"
//             value={fechaFiltro}
//             onChange={(e) => setFechaFiltro(e.target.value)}
//           />
//         </div>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillasFiltradas.length > 0 ? (
//               planillasFiltradas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                       cursor: "pointer",
//                       color: "blue",
//                     }}
//                     onClick={() => handlePlanillaClick(planilla)}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button onClick={handleNextPage} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>

//       {/* Popup con la información de la planilla seleccionada */}
//       {selectedPlanilla && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={closePopup}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "20px",
//               borderRadius: "5px",
//               width: "80%",
//               maxWidth: "600px",
//             }}
//             onClick={(e) => e.stopPropagation()} // Evitar cerrar el popup si se hace clic dentro del modal
//           >
//             <h3>Detalles de la Planilla</h3>
//             <p><strong>Nombre:</strong> {selectedPlanilla.name}</p>
//             <p><strong>Fecha de creación:</strong> {new Date(selectedPlanilla.creationTime).toLocaleDateString()}</p>
//             <p><strong>Encargado:</strong> {selectedPlanilla.carer}</p>
//             <p><strong>Items Completados:</strong> {selectedPlanilla.spreadSheetCompletedItems.length}</p>
//             <button
//               onClick={closePopup}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#ff4d4d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MisDatos;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const MisDatos: React.FC = () => {
//   const [usuario, setUsuario] = useState<any>(null);
//   const [planillas, setPlanillas] = useState<any[]>([]);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const [selectedPlanilla, setSelectedPlanilla] = useState<any | null>(null);
//   const navigate = useNavigate();

//   // Función para obtener las planillas completadas del paciente
//   const obtenerPlanillasCompletadas = async (patientID: string, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` };

//       // Obtener planillas completadas del paciente
//       const { data: planillasData } = await axios.get(
//         `https://emmanuel.somee.com/api/v1/SpreadSheetCompleteds/GetByPacient/${patientID}`,
//         {
//           headers,
//         }
//       );

//       // Mostrar las planillas en consola para verificar la estructura
//       console.log("Planillas del paciente:", planillasData);

//       // Actualizar el estado de las planillas
//       setPlanillas(planillasData);

//       // Verificar si hay más registros (dependiendo de la respuesta)
//       setHasMore(planillasData.length === 5); // Este es solo un ejemplo, ajusta según la estructura de los datos
//     } catch (error) {
//       console.error("Error al obtener las planillas:", error);
//     }
//   };

//   // Función para obtener los datos del usuario
//   useEffect(() => {
//     const fetchDatos = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const patientID = localStorage.getItem("patientId");

//         if (!token || !patientID) {
//           console.error("Token o patientId no encontrado en localStorage");
//           navigate("/"); // Redirigir al inicio de sesión
//           return;
//         }

//         // Obtener datos del usuario
//         const headers = { Authorization: `Bearer ${token}` };
//         const { data: usuarioData } = await axios.get(
//           `https://emmanuel.somee.com/api/v1/users/${patientID}`,
//           { headers }
//         );
//         setUsuario(usuarioData);

//         // Obtener las planillas completadas
//         await obtenerPlanillasCompletadas(patientID, token);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };

//     fetchDatos();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientId");
//     navigate("/"); // Redirige a la página raíz
//   };



//   // Función para abrir el popup con los detalles de una planilla
//   const handlePlanillaClick = (planilla: any) => {
//     setSelectedPlanilla(planilla);
//   };

//   // Función para cerrar el popup
//   const closePopup = () => {
//     setSelectedPlanilla(null);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#ff4d4d",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div style={{ border: "2px solid black", padding: "20px", marginBottom: "20px" }}>
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p>Nombre: {usuario.firstName} {usuario.lastName}</p>
//             <p>Email: {usuario.email}</p>
//             <p>Fecha de nacimiento: {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p>Dirección: {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p>Teléfono: {usuario.phoneNumber}</p>
//             <p>Observaciones: {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div style={{ border: "2px solid black", padding: "20px" }}>
//         <h2>Planillas del Paciente</h2>

//         {/* Tabla */}
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Fecha</th>
//               <th style={{ border: "1px solid black", padding: "10px" }}>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillas.length > 0 ? (
//               planillas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                     }}
//                   >
//                     {new Date(planilla.creationTime).toLocaleDateString()}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       padding: "10px",
//                       textAlign: "center",
//                       cursor: "default",  // Sin cursor de enlace
//                     }}
//                     onClick={() => handlePlanillaClick(planilla)}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan={2}
//                   style={{
//                     border: "1px solid black",
//                     padding: "10px",
//                     textAlign: "center",
//                   }}
//                 >
//                   No hay planillas disponibles.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
//             Cargar más
//           </button>
//         )}
//       </div>

//       {/* Popup con la información de la planilla seleccionada */}
//       {selectedPlanilla && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={closePopup}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "20px",
//               borderRadius: "5px",
//               width: "80%",
//               maxWidth: "600px",
//             }}
//             onClick={(e) => e.stopPropagation()} // Evitar cerrar el popup si se hace clic dentro del modal
//           >
//             <h3>Detalles de la Planilla</h3>
//             <p style={{ color: "black" }}><strong>Nombre:</strong> {selectedPlanilla.name}</p>
//             <p style={{ color: "black" }}><strong>Fecha de creación:</strong> {new Date(selectedPlanilla.creationTime).toLocaleDateString()}</p>
//             <p style={{ color: "black" }}><strong>Encargado:</strong> {selectedPlanilla.carer}</p>
//             <p style={{ color: "black" }}><strong>Items Completados:</strong> {selectedPlanilla.spreadSheetCompletedItems.length}</p>
//             <button
//               onClick={closePopup}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#ff4d4d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MisDatos;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./MisDatos.css"; // Importamos el archivo CSS

const MisDatos: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const [planillas, setPlanillas] = useState<any[]>([]);

  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedPlanilla, setSelectedPlanilla] = useState<any | null>(null);
  const navigate = useNavigate();

  // Función para obtener las planillas completadas del paciente
  const obtenerPlanillasCompletadas = async (patientID: string, token: string) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };

      // Obtener planillas completadas del paciente
      const { data: planillasData } = await axios.get(
        `https://emmanuel.somee.com/api/v1/SpreadSheetCompleteds/GetByPacient/${patientID}`,
        {
          headers,
        }
      );

      // Mostrar las planillas en consola para verificar la estructura
      console.log("Planillas del paciente:", planillasData);

      // Actualizar el estado de las planillas
      setPlanillas(planillasData);

      // Verificar si hay más registros (dependiendo de la respuesta)
      setHasMore(planillasData.length === 5); // Este es solo un ejemplo, ajusta según la estructura de los datos
    } catch (error) {
      console.error("Error al obtener las planillas:", error);
    }
  };

  // Función para obtener los datos del usuario
  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const token = localStorage.getItem("token");
        const patientID = localStorage.getItem("patientId");

        if (!token || !patientID) {
          console.error("Token o patientId no encontrado en localStorage");
          navigate("/"); // Redirigir al inicio de sesión
          return;
        }

        // Obtener datos del usuario
        const headers = { Authorization: `Bearer ${token}` };
        const { data: usuarioData } = await axios.get(
          `https://emmanuel.somee.com/api/v1/users/${patientID}`,
          { headers }
        );
        setUsuario(usuarioData);

        // Obtener las planillas completadas
        await obtenerPlanillasCompletadas(patientID, token);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchDatos();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("patientId");
    navigate("/"); // Redirige a la página raíz
  };



  // Función para abrir el popup con los detalles de una planilla
  const handlePlanillaClick = (planilla: any) => {
    setSelectedPlanilla(planilla);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setSelectedPlanilla(null);
  };

  return (
    <div className="container">
      {/* Botón Cerrar Sesión */}
      <button
        onClick={handleLogout}
        className="logout-button"
      >
        Cerrar Sesión
      </button>

      {/* Sección de Datos del Paciente */}
      <div className="patient-data">
        <h2>Datos del paciente</h2>
        {usuario ? (
          <>
            <p><strong>Nombre:</strong> {usuario.firstName} {usuario.lastName}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Fecha de nacimiento:</strong> {new Date(usuario.birthDate).toLocaleDateString()}</p>
            <p><strong>Dirección:</strong> {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
            <p><strong>Teléfono:</strong> {usuario.phoneNumber}</p>
            <p><strong>Observaciones:</strong> {usuario.observations}</p>
          </>
        ) : (
          <p>Cargando datos del paciente...</p>
        )}
      </div>

      {/* Sección de Tabla con Planillas */}
      <div className="planillas-section">
        <h2>Planillas del Paciente</h2>

        {/* Tabla */}
        <table className="planillas-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {planillas.length > 0 ? (
              planillas.map((planilla, index) => (
                <tr key={index}>
                  <td>{new Date(planilla.creationTime).toLocaleDateString()}</td>
                  <td
                    className="planilla-title"
                    onClick={() => handlePlanillaClick(planilla)}
                  >
                    {planilla.name}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No hay planillas disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Botón de Paginación */}
        {hasMore && (
          <button className="load-more-button">
            Cargar más
          </button>
        )}
      </div>

      {/* Popup con la información de la planilla seleccionada */}
      {selectedPlanilla && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="popup-title">Detalles de la Planilla</h3>
            <p><strong>Nombre:</strong> {selectedPlanilla.name}</p>
            <p><strong>Fecha de creación:</strong> {new Date(selectedPlanilla.creationTime).toLocaleDateString()}</p>
            <p><strong>Encargado:</strong> {selectedPlanilla.carer}</p>
            <p><strong>Items Completados:</strong> {selectedPlanilla.spreadSheetCompletedItems.length}</p>
            <button onClick={closePopup} className="close-popup-button">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MisDatos;
