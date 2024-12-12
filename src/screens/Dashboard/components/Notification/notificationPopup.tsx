// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './notificationPopup.css';

// interface Notification {
//   id: number;
//   observations: string;
//   notificationTime: string;
//   senderId: number;
//   receiverId: number;
//   status: string;
//   result: string;
//   resultTime: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const NotificationPopup: React.FC = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [users, setUsers] = useState<Record<number, User>>({});
//   const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
//   const [resolution, setResolution] = useState<number | null>(null);

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

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const notifications = Array.isArray(response.data) ? response.data : [];
//         setNotifications(notifications);

//         notifications.forEach((notification) => {
//           fetchUser(notification.senderId);
//           fetchUser(notification.receiverId);
//         });
//       } catch (error) {
//         console.error('Error al obtener notificaciones:', error);
//         setNotifications([]);
//       }
//     };

//     fetchNotifications();

//     const intervalId = setInterval(fetchNotifications, 10000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleResolveClick = (notification: Notification) => {
//     setSelectedNotification(notification);
//     setResolution(null); // Reiniciar la resolución seleccionada
//   };

//   const handleSaveResolution = async () => {
//     if (!selectedNotification || resolution === null) {
//       alert('Por favor selecciona una resolución.');
//       return;
//     }

//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const data = {
//         id: selectedNotification.id,
//         status: 'Pendiente', // Este valor se mantiene como "Pendiente"
//         result: resolution,  // Se envía el número correspondiente
//       };

//       await axios.put('https://emmanuel.somee.com/api/v1/UserNotifications', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert('Notificación resuelta correctamente.');
//       setSelectedNotification(null); // Cerrar el modal de resolución
//       setNotifications((prev) =>
//         prev.map((n) =>
//           n.id === selectedNotification.id ? { ...n, result: String(resolution) } : n
//         )
//       );
//     } catch (error) {
//       console.error('Error al guardar la resolución:', error);
//       alert('Hubo un error al guardar la resolución.');
//     }
//   };

//   return (
//     <div className="notification-popup">
//       <h3>Notificaciones</h3>

//       {selectedNotification ? (
//         <div className="resolve-notification">
//           <h4>Resolver Notificación</h4>
//           <div>
//             <strong>Asistente:</strong>{' '}
//             {users[selectedNotification.senderId]
//               ? `${users[selectedNotification.senderId].firstName} ${users[selectedNotification.senderId].lastName}`
//               : 'Cargando...'}
//           </div>
//           <div>
//             <strong>Beneficiario:</strong>{' '}
//             {users[selectedNotification.receiverId]
//               ? `${users[selectedNotification.receiverId].firstName} ${users[selectedNotification.receiverId].lastName}`
//               : 'Cargando...'}
//           </div>
//           <div>
//             <strong>Observación:</strong> {selectedNotification.observations}
//           </div>
//           <div>
//             <label>
//               <strong>Estado:</strong>
//               <select
//                 value={resolution ?? ''}
//                 onChange={(e) => setResolution(Number(e.target.value))}
//               >
//                 <option value={0} disabled>
//                   Selecciona una opción
//                 </option>
//                 <option value={1}>Resuelto</option>
//                 <option value={2}>Cancelado</option>
//               </select>
//             </label>
//           </div>
//           <button onClick={handleSaveResolution}>Guardar</button>
//           <button onClick={() => setSelectedNotification(null)}>Cerrar</button>
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Fecha</th>
//               <th>Asistente</th>
//               <th>Beneficiario</th>
//               <th>Observación</th>
//               <th>Resolver</th>
//             </tr>
//           </thead>
//           <tbody>
//             {notifications.map((notification) => (
//               <tr key={notification.id}>
//                 <td>{new Date(notification.notificationTime).toLocaleString()}</td>
//                 <td>
//                   {users[notification.senderId]
//                     ? `${users[notification.senderId].firstName} ${users[notification.senderId].lastName}`
//                     : 'Cargando...'}
//                 </td>
//                 <td>
//                   {users[notification.receiverId]
//                     ? `${users[notification.receiverId].firstName} ${users[notification.receiverId].lastName}`
//                     : 'Cargando...'}
//                 </td>
//                 <td>{notification.observations}</td>
//                 <td>
//                   <button onClick={() => handleResolveClick(notification)}>Resolver</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default NotificationPopup;














// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './notificationPopup.css';
// import { BiSpreadsheet } from "react-icons/bi"; 

// interface Notification {
//   id: number;
//   observations: string;
//   notificationTime: string;
//   senderId: number;
//   receiverId: number;
//   status: string;
//   result: string;
//   resultTime: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const NotificationPopup: React.FC = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [users, setUsers] = useState<Record<number, User>>({});
//   const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
//   const [resolution, setResolution] = useState<number | null>(null);

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

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const notifications = Array.isArray(response.data) ? response.data : [];
//         setNotifications(notifications);

//         notifications.forEach((notification) => {
//           fetchUser(notification.senderId);
//           fetchUser(notification.receiverId);
//         });
//       } catch (error) {
//         console.error('Error al obtener notificaciones:', error);
//         setNotifications([]);
//       }
//     };

//     fetchNotifications();

//     const intervalId = setInterval(fetchNotifications, 10000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleResolveClick = (notification: Notification) => {
//     setSelectedNotification(notification);
//     setResolution(null);
//   };

//   const handleSaveResolution = async () => {
//     if (!selectedNotification || resolution === null) {
//       alert('Por favor selecciona una resolución.');
//       return;
//     }

//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const data = {
//         id: selectedNotification.id,
//         status: 'Pendiente',
//         result: resolution,
//       };

//       await axios.put('https://emmanuel.somee.com/api/v1/UserNotifications', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert('Notificación resuelta correctamente.');
//       setSelectedNotification(null);
//       setNotifications((prev) =>
//         prev.map((n) =>
//           n.id === selectedNotification.id ? { ...n, result: String(resolution) } : n
//         )
//       );
//     } catch (error) {
//       console.error('Error al guardar la resolución:', error);
//       alert('Hubo un error al guardar la resolución.');
//     }
//   };

//   return (
//     <div className='contai'>
//       <h3 className='titulo-noti'><BiSpreadsheet className='logonoti'/>Notificaciones</h3>

//       {selectedNotification ? (
//         <div className="resolve-notification">
//           <h4>Resolver Notificación</h4>
//           <div className='textoss'>
//             <strong className='text-popu'>Asistente:</strong>{' '}
//             {users[selectedNotification.senderId]
//               ? `${users[selectedNotification.senderId].firstName} ${users[selectedNotification.senderId].lastName}`
//               : 'Cargando...'}
//           </div>
//           <div className='textoss'>
//             <strong className='text-popu'>Beneficiario:</strong>{' '}
//             {users[selectedNotification.receiverId]
//               ? `${users[selectedNotification.receiverId].firstName} ${users[selectedNotification.receiverId].lastName}`
//               : 'Cargando...'}
//           </div>
//           <div className='textoss'>
//             <strong className='text-popu'>Observación:</strong> {selectedNotification.observations}
//           </div>
//           <div>
//             <label>
//               <strong>Estado:</strong>
//               <select
//                 value={resolution ?? ''}
//                 onChange={(e) => setResolution(Number(e.target.value))}
//               >
//                 <option value={0} disabled>
//                   Selecciona una opción
//                 </option>
//                 <option value={1}>Resuelto</option>
//                 <option value={2}>Cancelado</option>
//               </select>
//             </label>
//           </div>
//           <button onClick={handleSaveResolution}>Guardar</button>
//           <button onClick={() => setSelectedNotification(null)}>Cerrar</button>
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Fecha</th>
//                 <th>Asistente</th>
//                 <th>Beneficiario</th>
//                 <th>Observación</th>
//                 <th>Resolver</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notifications.map((notification) => (
//                 <tr key={notification.id}>
//                   <td>{new Date(notification.notificationTime).toLocaleString()}</td>
//                   <td>
//                     {users[notification.senderId]
//                       ? `${users[notification.senderId].firstName} ${users[notification.senderId].lastName}`
//                       : 'Cargando...'}
//                   </td>
//                   <td>
//                     {users[notification.receiverId]
//                       ? `${users[notification.receiverId].firstName} ${users[notification.receiverId].lastName}`
//                       : 'Cargando...'}
//                   </td>
//                   <td>{notification.observations}</td>
//                   <td>
//                     <button onClick={() => handleResolveClick(notification)}>Resolver</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationPopup;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './notificationPopup.css';
// import { BiSpreadsheet } from "react-icons/bi"; 

// interface Notification {
//   id: number;
//   observations: string;
//   notificationTime: string;
//   senderId: number;
//   receiverId: number;
//   status: string;
//   result: string;
//   resultTime: string;
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// const NotificationPopup: React.FC = () => {
//   const [notifications, setNotifications] = useState<Notification[]>([]);
//   const [users, setUsers] = useState<Record<number, User>>({});
//   const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
//   const [resolution, setResolution] = useState<number | null>(null);

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

//   useEffect(() => {
//     const fetchNotifications = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;

//       try {
//         const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const notifications = Array.isArray(response.data) ? response.data : [];
//         setNotifications(notifications);

//         notifications.forEach((notification) => {
//           fetchUser(notification.senderId);
//           fetchUser(notification.receiverId);
//         });
//       } catch (error) {
//         console.error('Error al obtener notificaciones:', error);
//         setNotifications([]);
//       }
//     };

//     fetchNotifications();

//     const intervalId = setInterval(fetchNotifications, 10000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleResolveClick = (notification: Notification) => {
//     setSelectedNotification(notification);
//     setResolution(null);
//   };

//   const handleSaveResolution = async () => {
//     if (!selectedNotification || resolution === null) {
//       alert('Por favor selecciona una resolución.');
//       return;
//     }

//     const token = localStorage.getItem('token');
//     if (!token) return;

//     try {
//       const data = {
//         id: selectedNotification.id,
//         status: 'Pendiente',
//         result: resolution,
//       };

//       await axios.put('https://emmanuel.somee.com/api/v1/UserNotifications', data, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert('Notificación resuelta correctamente.');
//       setSelectedNotification(null);
//       setNotifications((prev) =>
//         prev.map((n) =>
//           n.id === selectedNotification.id ? { ...n, result: String(resolution) } : n
//         )
//       );
//     } catch (error) {
//       console.error('Error al guardar la resolución:', error);
//       alert('Hubo un error al guardar la resolución.');
//     }
//   };

//   return (
//     <div className='contai'>
//       <h3 className='titulo-noti'><BiSpreadsheet className='logonoti' />Notificaciones</h3>

//       {selectedNotification ? (
//         <div className="resolve-notification">
//           <h4>Resolver Notificación</h4>
//           <div className='textoss'>
//             <strong className='text-popu'>Beneficiario:</strong>{' '}
//             {users[selectedNotification.receiverId]
//               ? `${users[selectedNotification.receiverId].firstName} ${users[selectedNotification.receiverId].lastName}`
//               : 'Cargando...'}
//           </div>
//           <div className='textoss'>
//             <strong className='text-popu'>Observación:</strong> {selectedNotification.observations}
//           </div>
//           <div>
//             <label>
//               <strong>Estado:</strong>
//               <select
//                 value={resolution ?? ''}
//                 onChange={(e) => setResolution(Number(e.target.value))}
//               >
//                 <option value={0} disabled>
//                   Selecciona una opción
//                 </option>
//                 <option value={1}>Resuelto</option>
//                 <option value={2}>Cancelado</option>
//               </select>
//             </label>
//           </div>
//           <button onClick={handleSaveResolution}>Guardar</button>
//           <button onClick={() => setSelectedNotification(null)}>Cerrar</button>
//         </div>
//       ) : (
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>Fecha</th>
//                 <th>Beneficiario</th>
//                 <th>Observación</th>
//                 <th>Resolver</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notifications.map((notification) => (
//                 <tr key={notification.id}>
//                   <td>{new Date(notification.notificationTime).toLocaleString()}</td>
//                   <td>
//                     {users[notification.receiverId]
//                       ? `${users[notification.receiverId].firstName} ${users[notification.receiverId].lastName}`
//                       : 'Cargando...'}
//                   </td>
//                   <td>{notification.observations}</td>
//                   <td>
//                     <button onClick={() => handleResolveClick(notification)}>Resolver</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationPopup;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './notificationPopup.css';
import { BiSpreadsheet } from "react-icons/bi"; 

interface Notification {
  id: number;
  observations: string;
  notificationTime: string;
  senderId: number;
  receiverId: number;
  status: string;
  result: string;
  resultTime: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const NotificationPopup: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({});
  const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
  const [resolution, setResolution] = useState<string>('');  // Cambié a string para que sea texto libre
  const [status, setStatus] = useState<'Resuelto' | 'Cancelado' | ''>('');  // Establecí un tipo de estado limitado

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

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await axios.get('https://emmanuel.somee.com/api/v1/UserNotifications', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const notifications = Array.isArray(response.data) ? response.data : [];
        setNotifications(notifications);

        notifications.forEach((notification) => {
          fetchUser(notification.senderId);
          fetchUser(notification.receiverId);
        });
      } catch (error) {
        console.error('Error al obtener notificaciones:', error);
        setNotifications([]);
      }
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleResolveClick = (notification: Notification) => {
    setSelectedNotification(notification);
    setResolution(''); // Reiniciar el campo de resolución
    setStatus(''); // Reiniciar el estado
  };

  const handleSaveResolution = async () => {
    if (!selectedNotification || resolution === '' || status === '') {
      alert('Por favor selecciona una resolución y un estado.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const data = {
        id: selectedNotification.id,
        status, // Aquí pasamos el estado "Resuelto" o "Cancelado"
        result: resolution, // Aquí pasamos el texto libre para el resultado
      };

      await axios.put('https://emmanuel.somee.com/api/v1/UserNotifications', data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Notificación resuelta correctamente.');
      setSelectedNotification(null);
      setNotifications((prev) =>
        prev.map((n) =>
          n.id === selectedNotification.id ? { ...n, result: resolution, status } : n
        )
      );
    } catch (error) {
      console.error('Error al guardar la resolución:', error);
      alert('Hubo un error al guardar la resolución.');
    }
  };

  return (
    <div className='contai'>
      <h3 className='titulo-noti'><BiSpreadsheet className='logonoti' />Notificaciones</h3>

      {selectedNotification ? (
        <div className="resolve-notification">
          <h4>Resolver Notificación</h4>
          <div className='textoss'>
            <strong className='text-popu'>Beneficiario:</strong>{' '}
            {users[selectedNotification.receiverId]
              ? `${users[selectedNotification.receiverId].firstName} ${users[selectedNotification.receiverId].lastName}`
              : 'Cargando...'}
          </div>
          <div className='textoss'>
            <strong className='text-popu'>Observación:</strong> {selectedNotification.observations}
          </div>
          <div>
            <label>
              <strong>Estado:</strong>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as 'Resuelto' | 'Cancelado')}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="Resuelto">Resuelto</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <strong>Resultado:</strong>
              <textarea
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                placeholder="Escribe el resultado"
              />
            </label>
          </div>
          <button onClick={handleSaveResolution}>Guardar</button>
          <button onClick={() => setSelectedNotification(null)}>Cerrar</button>
        </div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Beneficiario</th>
                <th>Observación</th>
                <th>Resolver</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification.id}>
                  <td>{new Date(notification.notificationTime).toLocaleString()}</td>
                  <td>
                    {users[notification.receiverId]
                      ? `${users[notification.receiverId].firstName} ${users[notification.receiverId].lastName}`
                      : 'Cargando...'}
                  </td>
                  <td>{notification.observations}</td>
                  <td>
                    <button onClick={() => handleResolveClick(notification)}>Resolver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NotificationPopup;
