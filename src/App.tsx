// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './screens/Login/components/login/login';
// import Dashboard from './screens/Dashboard/dashboard';
// // import ProtectedRoute from './screens/Login/ProtectedRoute.tsx';
// import ProtectedDashboardRoute from './ProtectedDashboardRoute.tsx';
// import './App.css'

// const App = () => {
//     return (
//         <Router>
//             <div className='app'>
//                 <Routes>
//                     <Route path="/" element={<Login/>}/>
//                     <Route 
//   path="/dashboard/*" 
//   element={
//     <ProtectedDashboardRoute>
//       <Dashboard />
//     </ProtectedDashboardRoute>
//   }
// />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;





import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/components/login/login';
import Dashboard from './screens/Dashboard/dashboard';
import ProtectedDashboardRoute from './ProtectedDashboardRoute.tsx';
import MisDatos from './screens/MisDatos/MisDatos';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Ruta de Login */}
          <Route path="/" element={<Login />} />
          
          {/* Ruta protegida para el Dashboard */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedDashboardRoute>
                <Dashboard />
              </ProtectedDashboardRoute>
            }
          />

          {/* Ruta protegida para MisDatos */}
          <Route
            path="/MisDatos"
            element={
           
                <MisDatos />
              
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
