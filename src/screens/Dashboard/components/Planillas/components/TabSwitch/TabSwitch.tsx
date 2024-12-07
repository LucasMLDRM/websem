import React from 'react';
import './StatusSwitch.css';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;

