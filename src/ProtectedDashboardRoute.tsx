import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedDashboardRouteProps {
  children: JSX.Element;
}

const ProtectedDashboardRoute: React.FC<ProtectedDashboardRouteProps> = ({ children }) => {
  const location = useLocation();
  const roles = JSON.parse(localStorage.getItem('roles') || '[]');

  // Redirige si el usuario no tiene permisos
  if (roles.includes('Paciente') || roles.includes('Familiar')) {
    return <Navigate to="/MisDatos" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedDashboardRoute;
