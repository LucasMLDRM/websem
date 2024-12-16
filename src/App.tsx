import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/Login/components/login/login';
import Dashboard from './screens/Dashboard/dashboard';
import ProtectedRoute from './screens/Login/ProtectedRoute.tsx';
import './App.css'

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/dashboard/*" 
                           element={
                           <ProtectedRoute>
                            <Dashboard/>
                           </ProtectedRoute>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;