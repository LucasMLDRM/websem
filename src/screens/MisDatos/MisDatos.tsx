// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./MisDatos.css"; // Importamos el archivo CSS

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
//     <div className="container">
//       {/* Botón Cerrar Sesión */}
//       <button
//         onClick={handleLogout}
//         className="logout-button"
//       >
//         Cerrar Sesión
//       </button>

//       {/* Sección de Datos del Paciente */}
//       <div className="patient-data">
//         <h2>Datos del paciente</h2>
//         {usuario ? (
//           <>
//             <p><strong>Nombre:</strong> {usuario.firstName} {usuario.lastName}</p>
//             <p><strong>Email:</strong> {usuario.email}</p>
//             <p><strong>Fecha de nacimiento:</strong> {new Date(usuario.birthDate).toLocaleDateString()}</p>
//             <p><strong>Dirección:</strong> {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
//             <p><strong>Teléfono:</strong> {usuario.phoneNumber}</p>
//             <p><strong>Observaciones:</strong> {usuario.observations}</p>
//           </>
//         ) : (
//           <p>Cargando datos del paciente...</p>
//         )}
//       </div>

//       {/* Sección de Tabla con Planillas */}
//       <div className="planillas-section">
//         <h2>Planillas del Paciente</h2>

//         {/* Tabla */}
//         <table className="planillas-table">
//           <thead>
//             <tr>
//               <th>Fecha</th>
//               <th>Detalle</th>
//             </tr>
//           </thead>
//           <tbody>
//             {planillas.length > 0 ? (
//               planillas.map((planilla, index) => (
//                 <tr key={index}>
//                   <td>{new Date(planilla.creationTime).toLocaleDateString()}</td>
//                   <td
//                     className="planilla-title"
//                     onClick={() => handlePlanillaClick(planilla)}
//                   >
//                     {planilla.name}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={2}>No hay planillas disponibles.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* Botón de Paginación */}
//         {hasMore && (
//           <button className="load-more-button">
//             Cargar más
//           </button>
//         )}
//       </div>

//       {/* Popup con la información de la planilla seleccionada */}
//       {selectedPlanilla && (
//         <div className="popup-overlay" onClick={closePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <h3 className="popup-title">Detalles de la Planilla</h3>
//             <p><strong>Nombre:</strong> {selectedPlanilla.name}</p>
//             <p><strong>Fecha de creación:</strong> {new Date(selectedPlanilla.creationTime).toLocaleDateString()}</p>
//             <p><strong>Encargado:</strong> {selectedPlanilla.carer}</p>
//             <p><strong>Items Completados:</strong> {selectedPlanilla.spreadSheetCompletedItems.length}</p>
//             <button onClick={closePopup} className="close-popup-button">
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
import "./MisDatos.css";

const MisDatos: React.FC = () => {
  const [usuario, setUsuario] = useState<any>(null);
  const [planillas, setPlanillas] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedPlanilla, setSelectedPlanilla] = useState<any | null>(null);
  const [planillaDetalles, setPlanillaDetalles] = useState<any | null>(null); // Nueva variable para guardar los detalles de la planilla
  const navigate = useNavigate();

  // Función para obtener las planillas completadas del paciente
  const obtenerPlanillasCompletadas = async (patientID: string, token: string) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const { data: planillasData } = await axios.get(
        `https://emmanuel.somee.com/api/v1/SpreadSheetCompleteds/GetByPacient/${patientID}`,
        { headers }
      );

      setPlanillas(planillasData);
      setHasMore(planillasData.length === 5); // Ajustar según la estructura real
    } catch (error) {
      console.error("Error al obtener las planillas:", error);
    }
  };

  // Nueva función para obtener detalles de una planilla
  const obtenerDetallesPlanilla = async (spreadSheetId: number, token: string) => {
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const { data: detalles } = await axios.get(
        `https://emmanuel.somee.com/api/v1/SpreadsheetCompleteds/${spreadSheetId}`,
        { headers }
      );

      setPlanillaDetalles(detalles); // Guardar los detalles de la planilla en el estado
    } catch (error) {
      console.error("Error al obtener los detalles de la planilla:", error);
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

        const headers = { Authorization: `Bearer ${token}` };
        const { data: usuarioData } = await axios.get(
          `https://emmanuel.somee.com/api/v1/users/${patientID}`,
          { headers }
        );
        setUsuario(usuarioData);

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
    navigate("/");
  };

  // Función para abrir el popup y cargar los detalles de la planilla seleccionada
  const handlePlanillaClick = async (planilla: any) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token no encontrado en localStorage");
      return;
    }

    await obtenerDetallesPlanilla(planilla.spreadSheetId, token);
    setSelectedPlanilla(planilla); // Mostrar el popup con la planilla seleccionada
  };

  const closePopup = () => {
    setSelectedPlanilla(null);
    setPlanillaDetalles(null); // Limpiar los detalles cuando se cierre el popup
  };

  return (
    <div className="container">
      <button onClick={handleLogout} className="logout-button">
        Cerrar Sesión
      </button>

      <div className="patient-data">
        <h2 className="p-data">Datos del paciente</h2>
        {usuario ? (
          <>
            <p className="p-info"><strong>Nombre:</strong> {usuario.firstName} {usuario.lastName}</p>
            <p className="p-info"><strong>Email:</strong> {usuario.email}</p>
            <p className="p-info"><strong>Fecha de nacimiento:</strong> {new Date(usuario.birthDate).toLocaleDateString()}</p>
            <p className="p-info"><strong>Dirección:</strong> {usuario.address}, {usuario.location}, {usuario.province}, {usuario.postalCode}</p>
            <p className="p-info"><strong>Teléfono:</strong> {usuario.phoneNumber}</p>
            <p><strong>Observaciones:</strong> {usuario.observations}</p>
          </>
        ) : (
          <p>Cargando datos del paciente...</p>
        )}
      </div>

      <div className="planillas-section">
        <h2>Planillas del Paciente</h2>
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

        {hasMore && (
          <button className="load-more-button">
            Cargar más
          </button>
        )}
      </div>

      {/* Popup con los detalles de la planilla */}
      {selectedPlanilla && (
        <div className="popup-overlay" onClick={closePopup}>
          {/* <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="popup-title">Detalles de la Planilla</h3>
            {planillaDetalles ? (
              <>
                <p className="p-info"><strong>Nombre:</strong> {planillaDetalles.name}</p>
                <p className="p-info"><strong>Fecha de creación:</strong> {new Date(planillaDetalles.creationTime).toLocaleDateString()}</p>
                <p className="p-info"><strong>Encargado:</strong> {planillaDetalles.carerId}</p>
                <h4 className="p-items">Items Completados:</h4>
                <ul className="p-items">
                  {planillaDetalles.spreedSheetCompletedItems.map((item: any) => (
                    <li key={item.id}>
                      <strong>{item.text}:</strong> {item.answer}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Cargando detalles...</p>
            )}
            <button onClick={closePopup} className="close-popup-button">
              Cerrar
            </button>
          </div> */}

<div className="popup-content" onClick={(e) => e.stopPropagation()}>
  <h3 className="popup-title">Detalles de la Planilla</h3>
  {planillaDetalles ? (
    <>
      <p className="p-info">
        <strong>Nombre:</strong> {planillaDetalles.name}
      </p>
      <p className="p-info">
        <strong>Fecha de creación:</strong>{" "}
        {new Date(planillaDetalles.creationTime).toLocaleDateString()}
      </p>
      <p className="p-info">
        <strong >Encargado:</strong> {planillaDetalles.carerId}
      </p>
      <h4 className="p-items-title">Items Completados:</h4>
      <div className="p-items-container">
        {planillaDetalles.spreedSheetCompletedItems.map((item: any) => (
          <div className="item-box" key={item.id}>
            <p className="item-consigna">
              <strong>Consigna:</strong> {item.text}
            </p>
            <p className="item-respuesta">
              <strong>Respuesta:</strong> {item.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  ) : (
    <p>Cargando detalles...</p>
  )}
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
