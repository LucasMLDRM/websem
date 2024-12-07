import { useNavigate } from 'react-router-dom';

const TestNavigation = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/dashboard/usuarios');
  };

  return <button onClick={handleClick}>Go to Usuarios</button>;
};

export default TestNavigation;
