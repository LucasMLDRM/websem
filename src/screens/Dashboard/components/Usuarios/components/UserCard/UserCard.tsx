// import axios from 'axios';
// import { useState } from 'react';
// import './UserCard.css';
// import { SlArrowDown, SlPencil } from 'react-icons/sl';
// import { User } from '../../hooks/User';
// import StatusSwitch from '../StatusSwitch/StatusSwitch';
// import { useNavigate } from 'react-router-dom';

// interface UserCardProps {
//   user: User;
// }

// const UserCard: React.FC<UserCardProps> = ({ user }) => {
//   const [isExpanded, setIsExpanded] = useState<boolean>(false);
//   const username = localStorage.getItem('username');
//   const navigate = useNavigate();

//   const handleToggleExpand = () => {
//     setIsExpanded(prev => !prev);
//   };

//   const handleClearPassword = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('No token found.');
//       return;
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       await axios.put(
//         'https://emmanuel.somee.com/api/v1/Users/CleanPassword',
//         { userName: user.userName },
//         config
//       );
//       alert('Password cleared successfully.');
//     } catch (error) {
//       console.error('Error clearing password:', error);
//       alert('Failed to clear password.');
//     }
//   };

//   const handleEditUser = () => {
//     localStorage.setItem('selectedUser', JSON.stringify(user));
//     navigate('edit-user');
//   };

//   return (
//     <div className="user-card">
//       <div className="user-info">
//         <div className="user-field">{user.firstName}</div>
//         <div className="user-field">{user.lastName}</div>
//         <div className="user-field">{user.email}</div>
//         <div className="user-field">{user.rolesName}</div>
//         <div className="user-switch"><StatusSwitch row={user} /></div>
//       </div>
//       {username === 'super.admin' && (
//         <div className="admin-controls">
//           <div className={`expanded-content ${isExpanded ? 'show' : ''}`}>
//             <button className="clear-password-button" onClick={handleClearPassword}>Limpiar Contraseña</button>
//             <button className="edit-icon" onClick={handleEditUser}>
//               <SlPencil />
//             </button>
//           </div>
//           <button className="toggle-expand-button" onClick={handleToggleExpand}>
//             <SlArrowDown className='expand-icon' />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserCard;









// import axios from 'axios';
// import { useState } from 'react';
// import './UserCard.css';
// import { SlArrowDown, SlPencil } from 'react-icons/sl';
// import { User } from '../../hooks/User';
// import StatusSwitch from '../StatusSwitch/StatusSwitch';
// import { useNavigate } from 'react-router-dom';

// interface UserCardProps {
//   user: User;
// }

// const UserCard: React.FC<UserCardProps> = ({ user }) => {
//   const [isExpanded, setIsExpanded] = useState<boolean>(false);
//   const username = localStorage.getItem('username');
//   const navigate = useNavigate();

//   const handleToggleExpand = () => {
//     setIsExpanded(prev => !prev);
//   };

//   const handleClearPassword = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('No token found.');
//       return;
//     }

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       await axios.put(
//         'https://emmanuel.somee.com/api/v1/Users/CleanPassword',
//         { userName: user.userName },
//         config
//       );
//       alert('Password cleared successfully.');
//     } catch (error) {
//       console.error('Error clearing password:', error);
//       alert('Failed to clear password.');
//     }
//   };

//   const handleEditUser = () => {
//     localStorage.setItem('selectedUser', JSON.stringify(user));
//     navigate('edit-user');
//   };

//   return (
//     <div className="user-card">
//       <div className="user-info">
//         <div className="user-field">{user.firstName}</div>
//         <div className="user-field">{user.lastName}</div>
//         <div className="user-field">{user.email}</div>
//         <div className="user-field">{user.rolesName}</div>
//         <div className="user-switch"><StatusSwitch row={user} /></div>
//       </div>
//       {username === 'super.admin' && (
//         <div className="admin-controls">
//           <div className={`expanded-content ${isExpanded ? 'show' : ''}`}>
//             <button className="clear-password-button" onClick={handleClearPassword}>Limpiar Contraseña</button>
//             <button className="edit-icon" onClick={handleEditUser}>
//               <SlPencil />
//             </button>
//           </div>
//           <button className="toggle-expand-button" onClick={handleToggleExpand}>
//             <SlArrowDown className={`expand-icon ${isExpanded ? 'flipped' : ''}`} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserCard;






import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import './UserCard.css';
import { SlPencil } from 'react-icons/sl';
import { User } from '../../hooks/User';
import StatusSwitch from '../StatusSwitch/StatusSwitch';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleClearPassword = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found.');
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.put(
        'https://emmanuel.somee.com/api/v1/Users/CleanPassword',
        { userName: user.userName },
        config
      );
      alert('Password cleared successfully.');
    } catch (error) {
      console.error('Error clearing password:', error);
      alert('Failed to clear password.');
    }
  };

  const handleEditUser = () => {
    localStorage.setItem('selectedUser', JSON.stringify(user));
    navigate('edit-user');
  };

  return (
    <div className="user-card">
      <div className="user-info">
        <div className="user-field">{user.firstName}</div>
        <div className="user-field">{user.lastName}</div>
        <div className="user-field">{user.email}</div>
        <div className="user-field">{user.rolesName}</div>
        <div className="user-switch">
          <StatusSwitch row={user} />
        </div>

        {username === 'super.admin' && (
          <div className="user-field">
            <button className="clear-password-button" onClick={handleClearPassword}>
              Limpiar Contraseña
            </button>
            <button className="edit-icon" onClick={handleEditUser}>
              <SlPencil />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
