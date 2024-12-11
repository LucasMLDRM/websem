// import React, { useState } from 'react';
// import './UserHeader.css';
// import { Role } from '../../hooks/types';
// import { SlArrowDown } from 'react-icons/sl';

// interface UserHeaderProps {
//   roles: Role[];
//   onRoleChange: (role: string) => void;
// }

// const UserHeader: React.FC<UserHeaderProps> = ({ roles, onRoleChange }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   // Agrega la opción "Todos" al principio de la lista
//   const allRoles: Role[] = [
//     { id: 'all', name: 'Todos' },
//     ...roles.filter(role => role.name !== 'Administrador')
//   ];

//   const handleRoleSelect = (roleName: string) => {
//     onRoleChange(roleName); // Llama a onRoleChange con el rol seleccionado
//     setDropdownVisible(false); // Oculta el menú después de seleccionar un rol
//   };

//   return (
//     <div className="user-header">
//       <div className="header-info">
//         <div className="header-field">Nombre</div>
//         <div className="header-field">Apellido</div>
//         <div className="header-field">Mail</div>
//         <div
//           className="header-field dropdown-container"
//           onMouseEnter={() => setDropdownVisible(true)}
//           onMouseLeave={() => setDropdownVisible(false)}
//         >
//           <div className="dropdown-header">Rol
//             <SlArrowDown className='drop-icon' />
//           </div>
//           {isDropdownVisible && (
//             <div className="dropdown-list">
//               {allRoles.map(role => (
//                 <div
//                   key={role.id}
//                   className="dropdown-item"
//                   onClick={() => handleRoleSelect(role.name)}
//                 >
//                   {role.name === 'Asistente' ? 'Cuidador' : role.name
//                     === 'Paciente' ? 'Beneficiario' : role.name
//                   }
                  
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="header-field">Estado</div>
//       </div>
//     </div>
//   );
// };

// export default UserHeader;

















// import React, { useState } from 'react';
// import './UserHeader.css';
// import { Role } from '../../hooks/types';
// import { SlArrowDown } from 'react-icons/sl';

// interface UserHeaderProps {
//   roles: Role[];
//   onRoleChange: (role: string) => void;
// }

// const UserHeader: React.FC<UserHeaderProps> = ({ roles, onRoleChange }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   const allRoles: Role[] = [
//     { id: 'all', name: 'Todos' },
//     ...roles.filter(role => role.name !== 'Administrador')
//   ];

//   const handleRoleSelect = (roleName: string) => {
//     onRoleChange(roleName);
//     setDropdownVisible(false);
//   };

//   return (
//     <div className="user-header">
//       <div className="header-info">
//         <div className="header-field">Nombre</div>
//         <div className="header-field">Apellido</div>
//         <div className="header-field">Mail</div>
//         <div
//           className="header-field dropdown-container"
//           onMouseEnter={() => setDropdownVisible(true)}
//           onMouseLeave={() => setDropdownVisible(false)}
//         >
//           <div className="dropdown-header">Rol
//             <SlArrowDown className='drop-icon' />
//           </div>
//           <div className={`dropdown-list ${isDropdownVisible ? 'show' : ''}`}>
//             {allRoles.map(role => (
//               <div
//                 key={role.id}
//                 className="dropdown-item"
//                 onClick={() => handleRoleSelect(role.name)}
//               >
//                 {role.name === 'Asistente' ? 'Cuidador' : role.name
//                   === 'Paciente' ? 'Beneficiario' : role.name}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="header-field">Estado</div>
//       </div>
//     </div>
//   );
// };

// export default UserHeader;












// import React, { useState, useEffect } from 'react';
// import './UserHeader.css';
// import { Role } from '../../hooks/types';
// import { SlArrowDown } from 'react-icons/sl';

// interface UserHeaderProps {
//   roles: Role[];
//   onRoleChange: (role: string) => void;
// }

// const UserHeader: React.FC<UserHeaderProps> = ({ roles, onRoleChange }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedRole, setSelectedRole] = useState<string>('Todos');

//   // Inicializar el rol seleccionado según localStorage
//   useEffect(() => {
//     const userFilter = localStorage.getItem('userFilter');
//     if (userFilter === 'pacientes') {
//       setSelectedRole('Paciente');
//       onRoleChange('Paciente'); // Notificar al componente padre
//     }
//   }, [onRoleChange]);

//   const allRoles: Role[] = [
//     { id: 'all', name: 'Todos' },
//     ...roles.filter(role => role.name !== 'Administrador'),
//   ];

//   const handleRoleSelect = (roleName: string) => {
//     setSelectedRole(roleName);
//     onRoleChange(roleName);
//     setDropdownVisible(false);
//   };

//   return (
//     <div className="user-header">
//       <div className="header-info">
//         <div className="header-field">Nombre</div>
//         <div className="header-field">Apellido</div>
//         <div className="header-field">Mail</div>
//         <div
//           className="header-field dropdown-container"
//           onMouseEnter={() => setDropdownVisible(true)}
//           onMouseLeave={() => setDropdownVisible(false)}
//         >
//           <div className="dropdown-header">
//             {selectedRole === 'Paciente' ? 'Beneficiario' : selectedRole}
//             <SlArrowDown className="drop-icon" />
//           </div>
//           <div className={`dropdown-list ${isDropdownVisible ? 'show' : ''}`}>
//             {allRoles.map(role => (
//               <div
//                 key={role.id}
//                 className={`dropdown-item ${selectedRole === role.name ? 'selected' : ''}`}
//                 onClick={() => handleRoleSelect(role.name)}
//               >
//                 {role.name === 'Asistente'
//                   ? 'Cuidador'
//                   : role.name === 'Paciente'
//                   ? 'Beneficiario'
//                   : role.name}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="header-field">Estado</div>
//       </div>
//     </div>
//   );
// };

// export default UserHeader;



import React, { useState, useEffect } from 'react';
import { Role } from '../../hooks/types';
import { SlArrowDown } from 'react-icons/sl';
import './UserHeader.css';

interface UserHeaderProps {
  roles: Role[];
  onRoleChange: (role: string) => void;
}

const UserHeader: React.FC<UserHeaderProps> = ({ roles, onRoleChange }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>('Todos');

  useEffect(() => {
    const userFilter = localStorage.getItem('userFilter');
    if (userFilter === 'pacientes') {
      setSelectedRole('Paciente');
      onRoleChange('Paciente');
    }
  }, [onRoleChange]);

  const handleRoleSelect = (roleName: string) => {
    setSelectedRole(roleName);
    onRoleChange(roleName);
    setDropdownVisible(false);
  };

  return (
    <div className="user-header">
      <div className="header-info">
        <div className="header-field">Nombre</div>
        <div className="header-field">Apellido</div>
        <div className="header-field">Email</div>
        <div
          className="header-field dropdown-container"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <div className="dropdown-header">
            {selectedRole}
            <SlArrowDown className="drop-icon" />
          </div>
          <div className={`dropdown-list ${isDropdownVisible ? 'show' : ''}`}>
            {roles.map(role => (
              <div
                key={role.id}
                className={`dropdown-item ${selectedRole === role.name ? 'selected' : ''}`}
                onClick={() => handleRoleSelect(role.name)}
              >
                {role.name}
              </div>
            ))}
          </div>
        </div>
        <div className="header-field">Estado</div>
        <div className="header-field">Acción</div>
      </div>
    </div>
  );
};

export default UserHeader;
