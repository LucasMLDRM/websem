// import { Link } from 'react-router-dom';
// import SearchBar from '../SearchBar/SearchBar';
// import UserHeader from '../UserHeader/UserHeader';

// interface UserHeaderComponentProps {
//   onSearch: (query: string) => void; 
// }

// const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({ onSearch }) => {
//   return (
//     <div className="header-users">
//       <h1 className="title">USUARIOS</h1>
//       <div className="section-user">
//         <h2 className="sect-txt">Listado de Usuarios</h2>
//         <Link to="createuser" className="Link">
//           <h2 className="sect-txt">Agregar Usuario</h2>
//         </Link>
//       </div>
//       <SearchBar onSearch={onSearch} />
      
//     </div>
//   );
// };

// export default UserHeaderComponent;




// import React, { ChangeEvent, useState } from 'react';
// import UserHeader from '../UserHeader/UserHeader';
// import { Role } from '../../hooks/types';
// import './UserHeaderComponent.css'
// import { FaRegUser } from "react-icons/fa6"; 



// interface UserHeaderComponentProps {
//   onSearch: (query: string) => void;
//   roles: Role[];
//   onRoleChange: (role: string) => void;
// }




// const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({ roles, onRoleChange }) => {

//     const [query, setQuery] = useState<string>('');
  
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//       const queryValue = e.target.value;
//       setQuery(queryValue);

//     };



//   return (
//     <div className="header-users">
//       <div className='align-tit'>
        
//         <h1 className="us-title"> <FaRegUser/>Usuarios</h1>
      
//       <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="   Buscar usuario..."
//       />
//     </div>
//       </div>
//       <UserHeader roles={roles} onRoleChange={onRoleChange} />
//     </div>
//   );
// };

// export default UserHeaderComponent;



import React from 'react';
import UserHeader from '../UserHeader/UserHeader';
import SearchBar from '../SearchBar/SearchBar';
import { Role } from '../../hooks/types';
import { FaRegUser } from 'react-icons/fa6';
import './UserHeaderComponent.css';

interface UserHeaderComponentProps {
  onSearch: (query: string) => void;
  roles: Role[];
  onRoleChange: (role: string) => void;
}

const UserHeaderComponent: React.FC<UserHeaderComponentProps> = ({ roles, onSearch, onRoleChange }) => {
  return (
    <div className="header-users">
      <div className="align-tit">
        <h1 className="us-title">
          <FaRegUser /> Usuarios
        </h1>
        <SearchBar onSearch={onSearch} />
      </div>
      <UserHeader roles={roles} onRoleChange={onRoleChange} />
    </div>
  );
};

export default UserHeaderComponent;
