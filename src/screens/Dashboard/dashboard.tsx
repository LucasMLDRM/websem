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

// const Dashboard = () => {
//   const location = useLocation();

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="dashboard-content">
//         <SwitchTransition mode="out-in">
//           <CSSTransition
//             key={location.pathname} // Cambia cuando la ruta cambia
//             classNames="fade" // Clases para la animación
//             timeout={300} // Duración de la transición en ms
//           >
//             <Routes location={location}>
//               <Route path="inicio" element={<Home />} />
//               <Route path="usuarios" element={<Usuarios />} />
//               <Route path="pacientes" element={<Usuarios />} />
//               <Route path="profile" element={<Profile />} />
//               <Route path='usuarios/createuser' element={<CreateUser />} />
//               <Route path='usuarios/edit-user' element={<EditUser />} />
//               <Route path='planillas' element={<Planillas />} />
//               <Route path='planillas/vista' element={<ViewPlan />} />
//               <Route path='turnos' element={<Turnos />} />
//               <Route path='auditoria' element={<AuditoriaClinica />} />
//               <Route path='notificaciones' element={<NotificationPopup />} />
//               <Route path='reportes' element={<ReportsTable />} />
//               <Route path='relojfichada' element={<RelojFichada />} />
//             </Routes>
//           </CSSTransition>
//         </SwitchTransition>
//       </div>
//     </div>
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

const Dashboard = () => {
  const location = useLocation();

  return (
<div className="dashboard">
  <Sidebar />
  <div className="dashboard-content">
    <div className="dashboard-header">
      <div className="super-admin-badge">Super admin</div>
    </div>
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
          <Route path='usuarios/createuser' element={<CreateUser />} />
          <Route path='usuarios/edit-user' element={<EditUser />} />
          <Route path='planillas' element={<Planillas />} />
          <Route path='planillas/vista' element={<ViewPlan />} />
          <Route path='turnos' element={<Turnos />} />
          <Route path='auditoria' element={<AuditoriaClinica />} />
          <Route path='notificaciones' element={<NotificationPopup />} />
          <Route path='reportes' element={<ReportsTable />} />
          <Route path='relojfichada' element={<RelojFichada />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  </div>
</div>

  );
};

export default Dashboard;
