// import { Routes, Route, useLocation } from 'react-router-dom';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
// import Sidebar from './components/sidebar/sidebar';
// import './dashboard.css';
// import Usuarios from './components/Usuarios/usuarios.tsx';
// import CreateUser from './components/CreateUser/createuser.tsx';
// import Profile from './components/profile/profile.tsx';
// import Home from './components/Home/Home.tsx';
// import EditUser from './components/EditUser/EditUser.tsx';
// import Planillas from './components/Planillas/Planillas.tsx';
// import ViewPlan from './components/Planillas/components/ViewPlan/ViewPlan.tsx';
// import Turnos from './components/turnos/turnos.tsx';
// import AuditoriaClinica from './components/auditoria/auditoria.tsx';
// import NotificationPopup from './components/Notification/notificationPopup.tsx';
// import ReportsTable from './components/Reportes/reportes.tsx';
// import RelojFichada from './components/RelojFichada/RelojFichada.tsx';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const location = useLocation();

//   const navigate = useNavigate();
//   const roles = JSON.parse(localStorage.getItem('roles') || '[]');

//   useEffect(() => {
//     // Redirige si el rol no es válido
//     if (roles.includes('Paciente') || roles.includes('Familiar')) {
//       navigate('/MisDatos', { replace: true });
//     }
//   }, [roles, navigate]);

//   return (
// <div className="dashboard">
//   <Sidebar />
//   <div className="dashboard-content">

//     <SwitchTransition mode="out-in">
//       <CSSTransition
//         key={location.pathname}
//         classNames="fade"
//         timeout={300}
//       >
//         <Routes location={location}>
//           <Route path="inicio" element={<Home />} />
//           <Route path="usuarios" element={<Usuarios />} />
//           <Route path="pacientes" element={<Usuarios />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path='usuarios/createuser' element={<CreateUser />} />
//           <Route path='usuarios/edit-user' element={<EditUser />} />
//           <Route path='planillas' element={<Planillas />} />
//           <Route path='planillas/vista' element={<ViewPlan />} />
//           <Route path='turnos' element={<Turnos />} />
//           <Route path='auditoria' element={<AuditoriaClinica />} />
//           <Route path='notificaciones' element={<NotificationPopup />} />
//           <Route path='reportes' element={<ReportsTable />} />
//           <Route path='relojfichada' element={<RelojFichada />} />
//         </Routes>
//       </CSSTransition>
//     </SwitchTransition>
//   </div>
// </div>

//   );
// };

// export default Dashboard;









import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Sidebar from './components/sidebar/sidebar';
import './dashboard.css';
import Usuarios from './components/Usuarios/usuarios.tsx';
import CreateUser from './components/CreateUser/createuser.tsx';
import Profile from './components/profile/profile.tsx';
import Home from './components/Home/Home.tsx';
import EditUser from './components/EditUser/EditUser.tsx';
import Planillas from './components/Planillas/Planillas.tsx';
import ViewPlan from './components/Planillas/components/ViewPlan/ViewPlan.tsx';
import Turnos from './components/turnos/turnos.tsx';
import AuditoriaClinica from './components/auditoria/auditoria.tsx';
import NotificationPopup from './components/Notification/notificationPopup.tsx';
import ReportsTable from './components/Reportes/reportes.tsx';
import RelojFichada from './components/RelojFichada/RelojFichada.tsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const roles = JSON.parse(localStorage.getItem('roles') || '[]'); // Obtener roles desde localStorage
    const token = localStorage.getItem('token'); // Verificar si hay un token válido

    // Redirige si no hay token o el usuario tiene roles restringidos
    if (!token || roles.includes('Paciente') || roles.includes('Familiar')) {
      navigate('/MisDatos', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <Routes location={location}>
              <Route path="inicio" element={<Home />} />
              <Route path="usuarios" element={<Usuarios />} />
              <Route path="pacientes" element={<Usuarios />} />
              <Route path="profile" element={<Profile />} />
              <Route path="usuarios/createuser" element={<CreateUser />} />
              <Route path="usuarios/edit-user" element={<EditUser />} />
              <Route path="planillas" element={<Planillas />} />
              <Route path="planillas/vista" element={<ViewPlan />} />
              <Route path="turnos" element={<Turnos />} />
              <Route path="auditoria" element={<AuditoriaClinica />} />
              <Route path="notificaciones" element={<NotificationPopup />} />
              <Route path="reportes" element={<ReportsTable />} />
              <Route path="relojfichada" element={<RelojFichada />} />
            </Routes>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default Dashboard;
