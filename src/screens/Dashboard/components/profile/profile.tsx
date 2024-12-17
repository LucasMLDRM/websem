import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BsFillPencilFill, BsFillEyeFill } from 'react-icons/bs';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './profile.css';
import Profileheader from './profileheader/profileheader';

const Profile: React.FC = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    userName: '',
    profileURL: '',
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [changePasswordError, setChangePasswordError] = useState<string | null>(null);

  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/getUserlogged', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleChangePassword = async () => {
    try {
      await axios.put(
        'https://emmanuel.somee.com/api/v1/Users/ChangePassword',
        {
          userName: userData.userName,
          password: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Contraseña cambiada exitosamente');
      setIsModalOpen(false);
    } catch (error) {
      setChangePasswordError(error instanceof Error ? error.message : 'Error desconocido');
      console.error('Error changing password:', error);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleChangePassword();
  };

  return (
    <div className="profile-cont">
      <Profileheader />

      <div className="pinky-header">
        <span className='text-header-table'> Perfil de usuario </span>
      </div>
      <div className="profile-card">
        <div className='column-items1'>
          <div className="profile-item">
            <span className="profile-label">Usuario:</span> 
          </div>
          <div className="profile-item">
            <span className="profile-label">Nombre Completo:</span> 
          </div>
          <div className="profile-item">
            <span className="profile-label">Rol:</span> 
          </div>
          <div className="profile-item">
            <span className="profile-label">Email:</span>
          </div>
          <div className="profile-item-password">
            <span className="profile-label">Contraseña: </span> 
          </div>
        </div>
        <div className='column-items2'>
          <div className="profile-item">
            <span className='profile-content'>{userData.userName}</span>
          </div>
          <div className="profile-item">
            <span className='profile-content'> {userData.firstName} {userData.lastName} </span>
          </div>
          <div className="profile-item">
            <span className='profile-content'> {userData.role} </span>
          </div>
          <div className="profile-item">
            <span className='profile-content'> {userData.email} </span>
          </div>
          <div className='profile-item-password'>
            <div className='profile-container-icons-edit'>
              <BsFillEyeFill size={18} color='#6D6D6D' className='icon'/><span className='text-icon'>Ver</span>   <BsFillPencilFill size={18} color='#6D6D6D' className='icon'/><span className='text-icon'>Editar</span>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => setIsModalOpen(true)} className="change-password-button">
        <span className='save-button'>Cambiar Contraseña</span>
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-modal" onClick={() => setIsModalOpen(false)}>
              &times;
            </div>
            <h2>Cambiar Contraseña</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="currentPassword">Contraseña Actual</label>
                <div className="password-field">
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    id="currentPassword"
                    name="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    onClick={() => setChangePasswordError(null)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="show-password-button"
                  >
                    {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="input-container">
                <label htmlFor="newPassword">Nueva Contraseña</label>
                <div className="password-field">
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onClick={() => setChangePasswordError(null)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="show-password-button"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {changePasswordError && <div className="error">{changePasswordError}</div>}

              <button type="submit" className="submit-pass">Enviar</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="cancel-btn">
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
