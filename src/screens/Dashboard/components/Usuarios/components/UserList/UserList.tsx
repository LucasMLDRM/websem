// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
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
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

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
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   const handleRoleChange = (role: string) => {
//     setSelectedRole(role);
//     setShowRoleDropdown(false);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => handleRoleChange("")}>Todos</div>
//                 {roles.map((role) => (
//                   <div key={role.id} onClick={() => handleRoleChange(role.name)}>
//                     {role.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div
//             key={user.id}
//             className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}
//           >
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//               <GoChevronDown />
//             </div>

//             <div className="card-expanded">
//               <button className="clear-password-button">Limpiar Contraseña</button>
//             </div>
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
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
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ roleName: string } | null>(null); // Datos del usuario logueado
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   // Obtener datos del usuario logueado
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   // Obtener roles
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   // Obtener usuarios
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
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
//   }, [token]);

//   // Filtrar usuarios según términos de búsqueda y rol
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
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//           <GoChevronDown />
//         </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//           <div className="card-column">{user.firstName}</div>
//           <div className="card-column">{user.lastName}</div>
//           <div className="card-column">{user.email}</div>
//           <div className="card-column">{user.rolesName}</div>
//           <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>
        
//           {userData?.roleName !== "Paciente" && userData?.roleName !== "Familiar" && (
//             <>
//               <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//                 <GoChevronDown />
//               </div>
//               {expandedCard === user.id && (
//                 <div className="card-expanded">
//                   <button className="clear-password-button">Limpiar Contraseña</button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
        
//         ))}

//         <div className="pagination-container">
//         <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//     Agregar Usuario
//   </Link>
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
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
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ roleName: string } | null>(null); // Datos del usuario logueado
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   // Obtener datos del usuario logueado
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   // Obtener roles
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   // Obtener usuarios
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
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
//   }, [token]);

//   // Filtrar usuarios según términos de búsqueda y rol
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
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user) => (
//           <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {userData?.roleName !== "Paciente" && userData?.roleName !== "Familiar" && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === user.id && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.roleName !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<User | null>(null); // Datos del usuario logueado
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   // Obtener datos del usuario logueado
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   // Obtener roles
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   // Obtener usuarios
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         let filteredUsers = response.data.filter((user: any) => user.role !== "Administrador");
//         if (window.location.pathname === "/dashboard/pacientes") {
//           filteredUsers = filteredUsers.filter((user: any) => user.role === "Paciente");
//         }
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   // Filtrar usuarios según términos de búsqueda y rol
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.role === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user, index) => (
//           <div key={index} className={`user-card ${expandedCard === index ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.role}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(index)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === index && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<User | null>(null); // Datos del usuario logueado
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   // Obtener datos del usuario logueado
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   // Obtener roles
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   // Obtener usuarios y filtrar el rol "Administrador"
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.role !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   // Filtrar usuarios según términos de búsqueda y rol
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.role === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user, index) => (
//           <div key={index} className={`user-card ${expandedCard === index ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.role}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(index)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === index && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   role: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<User | null>(null); // Datos del usuario logueado
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   // Obtener datos del usuario logueado
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   // Obtener roles
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   // Obtener usuarios y filtrar el rol "Administrador"
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.role !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   // Filtrar usuarios según términos de búsqueda y rol
//   useEffect(() => {
//     let filtered = users;
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.role === selectedRole);
//     }
//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {currentUsers.map((user, index) => (
//           <div key={index} className={`user-card ${expandedCard === index ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.role}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(index)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === index && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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









// import React, { useState, useEffect, Key } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   isEnabled: any;
//   id: Key | null | undefined;
//   roleName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   rolesName: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ role: string } | null>(null); // Datos del usuario logueado
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   // Obtener datos del usuario logueado
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   // Obtener roles
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   // Obtener usuarios y filtrar "rolesName" que sean "Administrador"
//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   // Filtrar usuarios según términos de búsqueda y rol
//   // useEffect(() => {
//   //   let filtered = users;
//   //   if (searchTerm) {
//   //     filtered = filtered.filter((user) =>
//   //       user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//   //     );
//   //   }
//   //   if (selectedRole) {
//   //     filtered = filtered.filter((user) => user.rolesName === selectedRole);
//   //   }
//   //   setFilteredUsers(filtered);
//   //   setCurrentPage(1);
//   // }, [searchTerm, selectedRole, users]);

// // Filtrar usuarios según términos de búsqueda y rol
// useEffect(() => {
//   let filtered = users;

//   // Filtrar por término de búsqueda
//   if (searchTerm) {
//     filtered = filtered.filter((user) =>
//       user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

//   // Filtrar por rol seleccionado
//   if (selectedRole) {
//     filtered = filtered.filter((user) => user.rolesName === selectedRole);
//   }

//   // Actualizar la lista filtrada de usuarios
//   setFilteredUsers(filtered);
//   setCurrentPage(1);
// }, [searchTerm, selectedRole, users]);



//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//           {/* <div
//             className="dropdowncito-wrapper"
//             onMouseEnter={() => setShowRoleDropdown(true)}
//             onMouseLeave={() => setShowRoleDropdown(false)}
//           >
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div> */}

// <div
//   className="dropdowncito-wrapper"
//   onMouseEnter={() => setShowRoleDropdown(true)}
//   onMouseLeave={() => setShowRoleDropdown(false)}
// >
//   <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
//   {showRoleDropdown && (
//     <div className="dropdowncito">
//       <div onClick={() => setSelectedRole("")}>Todos</div>
//       {roles.map((role) => (
//         <div
//           key={role.id}
//           onClick={() => setSelectedRole(role.name)} // El valor asignado es el nombre del rol
//         >
//           {role.name}
//         </div>
//       ))}
//     </div>
//   )}
//   <div className="drop-icon">
//     <GoChevronDown />
//   </div>
// </div>


//           <span>Estado</span>
//         </div>

//         {/* {currentUsers.map((user, index) => (
//           <div key={index} className={`user-card ${expandedCard === index ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(index)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === index && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))} */}
// {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
//   <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//     <div className="card-column">{user.firstName}</div>
//     <div className="card-column">{user.lastName}</div>
//     <div className="card-column">{user.email}</div>
//     <div className="card-column">{user.rolesName}</div>
//     <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>
  
//     {userData?.role !== "Paciente" && userData?.role !== "Familiar" && (
//       <>
//         <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//           <GoChevronDown />
//         </div>
//         {expandedCard === user.id && (
//           <div className="card-expanded">
//             <button className="clear-password-button">Limpiar Contraseña</button>
//           </div>
//         )}
//       </>
//     )}
//   </div>
// ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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



















// import React, { useState, useEffect, Key } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   isEnabled: any;
//   id: Key | null | undefined;
//   roleName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   rolesName: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ role: string } | null>(null);
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     let filtered = users;

//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rolesName === selectedRole);
//     }

//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
//           <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === user.id && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   isEnabled: any;
//   id: number | null;  // Cambié el tipo de `id` a `number | null`
//   roleName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   rolesName: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ role: string } | null>(null);
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>("");
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     let filtered = users;

//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rolesName === selectedRole);
//     }

//     setFilteredUsers(filtered);
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

// {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
//   <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//     <div className="card-column">{user.firstName}</div>
//     <div className="card-column">{user.lastName}</div>
//     <div className="card-column">{user.email}</div>
//     <div className="card-column">{user.rolesName}</div>
//     <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//     {userData?.role !== "Paciente" && userData?.role !== "Familiar" && user.id !== null && (
//       <>
//         <div className="expand-icon" onClick={() => handleExpand(user.id as number)}>
//           <GoChevronDown />
//         </div>
//         {expandedCard === user.id && (
//           <div className="card-expanded">
//             <button className="clear-password-button">Limpiar Contraseña</button>
//           </div>
//         )}
//       </>
//     )}
//   </div>
// ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   isEnabled: any;
//   id: number | null;
//   roleName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   rolesName: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ role: string } | null>(null);
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>(""); // Almacena el rol seleccionado
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers); // Al cargar los usuarios, se establece la lista de filtrados
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     let filtered = users;

//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filtrar por rol seleccionado
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rolesName === selectedRole);
//     }

//     setFilteredUsers(filtered); // Establecer la lista filtrada
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]); // Se reactiva el filtro cuando se cambia el rol o el término de búsqueda

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
//           <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && user.id !== null && (
//               <>
//                 <div className="expand-icon" onClick={() => handleExpand(user.id)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === user.id && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   isEnabled: any;
//   id: number | null; // id puede ser null
//   roleName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   rolesName: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ role: string } | null>(null);
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>(""); // Almacena el rol seleccionado
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers); // Al cargar los usuarios, se establece la lista de filtrados
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     let filtered = users;

//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filtrar por rol seleccionado
//     if (selectedRole) {
//       filtered = filtered.filter((user) => user.rolesName === selectedRole);
//     }

//     setFilteredUsers(filtered); // Establecer la lista filtrada
//     setCurrentPage(1);
//   }, [searchTerm, selectedRole, users]); // Se reactiva el filtro cuando se cambia el rol o el término de búsqueda

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
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
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
//           <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.rolesName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && user.id !== null && (
//               <>
//                 <div className="expand-icon" onClick={() => user.id !== null && handleExpand(user.id)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === user.id && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
// import { Link } from "react-router-dom";
// import { GoChevronDown } from "react-icons/go";
// import { BsPerson } from "react-icons/bs";
// import "./UserList.css";

// interface User {
//   isEnabled: any;
//   id: number | null;
//   roleName: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   rolesName: string;
//   userName: string;
//   profileURL: string | null;
// }

// interface Role {
//   id: number;
//   name: string;
// }

// const UserList: React.FC = () => {
//   const token = localStorage.getItem("token") || "";
//   const [userData, setUserData] = useState<{ role: string } | null>(null);
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [selectedRole, setSelectedRole] = useState<string>(""); // Almacena el rol seleccionado
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const usersPerPage = 5;

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Roles", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
//         setRoles(filteredRoles);
//       })
//       .catch((error) => {
//         console.error("Error al obtener los roles:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     axios
//       .get("https://emmanuel.somee.com/api/v1/Users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
//         setUsers(filteredUsers);
//         setFilteredUsers(filteredUsers); // Al cargar los usuarios, se establece la lista de filtrados
//       })
//       .catch((error) => {
//         console.error("Error al obtener los usuarios:", error);
//       });
//   }, [token]);

//   useEffect(() => {
//     let filtered = users;

//     // Filtro por término de búsqueda
//     if (searchTerm) {
//       filtered = filtered.filter((user) =>
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filtro por rol seleccionado
//     if (selectedRole && selectedRole !== "Todos") {
//       filtered = filtered.filter((user) => user.roleName === selectedRole);
//     }

//     setFilteredUsers(filtered);
//     setCurrentPage(1); // Resetear página al cambiar el filtro
//   }, [searchTerm, selectedRole, users]);

//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const handleExpand = (userId: number) => {
//     setExpandedCard(expandedCard === userId ? null : userId);
//   };

//   return (
//     <div className="userlist-container">
//       <div className="userlist-inner-container">
//         <div className="controls">
//           <span className="search-title">
//             <BsPerson className="cico" />
//             Lista de Usuarios
//           </span>
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
//             <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
//             {showRoleDropdown && (
//               <div className="dropdowncito">
//                 <div onClick={() => setSelectedRole("Todos")}>Todos</div> {/* Mostrar todos */}
//                 {roles.map((role) => (
//                   <div key={role.id} onClick={() => setSelectedRole(role.name)}>
//                     {role.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//             <div className="drop-icon">
//               <GoChevronDown />
//             </div>
//           </div>
//           <span>Estado</span>
//         </div>

//         {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
//           <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
//             <div className="card-column">{user.firstName}</div>
//             <div className="card-column">{user.lastName}</div>
//             <div className="card-column">{user.email}</div>
//             <div className="card-column">{user.roleName}</div>
//             <div className="card-column">{user.isEnabled ? "Activo" : "Inactivo"}</div>

//             {userData?.role !== "Paciente" && userData?.role !== "Familiar" && user.id !== null && (
//               <>
//                 <div className="expand-icon" onClick={() => user.id !== null && handleExpand(user.id)}>
//                   <GoChevronDown />
//                 </div>
//                 {expandedCard === user.id && (
//                   <div className="card-expanded">
//                     <button className="clear-password-button">Limpiar Contraseña</button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//         ))}

//         <div className="pagination-container">
//           {userData?.role !== "Familiar" && (
//             <Link to="/dashboard/usuarios/createuser" className="add-user-button">
//               Agregar Usuario
//             </Link>
//           )}
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
import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import StatusSwitch from '../StatusSwitch/StatusSwitch';  // Importa el componente
import "./UserList.css";

interface User {
  isEnabled: any;
  id: number | null;
  roleName: string;
  firstName: string;
  lastName: string;
  email: string;
  rolesName: string;
  userName: string;
  profileURL: string | null;
}

interface Role {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const token = localStorage.getItem("token") || "";
  const [userData, setUserData] = useState<{ role: string } | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>(""); // Almacena el rol seleccionado
  const [roles, setRoles] = useState<Role[]>([]);
  const [showRoleDropdown, setShowRoleDropdown] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://emmanuel.somee.com/api/v1/Users/getUserlogged", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    axios
      .get("https://emmanuel.somee.com/api/v1/Roles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filteredRoles = response.data.filter((role: Role) => role.name !== "Administrador");
        setRoles(filteredRoles);
      })
      .catch((error) => {
        console.error("Error al obtener los roles:", error);
      });
  }, [token]);

  useEffect(() => {
    axios
      .get("https://emmanuel.somee.com/api/v1/Users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const filteredUsers = response.data.filter((user: User) => user.roleName !== "Administrador");
        setUsers(filteredUsers);
        setFilteredUsers(filteredUsers); // Al cargar los usuarios, se establece la lista de filtrados
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      });
  }, [token]);

  useEffect(() => {
    let filtered = users;

    // Filtro por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por rol seleccionado
    if (selectedRole && selectedRole !== "Todos") {
      filtered = filtered.filter((user) => user.roleName === selectedRole);
    }

    setFilteredUsers(filtered);
    setCurrentPage(1); // Resetear página al cambiar el filtro
  }, [searchTerm, selectedRole, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleExpand = (userId: number) => {
    setExpandedCard(expandedCard === userId ? null : userId);
  };

  return (
    <div className="userlist-container">
      <div className="userlist-inner-container">
        <div className="controls">
          <span className="search-title">
            <BsPerson className="cico" />
            Lista de Usuarios
          </span>
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
          {/* <div
            className="dropdowncito-wrapper"
            onMouseEnter={() => setShowRoleDropdown(true)}
            onMouseLeave={() => setShowRoleDropdown(false)}
          >
            <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
            {showRoleDropdown && (
              <div className="dropdowncito">
                <div onClick={() => setSelectedRole("Todos")}>Todos</div> 
                {roles.map((role) => (
                  <div key={role.id} onClick={() => setSelectedRole(role.name)}>
                    {role.name}
                  </div>
                ))}
              </div>
            )}
            <div className="drop-icon">
              <GoChevronDown />
            </div>
          </div> */}
          <div
  className="dropdowncito-wrapper"
  onMouseEnter={() => setShowRoleDropdown(true)}
  onMouseLeave={() => setShowRoleDropdown(false)}
>
  <span className="dropdowncito-trigger">{selectedRole || "Rol"}</span>
  <div className="drop-icon">
    <GoChevronDown />
  </div> {/* Icono al costado del texto */}
  {showRoleDropdown && (
    <div className="dropdowncito">
      <div onClick={() => setSelectedRole("Todos")}>Todos</div>
      {roles.map((role) => (
        <div key={role.id} onClick={() => setSelectedRole(role.name)}>
          {role.name}
        </div>
      ))}
    </div>
  )}
</div>

          <span>Estado</span>
        </div>

        {filteredUsers.slice(indexOfFirstUser, indexOfLastUser).map((user) => (
          <div key={user.id} className={`user-card ${expandedCard === user.id ? "expanded" : ""}`}>
            <div className="card-column">{user.firstName}</div>
            <div className="card-column">{user.lastName}</div>
            <div className="card-column">{user.email}</div>
            <div className="card-column">{user.roleName}</div>

            {/* Aquí se integra el componente StatusSwitch */}
            <div className="card-column">
              <StatusSwitch row={user} />
            </div>

            {userData?.role !== "Paciente" && userData?.role !== "Familiar" && user.id !== null && (
              <>
                <div className="expand-icon" onClick={() => user.id !== null && handleExpand(user.id)}>
                  <GoChevronDown />
                </div>
                {expandedCard === user.id && (
                  <div className="card-expanded">
                    <button className="clear-password-button">Limpiar Contraseña</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}

        <div className="pagination-container">
          {userData?.role !== "Familiar" && (
            <Link to="/dashboard/usuarios/createuser" className="add-user-button">
              Agregar Usuario
            </Link>
          )}
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
