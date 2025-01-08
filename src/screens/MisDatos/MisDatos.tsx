
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











import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MisDatos: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const [planillas, setPlanillas] = useState<any[]>([]);
  const [fechaFiltro, setFechaFiltro] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No se encontró el token en localStorage");
          return;
        }

        const headers = { Authorization: `Bearer ${token}` };

        // Obtener usuario logueado
        const { data: userLogged } = await axios.get(
          "https://emmanuel.somee.com/api/v1/users/getuserlogged",
          { headers }
        );
        console.log("Datos del usuario logueado:", userLogged);

        const { userName, role } = userLogged;

        if (!userName || !role) {
          console.error("No se encontró el userName o role del usuario logueado");
          return;
        }

        // Obtener usuarios por rol
        const { data: usuariosByRol } = await axios.get(
          `https://emmanuel.somee.com/api/v1/Users/GetbyRol/${role}`,
          { headers }
        );
        console.log("Usuarios obtenidos por rol:", usuariosByRol);

        // Filtrar usuario por userName
        const usuarioFiltrado = usuariosByRol.find(
          (usuario: any) => usuario.userName === userName
        );

        if (!usuarioFiltrado || !usuarioFiltrado.id) {
          console.error("No se encontró el usuario correspondiente o su ID");
          return;
        }

        const usuarioId = usuarioFiltrado.id;
        console.log("ID del usuario obtenido:", usuarioId);

        // Obtener datos del usuario por ID
        const { data: usuarioCompleto } = await axios.get(
          `https://emmanuel.somee.com/api/v1/Users/${usuarioId}`,
          { headers }
        );
        console.log("Datos completos del usuario:", usuarioCompleto);

        const patientID = usuarioCompleto.patientID;
        if (!patientID) {
          console.error("No se encontró el patientID en los datos del usuario");
          return;
        }
        console.log("PatientID obtenido:", patientID);

        // Obtener datos del paciente
        const { data: usuarioData } = await axios.get(
          `https://emmanuel.somee.com/api/v1/users/${patientID}`,
          { headers }
        );
        console.log("Datos del paciente:", usuarioData);
        setUsuario(usuarioData);

        // Obtener planillas del usuario
        const { data: planillasData } = await axios.get(
          `https://emmanuel.somee.com/api/v1/Spreadsheetcompleteds/${patientID}`,
          { headers }
        );
        console.log("Planillas del paciente:", planillasData);
        setPlanillas(planillasData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchDatos();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirige a la página raíz
  };

  // Filtrar planillas por fecha
  const planillasFiltradas = fechaFiltro
    ? planillas.filter((planilla) => planilla.fecha.startsWith(fechaFiltro))
    : planillas;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", position: "relative" }}>
      {/* Botón Cerrar Sesión */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cerrar Sesión
      </button>

      {/* Sección de Datos del Paciente */}
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h2>Datos del paciente</h2>
        {usuario ? (
          <>
            <p>Nombre: {usuario.nombre}</p>
            <p>Edad: {usuario.edad}</p>
            <p>Diagnóstico: {usuario.diagnostico}</p>
          </>
        ) : (
          <p>Cargando datos del paciente...</p>
        )}
      </div>

      {/* Sección de Tabla con Planillas */}
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <h2>Planillas del Paciente</h2>

        {/* Filtro por Fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fechaFiltro">Filtrar por fecha: </label>
          <input
            type="date"
            id="fechaFiltro"
            value={fechaFiltro}
            onChange={(e) => setFechaFiltro(e.target.value)}
          />
        </div>

        {/* Tabla */}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Fecha
              </th>
              <th style={{ border: "1px solid black", padding: "10px" }}>
                Detalle
              </th>
            </tr>
          </thead>
          <tbody>
            {planillasFiltradas.length > 0 ? (
              planillasFiltradas.map((planilla, index) => (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    {planilla.fecha}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    {planilla.detalle}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  No hay datos disponibles para la fecha seleccionada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MisDatos;
