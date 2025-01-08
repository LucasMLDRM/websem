// import React from 'react';
// import './Home.css';
// import { Link } from 'react-router-dom';
// import Fakenillas from '../Planillas/Fakenillas';
// import logo from '../../../../assets/seramh.png'

// import { BsPerson } from "react-icons/bs";
// import { CiSquarePlus } from "react-icons/ci";
// import { CiViewList } from "react-icons/ci";
// import { BsCalendar2Week } from "react-icons/bs";
// import { BsLayoutTextSidebar } from "react-icons/bs";
// import { BsBell } from "react-icons/bs";
// import { BsJournalCheck } from "react-icons/bs";
// import { BsPersonPlus } from "react-icons/bs";


// const Home: React.FC = () => {

//   localStorage.setItem('planillas', JSON.stringify(Fakenillas));
//   return (
//     <div className="home-container">
//       <div className='welcome'>  
//       <h1 className="welcome-message"> <img className="logo" src={logo} alt="logo-seramh" /> 
//       <div className='cnt-txt'>Bienvenido a SERAMH</div>
//       </h1>
//       </div>

//       <div className="squares-container">

//         <div className="squares-row">
//           <div  className="square-text">

//           <div className="square">
//             <div className="cnt-ico-us">
//               <BsPerson className="cnt-ico-tur" />
//             </div>
//             <div className="txt">Gestionar Usuarios</div>

//             <div className="bottom-links">
//               <Link to="/dashboard/usuarios/createuser" className="bottom-link">
//                 <CiSquarePlus /> ALTA
//               </Link>
//               <Link to="/dashboard/usuarios" className="bottom-link">
//                 <CiViewList /> VER LISTADO
//               </Link>
//             </div>
//           </div>

//           </div>

//           <Link to="/dashboard/planillas" className='square-text'>
//           <div className="square">
//             <div className='cnt-ico-us'><BsLayoutTextSidebar className='cnt-ico-tur'/></div>
//             <div className='txt'>Planillas</div>
//           </div>
//           </Link>
          
//           {/* <Link to="/dashboard/usuarios" className='square-text' onClick={() => localStorage.setItem('userFilter', 'pacientes')}> */}
//           <Link 
//             to="/dashboard/pacientes" 
//             className="square-text" 
//             onClick={() => localStorage.setItem('userFilter', 'pacientes')}
//           >

//           <div className="square">
//             <div className='cnt-ico-us'><BsPersonPlus className='cnt-ico-tur'  /></div>
//             <div className='txt'>Pacientes</div>
//           </div>
//           </Link>
//         </div>

//         <div className="squares-row">
//           <Link to="/dashboard/turnos" className='square-text'>
          
//           <div className="square">
//             <div className='cnt-ico-us'><BsCalendar2Week className='cnt-ico-tur' /></div>
//             <div className='txt'>Turnos</div>
//           </div>
          
//           </Link>

//           <Link to="/dashboard/notificaciones" className='square-text'>
//           <div className="square">
//             <div className='cnt-ico-us'><BsBell className='cnt-ico-tur' /></div>
//             <div className='txt'>Notificaciónes</div>
//           </div>
//           </Link>

//           <Link to="/dashboard/auditoria" className='square-text'>
//           <div className="square">
//             <div className='cnt-ico-us'><BsJournalCheck className='cnt-ico-tur' /></div>
//             <div className='txt'>Auditoria</div>
//           </div>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Home;










import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Fakenillas from '../Planillas/Fakenillas';
import logo from '../../../../assets/seramh.png';

import { BsPerson } from "react-icons/bs";
import { CiSquarePlus, CiViewList } from "react-icons/ci";
import { BsCalendar2Week, BsLayoutTextSidebar, BsBell, BsJournalCheck, BsPersonPlus } from "react-icons/bs";

const Home: React.FC = () => {
  localStorage.setItem('planillas', JSON.stringify(Fakenillas));

  return (
    <div className="home-container">
      <div className="welcome">
        <h1 className="welcome-message">
          <img className="logo" src={logo} alt="logo-seramh" />
          <div className="cnt-txt">Bienvenido a SERAMH</div>
        </h1>
      </div>

      <div className="squares-container">
        <div className="squares-row">
          <div className="square-text">
            <div className="square">
              <div className="cnt-ico-us">
                <BsPerson className="cnt-ico-tur" />
              </div>
              <div className="txt">Gestionar Usuarios</div>
              <div className="bottom-links">
                <Link to="/dashboard/usuarios/createuser" className="bottom-link">
                  <CiSquarePlus /> ALTA
                </Link>
                <Link to="/dashboard/usuarios" className="bottom-link">
                  <CiViewList /> VER LISTADO
                </Link>
              </div>
            </div>
          </div>

          <Link to="/dashboard/planillas" className="square-text">
            <div className="square">
              <div className="cnt-ico-us">
                <BsLayoutTextSidebar className="cnt-ico-tur" />
              </div>
              <div className="txt">Planillas</div>
            </div>
          </Link>

          <Link to="/dashboard/pacientes" className="square-text" onClick={() => localStorage.setItem('userFilter', 'pacientes')}>
            <div className="square">
              <div className="cnt-ico-us">
                <BsPersonPlus className="cnt-ico-tur" />
              </div>
              <div className="txt">Pacientes</div>
            </div>
          </Link>
        </div>

        <div className="squares-row">
          <Link to="/dashboard/turnos" className="square-text">
            <div className="square">
              <div className="cnt-ico-us">
                <BsCalendar2Week className="cnt-ico-tur" />
              </div>
              <div className="txt">Turnos</div>
            </div>
          </Link>

          <Link to="/dashboard/notificaciones" className="square-text">
            <div className="square">
              <div className="cnt-ico-us">
                <BsBell className="cnt-ico-tur" />
              </div>
              <div className="txt">Notificaciónes</div>
            </div>
          </Link>

          <Link to="/dashboard/auditoria" className="square-text">
            <div className="square">
              <div className="cnt-ico-us">
                <BsJournalCheck className="cnt-ico-tur" />
              </div>
              <div className="txt">Auditoria</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
