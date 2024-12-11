// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../UserCard/UserCard';
// import { Role } from '../../hooks/types';
// import { User } from '../../hooks/User';
// import { Link } from 'react-router-dom';
// import './UserList.css';
// import UserHeaderComponent from '../UserHeaderComponent/UserHeaderComponent';

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [usersPerPage] = useState<number>(5);
//   const [fadeState, setFadeState] = useState<string>('fade-in');

//   useEffect(() => {
//     return () => {
//       localStorage.removeItem('userFilter');
//     };
//   }, []);
  

//   useEffect(() => {
//     localStorage.removeItem('selectedUser');
//     localStorage.removeItem('users');

//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found.');

//         const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const usersData = response.data;
//         const filteredUsers = usersData.filter(user => user.firstName !== 'Admin');
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//         localStorage.setItem('users', JSON.stringify(filteredUsers));

//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setRoles(rolesResponse.data);

//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = users.filter(user => user.firstName.toLowerCase().includes(lowercasedQuery));
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   };

//   const handleRoleChange = (role: string) => {
//     if (role === 'Todos') {
//       setFilteredUsers(users);
//     } else {
//       const filtered = users.filter(user => user.rolesName.includes(role));
//       setFilteredUsers(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setFadeState('fade-out');
//     setTimeout(() => {
//       setCurrentPage(pageNumber);
//       setFadeState('fade-in');
//     }, 300); // Temporizador para la transición
//   };

//   return (
//     <div className="user-list-container">
//       <div >
//       <div className="header-users">
//         <UserHeaderComponent roles={roles} onRoleChange={handleRoleChange} onSearch={handleSearch}/>
//        </div>
       
//       <div className='back'>
//       {loading ? (
//         <div className="cards-container loading">
//           <div className="spinner"></div>
//         </div>
//       ) : (
// <div className={`cards-container ${fadeState}`}>
// {currentUsers.map(user => (
//   <div key={user.id} className="user-card-wrapper">
//     <UserCard user={user} />
//   </div>
// ))}

// </div>

//       )}
      
//       </div>

//       <div className='btn-and-pag'>

//         <Link to="createuser" className="Link">
//           <h2 className="sect-txt">Agregar Usuario</h2>
//         </Link>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={currentPage === index + 1 ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
      

//       </div>

//       </div>
      
//     </div>
//   );
// };

// export default UserList;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../UserCard/UserCard';
// import { Role } from '../../hooks/types';
// import { User } from '../../hooks/User';
// import { Link } from 'react-router-dom';
// import './UserList.css';
// import UserHeaderComponent from '../UserHeaderComponent/UserHeaderComponent';

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [usersPerPage] = useState<number>(5);
//   const [fadeState, setFadeState] = useState<string>('fade-in');

//   useEffect(() => {
//     return () => {
//       localStorage.removeItem('userFilter');
//     };
//   }, []);

//   useEffect(() => {
//     localStorage.removeItem('selectedUser');
//     localStorage.removeItem('users');

//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('No token found.');

//         const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const usersData = response.data.filter(user => user.firstName !== 'Admin');
//         setUsers(usersData);

//         // Verifica el filtro basado en `userFilter`
//         const userFilter = localStorage.getItem('userFilter');
//         if (userFilter === 'pacientes') {
//           // Excluir usuarios con rol "Paciente"
//           const nonPatientUsers = usersData.filter(user => !user.rolesName.includes('Paciente'));
//           setFilteredUsers(nonPatientUsers);
//         } else {
//           setFilteredUsers(usersData);
//         }

//         localStorage.setItem('users', JSON.stringify(usersData));

//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setRoles(rolesResponse.data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = users.filter(user => user.firstName.toLowerCase().includes(lowercasedQuery));
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   };

//   const handleRoleChange = (role: string) => {
//     if (role === 'Todos') {
//       setFilteredUsers(users);
//     } else {
//       const filtered = users.filter(user => user.rolesName.includes(role));
//       setFilteredUsers(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setFadeState('fade-out');
//     setTimeout(() => {
//       setCurrentPage(pageNumber);
//       setFadeState('fade-in');
//     }, 300); // Temporizador para la transición
//   };

//   return (
//     <div className="user-list-container">
//       <div>
//         <div className="header-users">
//           <UserHeaderComponent roles={roles} onRoleChange={handleRoleChange} onSearch={handleSearch} />
//         </div>

//         <div className="back">
//           {loading ? (
//             <div className="cards-container loading">
//               <div className="spinner"></div>
//             </div>
//           ) : (
//             <div className={`cards-container ${fadeState}`}>
//               {currentUsers.map(user => (
//                 <div key={user.id} className="user-card-wrapper">
//                   <UserCard user={user} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="btn-and-pag">
//           <Link to="createuser" className="Link">
//             <h2 className="sect-txt">Agregar Usuario</h2>
//           </Link>

//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={currentPage === index + 1 ? 'active' : ''}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../UserCard/UserCard';
// import { Role } from '../../hooks/types';
// import { User } from '../../hooks/User';
// import { Link } from 'react-router-dom';
// import './UserList.css';
// import UserHeaderComponent from '../UserHeaderComponent/UserHeaderComponent';

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [usersPerPage] = useState<number>(5);
//   const [fadeState, setFadeState] = useState<string>('fade-in');

//   useEffect(() => {
//     return () => {
//       localStorage.removeItem('userFilter');
//     };
//   }, []);

//   useEffect(() => {
//     localStorage.removeItem('selectedUser');
//     localStorage.removeItem('users');

//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token no encontrado.');
//           throw new Error('No token found.');
//         }

//         console.log('Cargando usuarios...');
//         const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const usersData = response.data.filter(user => user.firstName !== 'Admin');
//         setUsers(usersData);

//         // Verifica el filtro basado en `userFilter`
//         const userFilter = localStorage.getItem('userFilter');
//         if (userFilter === 'pacientes') {
//           console.log('Aplicando filtro: excluyendo pacientes.');
//           const nonPatientUsers = usersData.filter(user => !user.rolesName.includes('Paciente'));
//           console.log('Usuarios filtrados:', nonPatientUsers);
//           setFilteredUsers(nonPatientUsers);
//         } else {
//           console.log('Sin filtro aplicado.');
//           setFilteredUsers(usersData);
//         }

//         localStorage.setItem('users', JSON.stringify(usersData));

//         console.log('Cargando roles...');
//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setRoles(rolesResponse.data);
//       } catch (error) {
//         console.error('Error al cargar los datos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = users.filter(user => user.firstName.toLowerCase().includes(lowercasedQuery));
//     console.log('Búsqueda realizada:', query, filtered);
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   };

//   const handleRoleChange = (role: string) => {
//     if (role === 'Todos') {
//       console.log('Filtro por rol: Todos');
//       setFilteredUsers(users);
//     } else {
//       console.log(`Filtro por rol: ${role}`);
//       const filtered = users.filter(user => user.rolesName.includes(role));
//       setFilteredUsers(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setFadeState('fade-out');
//     setTimeout(() => {
//       setCurrentPage(pageNumber);
//       setFadeState('fade-in');
//     }, 300); // Temporizador para la transición
//   };

//   return (
//     <div className="user-list-container">
//       <div>
//         <div className="header-users">
//           <UserHeaderComponent roles={roles} onRoleChange={handleRoleChange} onSearch={handleSearch} />
//         </div>

//         <div className="back">
//           {loading ? (
//             <div className="cards-container loading">
//               <div className="spinner"></div>
//             </div>
//           ) : (
//             <div className={`cards-container ${fadeState}`}>
//               {currentUsers.map(user => (
//                 <div key={user.id} className="user-card-wrapper">
//                   <UserCard user={user} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="btn-and-pag">
//           <Link to="createuser" className="Link">
//             <h2 className="sect-txt">Agregar Usuario</h2>
//           </Link>

//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={currentPage === index + 1 ? 'active' : ''}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../UserCard/UserCard';
// import { Role } from '../../hooks/types';
// import { User } from '../../hooks/User';
// import { Link, useLocation } from 'react-router-dom';
// import './UserList.css';
// import UserHeaderComponent from '../UserHeaderComponent/UserHeaderComponent';

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [usersPerPage] = useState<number>(5);
//   const [fadeState, setFadeState] = useState<string>('fade-in');
//   const location = useLocation(); // Hook para obtener la ruta actual

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token no encontrado.');
//           throw new Error('No token found.');
//         }

//         const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const usersData = response.data.filter(user => user.firstName !== 'Admin');
//         setUsers(usersData);

//         // Aplica el filtro solo si la ruta actual es "/pacientes"
//         if (location.pathname === '/pacientes') {
//           const patientUsers = usersData.filter(user => user.rolesName.includes('Paciente'));
//           setFilteredUsers(patientUsers);
//         } else {
//           setFilteredUsers(usersData);
//         }

//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setRoles(rolesResponse.data);
//       } catch (error) {
//         console.error('Error al cargar los datos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [location.pathname]); // Vuelve a ejecutar cuando cambie la ruta actual

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = users.filter(user => user.firstName.toLowerCase().includes(lowercasedQuery));
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   };

//   const handleRoleChange = (role: string) => {
//     if (role === 'Todos') {
//       setFilteredUsers(users);
//     } else {
//       const filtered = users.filter(user => user.rolesName.includes(role));
//       setFilteredUsers(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setFadeState('fade-out');
//     setTimeout(() => {
//       setCurrentPage(pageNumber);
//       setFadeState('fade-in');
//     }, 300);
//   };

//   return (
//     <div className="user-list-container">
//       <div>
//         <div className="header-users">
//           <UserHeaderComponent roles={roles} onRoleChange={handleRoleChange} onSearch={handleSearch} />
//         </div>

//         <div className="back">
//           {loading ? (
//             <div className="cards-container loading">
//               <div className="spinner"></div>
//             </div>
//           ) : (
//             <div className={`cards-container ${fadeState}`}>
//               {currentUsers.map(user => (
//                 <div key={user.id} className="user-card-wrapper">
//                   <UserCard user={user} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="btn-and-pag">
//           <Link to="createuser" className="Link">
//             <h2 className="sect-txt">Agregar Usuario</h2>
//           </Link>

//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={currentPage === index + 1 ? 'active' : ''}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../UserCard/UserCard';
// import { Role } from '../../hooks/types';
// import { User } from '../../hooks/User';
// import { Link, useLocation } from 'react-router-dom';
// import './UserList.css';
// import UserHeaderComponent from '../UserHeaderComponent/UserHeaderComponent';

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [usersPerPage] = useState<number>(5);
//   const [fadeState, setFadeState] = useState<string>('fade-in');
//   const location = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('Token no encontrado.');
//           throw new Error('No token found.');
//         }

//         const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const usersData = response.data.filter(user => user.firstName !== 'Admin');
//         setUsers(usersData);

//         // Aplica el filtro solo si la ruta actual es "/pacientes"
//         if (location.pathname === '/pacientes') {
//           const patientUsers = usersData.filter(user => user.rolesName.includes('Paciente'));
//           setFilteredUsers(patientUsers);
//         } else {
//           setFilteredUsers(usersData);
//         }

//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setRoles(rolesResponse.data);
//       } catch (error) {
//         console.error('Error al cargar los datos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     // Limpieza al desmontar el componente
//     return () => {
//       setFilteredUsers([]); // Restablece el estado filtrado
//     };
//   }, [location.pathname]); // Vuelve a ejecutar cuando cambie la ruta actual

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const filtered = users.filter(user => user.firstName.toLowerCase().includes(lowercasedQuery));
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   };

//   const handleRoleChange = (role: string) => {
//     if (role === 'Todos') {
//       setFilteredUsers(users);
//     } else {
//       const filtered = users.filter(user => user.rolesName.includes(role));
//       setFilteredUsers(filtered);
//     }
//     setCurrentPage(1);
//   };

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setFadeState('fade-out');
//     setTimeout(() => {
//       setCurrentPage(pageNumber);
//       setFadeState('fade-in');
//     }, 300);
//   };

//   return (
//     <div className="user-list-container">
//       <div>
//         <div className="header-users">
//           <UserHeaderComponent roles={roles} onRoleChange={handleRoleChange} onSearch={handleSearch} />
//         </div>

//         <div className="back">
//           {loading ? (
//             <div className="cards-container loading">
//               <div className="spinner"></div>
//             </div>
//           ) : (
//             <div className={`cards-container ${fadeState}`}>
//               {currentUsers.map(user => (
//                 <div key={user.id} className="user-card-wrapper">
//                   <UserCard user={user} />
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="btn-and-pag">
//           <Link to="createuser" className="Link">
//             <h2 className="sect-txt">Agregar Usuario</h2>
//           </Link>

//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={currentPage === index + 1 ? 'active' : ''}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import UserCard from '../UserCard/UserCard';
// import { Role } from '../../hooks/types';
// import { User } from '../../hooks/User';
// import { Link, useLocation } from 'react-router-dom';
// import UserHeaderComponent from '../UserHeaderComponent/UserHeaderComponent';
// import './UserList.css';

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage] = useState(5);
//   const location = useLocation();
//   const isPatientPage = location.pathname === '/pacientes';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) throw new Error('Token no encontrado.');

//         // Fetch users
//         const userResponse = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const fetchedUsers = userResponse.data.filter(user => user.firstName !== 'Admin');
//         setUsers(fetchedUsers);

//         // Apply default filter for patients if on "/pacientes"
//         const defaultFilteredUsers = isPatientPage
//           ? fetchedUsers.filter(user => user.rolesName.includes('Paciente'))
//           : fetchedUsers;
//         setFilteredUsers(defaultFilteredUsers);

//         // Fetch roles
//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRoles([{ id: 'all', name: 'Todos' }, ...rolesResponse.data]);
//       } catch (error) {
//         console.error('Error al cargar los datos:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [isPatientPage]);

//   const handleSearch = (query: string) => {
//     const lowercasedQuery = query.toLowerCase();
//     const result = users.filter(user =>
//       user.firstName.toLowerCase().includes(lowercasedQuery) ||
//       user.lastName.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredUsers(result);
//     setCurrentPage(1);
//   };

//   const handleRoleChange = (role: string) => {
//     const result =
//       role === 'Todos'
//         ? users
//         : users.filter(user => user.rolesName.includes(role));
//     setFilteredUsers(result);
//     setCurrentPage(1);
//   };

//   // Paginated users
//   const indexOfLastUser = currentPage * usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfLastUser - usersPerPage, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="user-list-container">
//       <UserHeaderComponent roles={roles} onRoleChange={handleRoleChange} onSearch={handleSearch} />

//       {loading ? (
//         <div className="loading-spinner">Cargando...</div>
//       ) : (
//         <>
//           <div className="cards-container">
//             {currentUsers.map(user => (
//               <UserCard key={user.id} user={user} />
//             ))}
//           </div>
//           <div className="pagination">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={currentPage === index + 1 ? 'active' : ''}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </>
//       )}

//       <Link to="createuser" className="add-user-button">
//         Agregar Usuario
//       </Link>
//     </div>
//   );
// };

// export default UserList;













// import './UserList.css';
// import React, { useState, useEffect } from "react";
// interface User {
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   paciente: string;
//   estado: string;
//   rol: string;
// }


// const UserList: React.FC = () => {
//   // Lista de usuarios hardcodeada
//   const usersData: User[] = [
//     { id: 1, nombre: "Juan", apellido: "Pérez", email: "juan@example.com", paciente: "Sí", estado: "Activo", rol: "Admin" },
//     { id: 2, nombre: "Ana", apellido: "Gómez", email: "ana@example.com", paciente: "No", estado: "Inactivo", rol: "Usuario" },
//     { id: 3, nombre: "Luis", apellido: "Martínez", email: "luis@example.com", paciente: "Sí", estado: "Activo", rol: "Usuario" },
//     { id: 4, nombre: "María", apellido: "López", email: "maria@example.com", paciente: "No", estado: "Inactivo", rol: "Admin" },
//     { id: 5, nombre: "Carlos", apellido: "González", email: "carlos@example.com", paciente: "Sí", estado: "Activo", rol: "Usuario" },
//     { id: 6, nombre: "Lucía", apellido: "Ramírez", email: "lucia@example.com", paciente: "No", estado: "Activo", rol: "Usuario" },
//     { id: 7, nombre: "Sofía", apellido: "Fernández", email: "sofia@example.com", paciente: "Sí", estado: "Inactivo", rol: "Admin" },
//     { id: 8, nombre: "Andrés", apellido: "Hernández", email: "andres@example.com", paciente: "Sí", estado: "Activo", rol: "Usuario" },
//     { id: 9, nombre: "Laura", apellido: "Morales", email: "laura@example.com", paciente: "No", estado: "Inactivo", rol: "Usuario" },
//     { id: 10, nombre: "Diego", apellido: "Vargas", email: "diego@example.com", paciente: "Sí", estado: "Activo", rol: "Admin" },
//   ];

//   // Estados
//   const [users] = useState<User[]>(usersData); // Lista completa de usuarios
//   const [filteredUsers, setFilteredUsers] = useState<User[]>(usersData); // Usuarios visibles
//   const [searchTerm, setSearchTerm] = useState<string>(""); // Término de búsqueda
//   const [selectedRole, setSelectedRole] = useState<string>(""); // Rol seleccionado
//   const [currentPage, setCurrentPage] = useState<number>(1); // Página actual
//   const usersPerPage = 5; // Número de usuarios por página

//   // Filtrar usuarios según búsqueda y rol
//   useEffect(() => {
//     let filtered = users;

//     // Filtrar por nombre
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filtrar por rol
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }

//     setFilteredUsers(filtered);
//     setCurrentPage(1); // Reiniciar a la primera página al filtrar
//   }, [searchTerm, selectedRole, users]);

//   // Obtener usuarios de la página actual
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   // Cambiar de página
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="controls">
//         {/* Barra de búsqueda */}
//         <input
//           type="text"
//           placeholder="Buscar por nombre"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         {/* Dropdown para filtrar por rol */}
//         <select
//           value={selectedRole}
//           onChange={(e) => setSelectedRole(e.target.value)}
//         >
//           <option value="">Todos los roles</option>
//           <option value="Admin">Admin</option>
//           <option value="Usuario">Usuario</option>
//         </select>
//       </div>

//       {/* Tarjetas de usuarios */}
//       <div className="user-list">
//         {currentUsers.map((user) => (
//           <div className="user-card" key={user.id}>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr" }}>
//               <span>{user.nombre}</span>
//               <span>{user.apellido}</span>
//               <span>{user.email}</span>
//               <span>{user.paciente}</span>
//               <span>{user.estado}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Paginación */}
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => paginate(page)}
//             className={page === currentPage ? "active" : ""}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;






// import React, { useState, useEffect } from "react";

// interface User {
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// const UserList: React.FC = () => {
//   // Lista de usuarios hardcodeada
//   const usersData: User[] = [
//     { id: 1, nombre: "Juan", apellido: "Pérez", email: "juan@example.com", rol: "Admin", estado: "Activo" },
//     { id: 2, nombre: "Ana", apellido: "Gómez", email: "ana@example.com", rol: "Usuario", estado: "Inactivo" },
//     { id: 3, nombre: "Luis", apellido: "Martínez", email: "luis@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 4, nombre: "María", apellido: "López", email: "maria@example.com", rol: "Admin", estado: "Inactivo" },
//     { id: 5, nombre: "Carlos", apellido: "González", email: "carlos@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 6, nombre: "Lucía", apellido: "Ramírez", email: "lucia@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 7, nombre: "Sofía", apellido: "Fernández", email: "sofia@example.com", rol: "Admin", estado: "Inactivo" },
//     { id: 8, nombre: "Andrés", apellido: "Hernández", email: "andres@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 9, nombre: "Laura", apellido: "Morales", email: "laura@example.com", rol: "Usuario", estado: "Inactivo" },
//     { id: 10, nombre: "Diego", apellido: "Vargas", email: "diego@example.com", rol: "Admin", estado: "Activo" },
//   ];

//   // Estados
//   const [users] = useState<User[]>(usersData);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>(usersData);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false); // Controla el dropdown de roles
//   const usersPerPage = 5;

//   // Filtrar usuarios según búsqueda y rol
//   useEffect(() => {
//     let filtered = users;

//     // Filtrar por nombre
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filtrar por rol
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }

//     setFilteredUsers(filtered);
//     setCurrentPage(1); // Reiniciar a la primera página al filtrar
//   }, [searchTerm, selectedRole, users]);

//   // Obtener usuarios de la página actual
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   // Cambiar de página
//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <div className="controls">
//         {/* Barra de búsqueda */}
//         <input
//           type="text"
//           placeholder="Buscar por nombre"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Tabla de usuarios */}
//       <div className="user-list">
//         <div className="table-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr" }}>
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <span
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//             style={{ position: "relative", cursor: "pointer" }}
//           >
//             Rol
//             {showRoleDropdown && (
//               <div className="dropdown" style={{
//                 position: "absolute",
//                 top: "100%",
//                 left: 0,
//                 backgroundColor: "white",
//                 border: "1px solid #ddd",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                 zIndex: 10,
//               }}>
//                 <div onClick={() => setSelectedRole("")} style={{ padding: "8px" }}>Todos</div>
//                 <div onClick={() => setSelectedRole("Admin")} style={{ padding: "8px" }}>Admin</div>
//                 <div onClick={() => setSelectedRole("Usuario")} style={{ padding: "8px" }}>Usuario</div>
//               </div>
//             )}
//           </span>
//           <span>Estado</span>
//         </div>

//         {/* Tarjetas de usuarios */}
//         {currentUsers.map((user) => (
//           <div className="user-card" key={user.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr 1fr 1fr", padding: "8px", borderBottom: "1px solid #ddd" }}>
//             <span>{user.nombre}</span>
//             <span>{user.apellido}</span>
//             <span>{user.email}</span>
//             <span>{user.rol}</span>
//             <span>{user.estado}</span>
//           </div>
//         ))}
//       </div>

//       {/* Paginación */}
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => paginate(page)}
//             className={page === currentPage ? "active" : ""}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;



// import React, { useState, useEffect } from "react";
// import "./UserList.css"; // Archivo CSS separado

// interface User {
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// const UserList: React.FC = () => {
//   const usersData: User[] = [
//     { id: 1, nombre: "Juan", apellido: "Pérez", email: "juan@example.com", rol: "Admin", estado: "Activo" },
//     { id: 2, nombre: "Ana", apellido: "Gómez", email: "ana@example.com", rol: "Usuario", estado: "Inactivo" },
//     { id: 3, nombre: "Luis", apellido: "Martínez", email: "luis@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 4, nombre: "María", apellido: "López", email: "maria@example.com", rol: "Admin", estado: "Inactivo" },
//     { id: 5, nombre: "Carlos", apellido: "González", email: "carlos@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 6, nombre: "Lucía", apellido: "Ramírez", email: "lucia@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 7, nombre: "Sofía", apellido: "Fernández", email: "sofia@example.com", rol: "Admin", estado: "Inactivo" },
//     { id: 8, nombre: "Andrés", apellido: "Hernández", email: "andres@example.com", rol: "Usuario", estado: "Activo" },
//     { id: 9, nombre: "Laura", apellido: "Morales", email: "laura@example.com", rol: "Usuario", estado: "Inactivo" },
//     { id: 10, nombre: "Diego", apellido: "Vargas", email: "diego@example.com", rol: "Admin", estado: "Activo" },
//   ];

//   const [users] = useState<User[]>(usersData);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>(usersData);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const usersPerPage = 5;

//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="userlist-container">
//   <div className="userlist-inner-container">
//     <div className="controls">
//       <span className="search-title">Lista de Usuarios</span>
//       <input
//         type="text"
//         placeholder="Buscar por nombre"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-input"
//       />
//     </div>

//     <div className="table-header">
//       <span>Nombre</span>
//       <span>Apellido</span>
//       <span>Email</span>
//       <div
//         className="dropdowncito-wrapper"
//         onMouseEnter={() => setShowRoleDropdown(true)}
//         onMouseLeave={() => setShowRoleDropdown(false)}
//       >
//         <span className="dropdowncito-trigger">Rol</span>
//         {showRoleDropdown && (
//           <div className="dropdowncito">
//             <div onClick={() => setSelectedRole("")}>Todos</div>
//             <div onClick={() => setSelectedRole("Admin")}>Admin</div>
//             <div onClick={() => setSelectedRole("Usuario")}>Usuario</div>
//           </div>
//         )}
//       </div>
//       <span>Estado</span>
//     </div>

//     {currentUsers.map((user) => (
//       <div key={user.id} className="user-card">
//         <span>{user.nombre}</span>
//         <span>{user.apellido}</span>
//         <span>{user.email}</span>
//         <span>{user.rol}</span>
//         <span>{user.estado}</span>
//       </div>
//     ))}

//     <div className="pagination">
//       {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//         <button
//           key={page}
//           onClick={() => paginate(page)}
//           className={page === currentPage ? "active-page-button" : "page-button"}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   </div>
// </div>

//     );
// };

// export default UserList;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UserList.css"; // Archivo CSS separado

// interface User {
//   id: number;
//   userName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   roleName: string;
//   estado: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const usersPerPage = 5;

//   // Fetch users from the API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header
//           },
//         });
//         setUsers(response.data);
//         setFilteredUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Filter users based on search term and selected role
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.roleName === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 <div onClick={() => setSelectedRole("Admin")}>Admin</div>
//                 <div onClick={() => setSelectedRole("Usuario")}>Usuario</div>
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <span>{user.firstName} {user.lastName}</span>
//             <span>{user.email}</span>
//             <span>{user.roleName}</span>
//             <span>{user.estado ? "Activo" : "Inactivo"}</span>
//           </div>
//         ))}

//         <div className="pagination">
//           {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => paginate(page)}
//               className={page === currentPage ? "active-page-button" : "page-button"}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UserList.css"; // Archivo CSS separado

// interface User {
//   id: number;
//   userName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   roleName: string;
//   estado: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const usersPerPage = 5;

//   // Fetch users from the API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header
//           },
//         });
//         const usersData = response.data;

//         // Filtramos los usuarios para eliminar aquellos con rol "Admin"
//         const filteredUsers = usersData.filter((user: User) => !user.roleName.includes("Admin"));
        
//         setUsers(filteredUsers); // Actualizamos el estado de los usuarios
//         setFilteredUsers(filteredUsers); // Actualizamos los usuarios filtrados
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Filtrar usuarios basados en término de búsqueda y rol seleccionado
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.roleName === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 <div onClick={() => setSelectedRole("Admin")}>Admin</div>
//                 <div onClick={() => setSelectedRole("Usuario")}>Usuario</div>
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <span>{user.firstName} {user.lastName}</span>
//             <span>{user.email}</span>
//             <span>{user.roleName}</span>
//             <span>{user.estado ? "Activo" : "Inactivo"}</span>
//           </div>
//         ))}

//         <div className="pagination">
//           {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => paginate(page)}
//               className={page === currentPage ? "active-page-button" : "page-button"}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UserList.css"; // Archivo CSS separado

// interface User {
//   id: number;
//   userName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   roleName: string;
//   estado: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const usersPerPage = 5;

//   // Fetch users from the API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Authorization header
//           },
//         });
//         const usersData = response.data;

//         // Filtramos los usuarios para eliminar aquellos con rol "Admin"
//         const filteredUsers = usersData.filter((user: User) => !user.roleName.includes("Admin"));
        
//         setUsers(filteredUsers); // Actualizamos el estado de los usuarios
//         setFilteredUsers(filteredUsers); // Actualizamos los usuarios filtrados
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Filtrar usuarios basados en término de búsqueda y rol seleccionado
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.roleName === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 <div onClick={() => setSelectedRole("Admin")}>Admin</div>
//                 <div onClick={() => setSelectedRole("Usuario")}>Usuario</div>
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <span>{user.firstName} {user.lastName}</span>
//             <span>{user.email}</span>
//             <span>{user.roleName}</span>
//             <span>{user.estado ? "Activo" : "Inactivo"}</span>
//           </div>
//         ))}

//         <div className="pagination">
//           {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => paginate(page)}
//               className={page === currentPage ? "active-page-button" : "page-button"}
//             >
//               {page}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./UserList.css"; // Archivo CSS separado

// interface User {
//   firstName: string;
//   lastName: string;
//   rolesName: string;
//   isEnabled: boolean;
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]); // Estado para los roles
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const usersPerPage = 5;

//   // Obtener roles desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Usamos el token desde el LocalStorage
//         },
//       })
//       .then((response) => {
//         // Filtrar para excluir el rol "Administrador"
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles); // Guardamos los roles filtrados en el estado
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, []);
  

//   // Obtener usuarios desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`, // Usamos el token desde el LocalStorage
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador"); // Excluir admins
//         // Verificar si estamos en la ruta /pacientes
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, []);
  

//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 {roles.map((role) => (
//                   <div key={role.id} onClick={() => setSelectedRole(role.name)}>
//                     {role.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <span>{user.firstName}</span>
//             <span>{user.lastName}</span>
//             <span>{user.email}</span>
//             <span>{user.rolesName}</span>
//             <span>{user.isEnabled}</span>
//           </div>
//         ))}

// <div className="pagination-container">
//   <button className="add-user-button">Agregar Usuario</button>
//   <div className="pagination">
//     {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//       <button
//         key={page}
//         onClick={() => paginate(page)}
//         className={page === currentPage ? "active-page-button" : "page-button"}
//       >
//         {page}
//       </button>
//     ))}
//   </div>
// </div>

//       </div>
//     </div>
//   );
// };

// export default UserList;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from 'react-router-dom';

// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   rolesName: string;
//   isEnabled: boolean;
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [title, setTitle] = useState<string>("Lista de Usuarios"); // Estado para el título dinámico
//   const usersPerPage = 5;

//   // Actualizar título según la ruta actual
//   useEffect(() => {
//     if (window.location.pathname === "/dashboard/pacientes") {
//       setTitle("Lista de Pacientes");
//     } else {
//       setTitle("Lista de Usuarios");
//     }
//   }, [window.location.pathname]);

//   // Obtener roles desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, []);

//   // Obtener usuarios desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador");
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, []);

//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">{title}</span> {/* Título dinámico */}
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 {roles.map((role) => (
//                   <div key={role.id} onClick={() => setSelectedRole(role.name)}>
//                     {role.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <span>{user.firstName}</span>
//             <span>{user.lastName}</span>
//             <span>{user.email}</span>
//             <span>{user.rolesName}</span>
//             <span>{user.isEnabled}</span>
//           </div>
//         ))}

//         <div className="pagination-container">
//         <Link to="createuser">
//           <button className="add-user-button">Agregar Usuario</button>
//         </Link>
//           <div className="pagination">
//             {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => paginate(page)}
//                 className={page === currentPage ? "active-page-button" : "page-button"}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import { GoChevronDown } from "react-icons/go"; // Importa el ícono
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   rolesName: string;
//   isEnabled: boolean;
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const usersPerPage = 5;

//   // Obtener roles desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, []);

//   // Obtener usuarios desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador");
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, []);

//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 {roles.map((role) => (
//                   <div key={role.id} onClick={() => setSelectedRole(role.name)}>
//                     {role.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//           <div className="card-column">{user.firstName}</div>
//           <div className="card-column">{user.lastName}</div>
//           <div className="card-column">{user.email}</div>
//           <div className="card-column">{user.rolesName}</div>
//           <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

// </div>

//         ))}

//         <div className="pagination-container">
//           <button className="add-user-button">Agregar Usuario</button>
//           <div className="pagination">
//             {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => paginate(page)}
//                 className={page === currentPage ? "active-page-button" : "page-button"}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GoChevronDown } from "react-icons/go"; // Importa el ícono de expansión
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   rolesName: string;
//   isEnabled: boolean;
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null); // Estado para expandir la tarjeta
//   const usersPerPage = 5;

//   // Obtener roles desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, []);

//   // Obtener usuarios desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador");
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, []);

//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId); // Alternar expansión de la tarjeta
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">Rol</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("")}>Todos</div>
//                 {roles.map((role) => (
//                   <div key={role.id} onClick={() => setSelectedRole(role.name)}>
//                     {role.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {/* Icono para expandir la tarjeta */}
//             <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//               <GoChevronDown />
//             </div>

//             {/* Mostrar contenido expandido si la tarjeta está expandida */}
//             {expandedCard === user.id && (
//               <div className="card-expanded">
//                 <button className="clear-password-button">Limpiar Contraseña</button>
//               </div>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           <button className="add-user-button">Agregar Usuario</button>
//           <div className="pagination">
//             {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => paginate(page)}
//                 className={page === currentPage ? "active-page-button" : "page-button"}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;









// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GoChevronDown } from "react-icons/go"; // Importa el ícono de expansión
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   rolesName: string;
//   isEnabled: boolean;
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null); // Estado para expandir la tarjeta
//   const usersPerPage = 5;

//   // Obtener roles desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, []);

//   // Obtener usuarios desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador");
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, []);

//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId); // Alternar expansión de la tarjeta
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <span>Rol</span>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {/* Icono para expandir la tarjeta */}
//             <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//               <GoChevronDown />
//             </div>

//             {/* Mostrar contenido expandido si la tarjeta está expandida */}
//             {expandedCard === user.id && (
//               <div className="card-expanded">
//                 <button className="clear-password-button">Limpiar Contraseña</button>
//               </div>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           <button className="add-user-button">Agregar Usuario</button>
//           <div className="pagination">
//             {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => paginate(page)}
//                 className={page === currentPage ? "active-page-button" : "page-button"}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GoChevronDown } from "react-icons/go"; // Importa el ícono de expansión
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   rolesName: string;
//   isEnabled: boolean;
//   id: number;
//   nombre: string;
//   apellido: string;
//   email: string;
//   rol: string;
//   estado: string;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>(""); // Estado para el rol seleccionado
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null); // Estado para expandir la tarjeta
//   const usersPerPage = 5;

//   // Obtener roles desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, []);

//   // Obtener usuarios desde el endpoint
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador");
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, []);

//   // Filtrar usuarios según término de búsqueda y rol seleccionado
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rol === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId); // Alternar expansión de la tarjeta
//   };

//   const handleRoleChange = (role: string) => {
//     setSelectedRole(role); // Cambiar el rol seleccionado
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">Lista de Usuarios</span>
//           <input
//             type="text"
//             placeholder="Buscar por nombre"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />

//           {/* Dropdown de roles */}
//           <div className="dropdowncito-wrapper">
//             <div className="dropdowncito-trigger" tabIndex={0}>
//               <span>{selectedRole || "Seleccionar Rol"}</span>
//               <GoChevronDown />
//             </div>
//             <div className="dropdowncito">
//               {roles.map((role) => (
//                 <div key={role.id} onClick={() => handleRoleChange(role.name)}>
//                   {role.name}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="table-header">
//           <span>Nombre</span>
//           <span>Apellido</span>
//           <span>Email</span>
//           <span>Rol</span>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className="user-card">
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {/* Icono para expandir la tarjeta */}
//             <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//               <GoChevronDown />
//             </div>

//             {/* Mostrar contenido expandido si la tarjeta está expandida */}
//             {expandedCard === user.id && (
//               <div className="card-expanded">
//                 <button className="clear-password-button">Limpiar Contraseña</button>
//               </div>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           <button className="add-user-button">Agregar Usuario</button>
//           <div className="pagination">
//             {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => paginate(page)}
//                 className={page === currentPage ? "active-page-button" : "page-button"}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserList;








import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoChevronDown } from "react-icons/go"; // Importa el ícono de expansión
import { BsPerson } from "react-icons/bs";
import "./UserList.css";

interface User {
  firstName: string;
  lastName: string;
  rolesName: string;
  isEnabled: boolean;
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  estado: string;
}

interface Role {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>(""); // Estado para el rol seleccionado
  const [roles, setRoles] = useState<Role[]>([]);
  const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false); // Estado para controlar el dropdown
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null); // Estado para expandir la tarjeta
  const usersPerPage = 5;

  // Obtener roles desde el endpoint
  useEffect(() => {
    axios
      .get("https://emmanuel.somee.com/api/v1/Roles", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
        setRoles(filteredRoles);
      })
      .catch((error) => {
        console.error("Error al obtener los roles:", error);
      });
  }, []);

  // Obtener usuarios desde el endpoint
  useEffect(() => {
    axios
      .get("https://emmanuel.somee.com/api/v1/Users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        let filteredUsers = response.data.filter((user: any) => user.roleName !== "Administrador");
        if (window.location.pathname === "/dashboard/pacientes") {
          filteredUsers = filteredUsers.filter((user: any) => user.roleName === "Paciente");
        }
        setUsers(filteredUsers);
        setFilteredUsers(filteredUsers);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, []);

  // Filtrar usuarios según término de búsqueda y rol seleccionado
  useEffect(() => {
    let filtered = users;
    if (searchTerm) {
      filtered = filtered.filter((user) =>
        user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedRole) {
      filtered = filtered.filter((user) => user.rol === selectedRole);
    }
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedRole, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleExpand = (userId: number) => {
    setExpandedCard(expandedCard === userId ? null : userId); // Alternar expansión de la tarjeta
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role); // Cambiar el rol seleccionado
    setShowRoleDropdown(false); // Cerrar el dropdown después de seleccionar un rol
  };

  return (
    <div className="userlist-container">
      <div className="userlist-inner-container">
        <div className="controls">
          <span className="search-title"><BsPerson className="cico" />Lista de Usuarios</span>
          <input
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="table-header">
          <span>Nombre</span>
          <span>Apellido</span>
          <span>Email</span>
          <div
            className="dropdowncito-wrapper"
            onMouseEnter={() => setShowRoleDropdown(true)}
            onMouseLeave={() => setShowRoleDropdown(false)}
          >
            <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
            {showRoleDropdown && (
              <div className="dropdowncito">
                <div onClick={() => handleRoleChange("")}>Todos</div>
                {roles.map((role) => (
                  <div key={role.id} onClick={() => handleRoleChange(role.name)}>
                    {role.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span>Estado</span>
        </div>

        {currentUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="card-column">{user.firstName}</div>
            <div className="card-column">{user.lastName}</div>
            <div className="card-column">{user.email}</div>
            <div className="card-column">{user.rolesName}</div>
            <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

            {/* Icono para expandir la tarjeta */}
            <div className="expand-icon" onClick={() => handleExpand(user.id)}>
              <GoChevronDown />
            </div>

            {/* Mostrar contenido expandido si la tarjeta está expandida */}
            {expandedCard === user.id && (
              <div className="card-expanded">
                <button className="clear-password-button">Limpiar Contraseña</button>
              </div>
            )}
          </div>
        ))}

        <div className="pagination-container">
          <button className="add-user-button">Agregar Usuario</button>
          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={page === currentPage ? "active-page-button" : "page-button"}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
  