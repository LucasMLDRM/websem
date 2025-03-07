import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
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
        { isOpen ? <FaTimes /> : <FaBars />}
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
            <li>
              <Link to="AltaModif" onClick={handleLinkClick}>Alta / Modificación</Link>
            </li>
            <li>
              <Link to="Medicacion" onClick={handleLinkClick}>Medicacion</Link>
            </li>
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
