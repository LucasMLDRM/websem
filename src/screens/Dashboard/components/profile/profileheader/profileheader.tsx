import React from 'react';
import './profileheader.css'; // Asegúrate de crear un archivo CSS para los estilos del HeaderPlanillas
import { FaRegUser } from "react-icons/fa6"; 



const Profileheader: React.FC = () => {
  return (
    <div className="header-planillas-container">
      <h1 className="header-planillas-title">
        <FaRegUser />
        Mi Perfil
      </h1>
    </div>
  );
};

export default Profileheader;