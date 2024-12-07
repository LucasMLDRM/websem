import { useState } from 'react';
import axios from 'axios';
import './StatusSwitch.css';

interface User {
  userName: string;
  isEnabled: boolean;
}

interface StatusSwitchProps {
  row: User;
}

const StatusSwitch: React.FC<StatusSwitchProps> = ({ row }) => {
  const [checked, setChecked] = useState<boolean>(row.isEnabled);

  const handleChange = async () => {
    const newChecked = !checked;
    setChecked(newChecked);

    console.log(`User ${row.userName} is now ${newChecked ? 'active' : 'inactive'}`);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found.');
      }

      const config = {
        headers: {
          'accept': 'text/plain',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      if (newChecked) {
        await axios.put(`https://emmanuel.somee.com/api/v1/Users/Enable/${row.userName}`, {}, config);
        console.log('User enabled successfully.');
      } else {
        await axios.delete(`https://emmanuel.somee.com/api/v1/Users/${row.userName}`, config);
        console.log('User disabled successfully.');
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default StatusSwitch;


