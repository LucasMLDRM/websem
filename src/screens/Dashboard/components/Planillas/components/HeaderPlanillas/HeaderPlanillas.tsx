// // HeaderPlanillas.tsx
// import React from 'react';
// import './HeaderPlanillas.css'; // Asegúrate de crear un archivo CSS para los estilos del HeaderPlanillas

// interface HeaderPlanillasProps {
//   searchTerm: string;
//   onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const HeaderPlanillas: React.FC<HeaderPlanillasProps> = ({ searchTerm, onSearchChange }) => {
//   return (
//     <div className="header-planillas-container">
//       <div className='cnt-txt'>
//       <h1 className="header-planillas-title">Planillas</h1>

//       <input
//         type="text"
//         value={searchTerm}
//         onChange={onSearchChange}
//         className="header-planillas-search-input"
//         placeholder="Buscar planillas..."
//       />
//             </div>
//     </div>
//   );
// };

// export default HeaderPlanillas;







// import React from 'react';
// import './HeaderPlanillas.css'; // Asegúrate de crear un archivo CSS para los estilos del HeaderPlanillas
// import { BiSpreadsheet } from "react-icons/bi";

// interface HeaderPlanillasProps {
//   searchTerm: string;
//   onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const HeaderPlanillas: React.FC<HeaderPlanillasProps> = ({ searchTerm, onSearchChange }) => {
//   return (
//     <div className="header-planillas-container">
//       <h1 className="header-planillas-title"><BiSpreadsheet />Planillas</h1>
      
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={onSearchChange}
//         className="header-planillas-search-input"
//         placeholder="    Buscador ..."
//       />
//     </div>
//   );
// };

// export default HeaderPlanillas;



import React from 'react';
import './HeaderPlanillas.css'; // Asegúrate de crear un archivo CSS para los estilos del HeaderPlanillas
import { FaRegUser } from "react-icons/fa6"; 

interface HeaderPlanillasProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderPlanillas: React.FC<HeaderPlanillasProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="header-planillas-container">
      <h1 className="header-planillas-title">
      <FaRegUser/>
        Planillas
      </h1>
      
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="header-planillas-search-input"
        placeholder="    Buscador ..."
      />
    </div>
  );
};

export default HeaderPlanillas;
