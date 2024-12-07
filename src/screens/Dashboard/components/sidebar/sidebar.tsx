// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import './sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const handleProfileRedirect = () => {
//     navigate(`/dashboard/profile`);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         <FaBars />
//       </button>
//       {isOpen && (
//         <>
//           <button className="profile-button" onClick={handleProfileRedirect}>
//             <h2 className='profile-text'>{username}</h2>
//           </button>

//           <ul className='lista-side'>
//             <li>
//             <Link to="inicio">Inicio</Link>
//             </li>
//             <li>
//               <Link to="usuarios">Usuarios</Link>
//             </li>
//             <li>
//               <Link to="planillas">Planillas</Link>
//             </li>
//           </ul>

//           <button onClick={handleLogout} className="logout-button">
//             Cerrar Sesión
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;









// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
// import './sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation(); // Obtén la ruta actual

//   // Oculta el sidebar si la ruta es '/dashboard/inicio'


//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const handleProfileRedirect = () => {
//     toggleSidebar(); // Toggle sidebar when profile button is clicked
//     navigate(`/dashboard/profile`);
//   };

//   const handleLinkClick = () => {
//     toggleSidebar(); // Toggle sidebar when any link is clicked
//   };

//   if (location.pathname === '/dashboard/inicio') {
//     return null;
//   }

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         <FaBars />
//       </button>
//       {isOpen && (
//         <>
//           <button className="profile-button" onClick={handleProfileRedirect}>
//             <h2 className='profile-text'>{username}</h2>
//           </button>

//           <ul className='lista-side'>
//             <li>
//               <Link to="inicio" onClick={handleLinkClick}>Inicio</Link>
//             </li>
//             <li>
//               <Link to="usuarios" onClick={handleLinkClick}>Usuarios</Link>
//             </li>
//             <li>
//               <Link to="planillas" onClick={handleLinkClick}>Planillas</Link>
//             </li>
//             <li>
//               <Link to="turnos" onClick={handleLinkClick}>Turnos</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Auditoría Planillas</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Notificaciónes</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Reportes</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Reloj (Fichadas)</Link>
//             </li>
//           </ul>

//           <button onClick={handleLogout} className="logout-button">
//             Cerrar Sesión
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
















// import { useState, useEffect } from 'react'; 
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars, FaBell } from 'react-icons/fa';
// import axios from 'axios';
// import './sidebar.css';
// import NotificationPopup from '../Notification/NotificationPopup.tsx';

// // interface Notification {
// //   id: number;
// //   observations: string;
// //   notificationTime: string;
// //   senderId: number;
// //   receiverId: number;
// //   status: string;
// //   result: string;
// //   resultTime: string;
// // }

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState('');
//   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   // useEffect(() => {
//   //   const fetchNotifications = async () => {
//   //     const token = localStorage.getItem('token');
//   //     if (!token) return; // Salir si no hay token
  
//   //     try {
//   //       const response = await axios.get('/api/v1/UserNotifications', {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       });
//   //       setNotifications(Array.isArray(response.data) ? response.data : []);
//   //     } catch (error) {
//   //       console.error('Error al obtener notificaciones:', error);
//   //       setNotifications([]);
//   //     }
//   //   };
  
//   //   fetchNotifications();
//   // }, []);
  

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const handleLinkClick = () => toggleSidebar();

//   if (location.pathname === '/dashboard/inicio') {
//     return null;
//   }

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         <FaBars />
//       </button>
//       {isOpen && (
//         <>
//           <div className="profile-container">
//           <Link className='profile-text' to="profile" onClick={handleLinkClick}>
//           <h2 className='prof-hov'>{username}</h2>
//           </Link>            
//           <FaBell className="notification-icon" onClick={toggleNotifications} />
//           </div>

//           <ul className='lista-side'>
//             <li>
//               <Link to="inicio" onClick={handleLinkClick}>Inicio</Link>
//             </li>
//             <li>
//               <Link to="usuarios" onClick={handleLinkClick}>Usuarios</Link>
//             </li>
//             <li>
//               <Link to="planillas" onClick={handleLinkClick}>Planillas</Link>
//             </li>
//             <li>
//               <Link to="turnos" onClick={handleLinkClick}>Turnos</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Auditoría Planillas</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Notificaciónes</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Reportes</Link>
//             </li>
//             <li>
//               <Link to="auditoria" onClick={handleLinkClick}>Reloj (Fichadas)</Link>
//             </li>
//           </ul>

//           <button onClick={handleLogout} className="logout-button">
//             Cerrar Sesión
//           </button>

//           {isNotificationsOpen && (
//             <div className="notification-popup">
//               <h3>Notificaciones</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Fecha</th>
//                     <th>Asistente</th>
//                     <th>Beneficiario</th>
//                     <th>Observación</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {notifications.map((notification) => (
//                     <tr key={notification.id}>
//                       <td>{new Date(notification.notificationTime).toLocaleString()}</td>
//                       <td>{notification.senderId}</td>
//                       <td>{notification.receiverId}</td>
//                       <td>{notification.observations}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button onClick={toggleNotifications}>Cerrar</button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;




















// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars, FaBell } from 'react-icons/fa';
// import axios from 'axios';
// import './sidebar.css';
// import NotificationPopup from "../Notification/notificationPopup";



// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username ] = useState('');
//   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(0); // Estado para la cuenta de notificaciones
//   const navigate = useNavigate();
//   const location = useLocation();

//   // useEffect(() => {
//   //   const storedUsername = localStorage.getItem('username');
//   //   if (storedUsername) {
//   //     setUsername(storedUsername);
//   //   }
//   // }, []);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const notifications = Array.isArray(response.data) ? response.data : [];
//         setNotificationCount(notifications.length); // Actualizamos el número de notificaciones
//       } catch (error) {
//         console.error('Error al obtener notificaciones:', error);
//       }
//     };

//     fetchNotifications();

//     // Refresca cada 10 segundos
//     const intervalId = setInterval(fetchNotifications, 10000);
//     return () => clearInterval(intervalId); // Limpiar intervalo al desmontar
//   }, []);



//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const handleLinkClick = () => toggleSidebar();

//   if (location.pathname === '/dashboard/inicio') {
//     return null;
//   }

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         <FaBars />
//       </button>
//       {isOpen && (
//         <>
//           <div className="profile-container">
//             <Link className='profile-text' to="profile" onClick={handleLinkClick}>
//               <h2 className='prof-hov'>{username}</h2>
//             </Link>            
//             <div className="notification-icon-container" onClick={toggleNotifications}>
//               <FaBell className="notification-icon" />
//               {notificationCount > 0 && (
//                 <span className="notification-bubble">{notificationCount}</span>
//               )}
//             </div>
//           </div>

          //   <ul className='lista-side'>
          //    <li>
          //      <Link to="inicio" onClick={handleLinkClick}>Inicio</Link>
          //    </li>
          //    <li>
          //      <Link to="usuarios" onClick={handleLinkClick}>Usuarios</Link>
          //    </li>
          //    <li>
          //      <Link to="planillas" onClick={handleLinkClick}>Planillas</Link>
          //    </li>
          //    <li>
          //      <Link to="turnos" onClick={handleLinkClick}>Turnos</Link>
          //    </li>
          //    <li>
          //      <Link to="auditoria" onClick={handleLinkClick}>Auditoría Planillas</Link>
          //    </li>
          //    <li>
          //      <Link to="auditoria" onClick={handleLinkClick}>Notificaciónes</Link>
          //    </li>
          //    <li>
          //      <Link to="auditoria" onClick={handleLinkClick}>Reportes</Link>
          //    </li>
          //    <li>
          //      <Link to="auditoria" onClick={handleLinkClick}>Reloj (Fichadas)</Link>
          //    </li>
          //  </ul>

//           <button onClick={handleLogout} className="logout-button">
//             Cerrar Sesión
//           </button>

//           <NotificationPopup isOpen={isNotificationsOpen} onClose={toggleNotifications} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;



















// import { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars, FaBell } from 'react-icons/fa';
// import axios from 'axios';
// import './sidebar.css';
// import NotificationPopup from "../Notification/notificationPopup";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [username, setUsername] = useState(''); // Corrección: Agregar `setUsername`
//   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(0);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Descomentar este useEffect para obtener el username de localStorage
//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const notifications = Array.isArray(response.data) ? response.data : [];
//         setNotificationCount(notifications.length);
//       } catch (error) {
//         console.error('Error al obtener notificaciones:', error);
//       }
//     };

//     fetchNotifications();

//     const intervalId = setInterval(fetchNotifications, 10000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/');
//   };

//   const handleLinkClick = () => toggleSidebar();

//   if (location.pathname === '/dashboard/inicio') {
//     return null;
//   }

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         <FaBars />
//       </button>
//       {isOpen && (
//         <>
//           <div className="profile-container">
//             <Link className='profile-text' to="profile" onClick={handleLinkClick}>
//               <h2 className='prof-hov'>{username}</h2>
//             </Link>
//             <div className="notification-icon-container" onClick={toggleNotifications}>
//               <FaBell className="notification-icon" />
//               {notificationCount > 0 && (
//                 <span className="notification-bubble">{notificationCount}</span>
//               )}
//             </div>
//           </div>

//           <ul className='lista-side'>
//              <li>
//                <Link to="inicio" onClick={handleLinkClick}>Inicio</Link>
//              </li>
//              <li>
//                <Link to="usuarios" onClick={handleLinkClick}>Usuarios</Link>
//              </li>
//              <li>
//                <Link to="planillas" onClick={handleLinkClick}>Planillas</Link>
//              </li>
//              <li>
//                <Link to="turnos" onClick={handleLinkClick}>Turnos</Link>
//              </li>
//              <li>
//                <Link to="auditoria" onClick={handleLinkClick}>Auditoría Planillas</Link>
//              </li>
//              <li>
//                <Link to="auditoria" onClick={handleLinkClick}>Notificaciónes</Link>
//              </li>
//              <li>
//                <Link to="auditoria" onClick={handleLinkClick}>Reportes</Link>
//              </li>
//              <li>
//                <Link to="auditoria" onClick={handleLinkClick}>Reloj (Fichadas)</Link>
//              </li>
//            </ul>

//           <button onClick={handleLogout} className="logout-button">
//             Cerrar Sesión
//           </button>

//           <NotificationPopup isOpen={isNotificationsOpen} onClose={toggleNotifications} />
//         </>
//       )}
//     </div>
//   );
// };

// export default Sidebar;













import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaBell } from 'react-icons/fa';
import axios from 'axios';
import './sidebar.css';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const notifications = Array.isArray(response.data) ? response.data : [];
        setNotificationCount(notifications.length);
      } catch (error) {
        console.error('Error al obtener notificaciones:', error);
      }
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (!isNotificationsOpen) {
      // Si se abren las notificaciones, se restablece el contador a 0
      setNotificationCount(0);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  const handleLinkClick = () => toggleSidebar();

  if (location.pathname === '/dashboard/inicio') {
    return null;
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      {isOpen && (
        <>
          <div className="profile-container">
            <Link className='profile-text' to="profile" onClick={handleLinkClick}>
              <h2 className='prof-hov'>{username}</h2>
            </Link>
            <div className="notification-icon-container" onClick={toggleNotifications}>
            <Link className='profile-text' to="notificaciones" onClick={handleLinkClick}>
              <FaBell className="notification-icon" />
              {notificationCount > 0 && (
                <span className="notification-bubble">{notificationCount}</span>
              )}
            </Link>
            </div>
          </div>

          <ul className='lista-side'>
            <li>
              <Link to="inicio" onClick={handleLinkClick}>Inicio</Link>
            </li>
            <li>
              <Link to="usuarios" onClick={handleLinkClick}>Usuarios</Link>
            </li>
            <li>
              <Link to="planillas" onClick={handleLinkClick}>Planillas</Link>
            </li>
            <li>
              <Link to="turnos" onClick={handleLinkClick}>Turnos</Link>
            </li>
            <li>
              <Link to="auditoria" onClick={handleLinkClick}>Auditoría Planillas</Link>
            </li>
            <li>
              <Link to="notificaciones" onClick={handleLinkClick}>Notificaciónes</Link>
            </li>
            <li>
              <Link to="reportes" onClick={handleLinkClick}>Reportes</Link>
            </li>
            <li>
              <Link to="relojfichada" onClick={handleLinkClick}>Reloj Fichada</Link>
            </li>
            {/* <li>
              <Link to="auditoria" onClick={handleLinkClick}>Reloj (Fichadas)</Link>
            </li> */}
          </ul>

          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
          
        </>
      )}
    </div>
  );
};

export default Sidebar;
