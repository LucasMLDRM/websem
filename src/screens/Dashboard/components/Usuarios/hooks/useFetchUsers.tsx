// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { User } from './User';
// import { Role } from './types'; // Adjust the import according to your structure

// export const useFetchUsers = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchUsersAndRoles = async () => {
//       try {
//         const token = localStorage.getItem('token');
        
//         const config = {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         };

//         // Fetch users
//         const userResponse = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', config);
//         setUsers(userResponse.data);

//         // Fetch roles
//         const roleResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', config);
//         setRoles(roleResponse.data);

//         // Store roles in localStorage
//         localStorage.setItem('roles', JSON.stringify(roleResponse.data));
//       } catch (error) {
//         setError(error as Error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsersAndRoles();
//   }, []);

//   return { users, roles, loading, error };
// };












// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Role } from './types';
// import { User } from './User';

// export const useFetchUsers = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [roles, setRoles] = useState<Role[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     localStorage.removeItem('selectedUser');

//     const fetchData = async () => {
//       try {
//         const storedUsers = localStorage.getItem('users');
//         if (storedUsers) {
//           const usersData = JSON.parse(storedUsers) as User[];
//           const filteredUsers = usersData.filter(user => user.firstName !== 'Admin');
//           setUsers(filteredUsers);
//           setFilteredUsers(filteredUsers);
//         } else {
//           const token = localStorage.getItem('token');
//           if (!token) throw new Error('No token found.');

//           const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           const usersData = response.data;
//           const filteredUsers = usersData.filter(user => user.firstName !== 'Admin');
//           setUsers(filteredUsers);
//           setFilteredUsers(filteredUsers);
//           localStorage.setItem('users', JSON.stringify(filteredUsers));
//         }

//         const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setRoles(rolesResponse.data);

//       } catch (error) {
//         setError(error instanceof Error ? error.message : 'Error fetching data');
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
//   };

//   const handleRoleChange = (role: string) => {
//     if (role === 'Todos') {
//       setFilteredUsers(users);
//     } else {
//       const filtered = users.filter(user => user.rolesName.includes(role));
//       setFilteredUsers(filtered);
//     }
//   };

//   return { users, filteredUsers, roles, loading, error, handleSearch, handleRoleChange };
// };











import { useState, useEffect } from 'react';
import axios from 'axios';
import { Role } from './types';
import { User } from './User';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    localStorage.removeItem('selectedUser');

    const fetchData = async () => {
      try {
        const storedUsers = localStorage.getItem('users');
        let usersData: User[] = [];

        if (storedUsers) {
          usersData = JSON.parse(storedUsers) as User[];
        } else {
          const token = localStorage.getItem('token');
          if (!token) throw new Error('No token found.');

          const response = await axios.get<User[]>('https://emmanuel.somee.com/api/v1/Users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          usersData = response.data;
          localStorage.setItem('users', JSON.stringify(usersData));
        }

        // Filtra usuarios, excluyendo al usuario administrador
        const filtered = usersData.filter(user => user.firstName !== 'Admin');
        setUsers(filtered);

        // Verifica si hay un filtro activo en localStorage
        const userFilter = localStorage.getItem('userFilter');
        if (userFilter === 'pacientes') {
          console.log('Filtrando pacientes según el filtro en localStorage');
          const nonPatientUsers = filtered.filter(user => !user.rolesName.includes('Paciente'));
          setFilteredUsers(nonPatientUsers);
        } else {
          console.log('Sin filtro activo, mostrando todos los usuarios');
          setFilteredUsers(filtered);
        }

        // Carga los roles
        const rolesResponse = await axios.get<Role[]>('https://emmanuel.somee.com/api/v1/Roles', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setRoles(rolesResponse.data);

      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error fetching data');
        console.error('Error al cargar los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = users.filter(user => user.firstName.toLowerCase().includes(lowercasedQuery));
    setFilteredUsers(filtered);
  };

  const handleRoleChange = (role: string) => {
    if (role === 'Todos') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.rolesName.includes(role));
      setFilteredUsers(filtered);
    }
  };

  return { users, filteredUsers, roles, loading, error, handleSearch, handleRoleChange };
};

