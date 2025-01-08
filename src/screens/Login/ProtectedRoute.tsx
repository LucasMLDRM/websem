// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';

// interface ProtectedRouteProps {
//   children: JSX.Element;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const location = useLocation();
//   const token = localStorage.getItem('token');

//   if (!token) {
//     return <Navigate to="/" state={{ from: location }} />;
//   }

//   return children;
// };

// export default ProtectedRoute;



import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const roles = JSON.parse(localStorage.getItem('roles') || '[]'); // Asegúrate de guardar roles como array en el localStorage.

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Verificar si el usuario tiene permiso para acceder al Dashboard
  if (roles.includes('Paciente') || roles.includes('Familiar')) {
    return <Navigate to="/MisDatos" replace />;
  }

  return children;
};

export default ProtectedRoute;
