// import { useState } from 'react';
// import './Switch.css';

// const Switch: React.FC = () => {
//   const [checked, setChecked] = useState(true);

//   const handleChange = async () => {
//     const newChecked = !checked;
//     setChecked(newChecked);
//   };

//   return (
//     <div className="switch-container">
//       <label className="switch">
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={handleChange}
//         />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// };

// export default Switch;









// import { useState, useEffect } from 'react';
// import './Switch.css';

// type SwitchProps = {
//   isEnabled: boolean;
//   onToggle: () => void;
// };

// const Switch: React.FC<SwitchProps> = ({ isEnabled, onToggle }) => {
//   const [checked, setChecked] = useState(isEnabled);

//   useEffect(() => {
//     setChecked(isEnabled);
//   }, [isEnabled]);

//   const handleChange = () => {
//     const newChecked = !checked;
//     setChecked(newChecked);
//     onToggle();
//   };

//   return (
//     <div className="switch-container">
//       <label className="switch">
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={handleChange}
//         />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// };

// export default Switch;










import React from 'react';
import './Switch.css';

interface SwitchProps {
  isEnabled: boolean;
  onToggle: () => void; // Update the type to expect no arguments
}

const Switch: React.FC<SwitchProps> = ({ isEnabled, onToggle }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={onToggle} // This now matches the expected type
      />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;
