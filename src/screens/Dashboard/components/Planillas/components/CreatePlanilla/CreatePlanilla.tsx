// import React, { useState } from 'react';
// import axios from 'axios';
// import StepsTable from '../ViewPlan/components/StepsTable/StepsTable';
// import { Step } from '../../types';

// const CreatePlanilla: React.FC = () => {
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');
//       const newPlanilla = {
//         name,
//         description,
//         steps, // Incluye los steps en la nueva planilla
//         createdAt: new Date().toISOString(),
//         createdByName: 'Usuario', // Ajusta según corresponda
//         isEnabled: true, // Asumiendo que la planilla se crea habilitada
//       };

//       // Realiza el POST para crear la nueva planilla
//       const response = await axios.post('https://emmanuel.somee.com/api/v1/Spreadsheets', newPlanilla, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       // Si es exitoso, redirige a la vista de la planilla creada
//       const createdPlanilla = response.data;
//       localStorage.setItem('selectedPlanilla', JSON.stringify(createdPlanilla));
//       window.location.href = `/dashboard/planillas/${createdPlanilla.id}`;
//     } catch (error) {
//       console.error('Error al crear la planilla:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Crear Nueva Planilla</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Nombre de la Planilla"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <textarea
//           placeholder="Descripción de la Planilla"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={setSteps} />
//       <button onClick={handleSave} disabled={loading}>
//         {loading ? 'Guardando...' : 'Guardar'}
//       </button>
//     </div>
//   );
// };

// export default CreatePlanilla;











// import React, { useState } from 'react';
// import axios from 'axios';
// import StepsTable from '../ViewPlan/components/StepsTable/StepsTable';
// import { Step } from '../../types';

// const CreatePlanilla: React.FC = () => {
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     if (!name || !description) {
//       alert('Por favor, complete todos los campos.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');

//       const newPlanilla = {
//         name,
//         description,
//         steps, // Incluye los steps en la nueva planilla
//         createdAt: new Date().toISOString(),
//         createdByName: 'Usuario', // Ajusta según corresponda
//         isEnabled: true, // Asumiendo que la planilla se crea habilitada
//       };

//       console.log('Creando planilla con los siguientes datos:', newPlanilla); // Verifica los datos

//       // Realiza el POST para crear la nueva planilla
//       const response = await axios.post('https://emmanuel.somee.com/api/v1/Spreadsheets', newPlanilla, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       // Si es exitoso, redirige a la vista de la planilla creada
//       const createdPlanilla = response.data;
//       localStorage.setItem('selectedPlanilla', JSON.stringify(createdPlanilla));
//       window.location.href = `/dashboard/planillas/${createdPlanilla.id}`;
//     } catch (error) {
//       console.error('Error al crear la planilla:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Crear Nueva Planilla</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Nombre de la Planilla"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Descripción de la Planilla"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={setSteps} />
//       <button onClick={handleSave} disabled={loading}>
//         {loading ? 'Guardando...' : 'Guardar'}
//       </button>
//     </div>
//   );
// };

// export default CreatePlanilla;









// import React, { useState } from 'react';
// import axios from 'axios';
// import StepsTable from '../ViewPlan/components/StepsTable/StepsTable';
// import { Step } from '../../types';

// const CreatePlanilla: React.FC = () => {
//   const [steps, setSteps] = useState<Step[]>([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     if (!name || !description) {
//       alert('Por favor, complete todos los campos.');
//       return;
//     }

//     try {
//       setLoading(true);
//       const token = localStorage.getItem('token');

//       const newPlanilla = {
//         name,
//         description,
//         steps,
//         createdAt: new Date().toISOString(),
//         createdByName: 'Usuario',
//         isEnabled: true,
//       };

//       console.log('Creando planilla con los siguientes datos:', newPlanilla);

//       const response = await axios.post('https://emmanuel.somee.com/api/v1/Spreadsheets', newPlanilla, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       const createdPlanilla = response.data;
//       localStorage.setItem('selectedPlanilla', JSON.stringify(createdPlanilla));
//       window.location.href = `/dashboard/planillas`;
//     } catch (error) {
//       console.error('Error al crear la planilla:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Crear Nueva Planilla</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Nombre de la Planilla"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Descripción de la Planilla"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <StepsTable initialSteps={steps} onStepsChange={setSteps} />
//       <button onClick={handleSave} disabled={loading}>
//         {loading ? 'Guardando...' : 'Guardar'}
//       </button>
//     </div>
//   );
// };

// export default CreatePlanilla;











// import React, { useState } from 'react';
// import axios from 'axios';
// import { TbX } from 'react-icons/tb';
// import './CreatePlanilla.css';

// interface CreatePlanillaProps {
//   onClose: () => void;
//   onSuccess: () => void;
// }

// const CreatePlanilla: React.FC<CreatePlanillaProps> = ({ onClose, onSuccess }) => {
//   const [planillaName, setPlanillaName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleCreatePlanilla = async () => {
//     if (planillaName.trim() === '') {
//       alert('El nombre de la planilla no puede estar vacío.');
//       return;
//     }

//     setLoading(true);

//     try {
//       await axios.post(
//         'https://emmanuel.somee.com/api/v1/Spreadsheets',
//         {
//           name: planillaName,
//           description: 'esto es una planilla para todos'
//         },
//         {
//           headers: {
//             'Authorization': `Bearer ${localStorage.getItem('token')}`
//           }
//         }
//       );

//       alert('Planilla creada con éxito');
//       onSuccess();
//       onClose();
//     } catch (error) {
//       console.error('Error al crear la planilla:', error);
//       alert('Ocurrió un error al crear la planilla. Intenta nuevamente.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="create-planilla-overlay">
//       <div className="create-planilla-modal">
//         <div className="modal-header">
//           <h2>Crear Nueva Planilla</h2>
//           <button className="close-button" onClick={onClose}>
//             <TbX />
//           </button>
//         </div>
//         <div className="modal-content">
//           <label>
//             Nombre de la Planilla:
//             <input
//               type="text"
//               value={planillaName}
//               onChange={(e) => setPlanillaName(e.target.value)}
//               placeholder="Ingrese el nombre de la planilla"
//             />
//           </label>
//         </div>
//         <div className="modal-footer">
//           <button className="create-button" onClick={handleCreatePlanilla} disabled={loading}>
//             {loading ? 'Creando...' : 'Crear Planilla'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreatePlanilla;












import React, { useState } from 'react';
import axios from 'axios';
import { TbX } from 'react-icons/tb';
import './CreatePlanilla.css';

interface CreatePlanillaProps {
  onClose: () => void;
  onSuccess: () => void;
}

const CreatePlanilla: React.FC<CreatePlanillaProps> = ({ onClose, onSuccess }) => {
  const [planillaName, setPlanillaName] = useState('');
  const [description, setDescription] = useState(''); // Estado para la descripción
  const [loading, setLoading] = useState(false);

  const handleCreatePlanilla = async () => {
    if (planillaName.trim() === '') {
      alert('El nombre de la planilla no puede estar vacío.');
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        'https://emmanuel.somee.com/api/v1/Spreadsheets',
        {
          name: planillaName,
          description: description || 'esto es una planilla para todos' // Utiliza la descripción ingresada por el usuario o un valor por defecto
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      alert('Planilla creada con éxito');
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error al crear la planilla:', error);
      alert('Ocurrió un error al crear la planilla. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-planilla-overlay">
      <div className="create-planilla-modal">
        <div className="modal-header">
          <h2>Crear Nueva Planilla</h2>
          <button className="close-button" onClick={onClose}>
            <TbX />
          </button>
        </div>
        <div className="modal-content">
          <label>
            Nombre de la Planilla:
            <input
              type="text"
              value={planillaName}
              onChange={(e) => setPlanillaName(e.target.value)}
              placeholder="Ingrese el nombre de la planilla"
            />
          </label>
          <label>
            Descripción de la Planilla:
            <textarea
              className='desc-input'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese una descripción para la planilla"
            />
          </label>
        </div>
        <div className="modal-footer">
          <button className="create-button" onClick={handleCreatePlanilla} disabled={loading}>
            {loading ? 'Creando...' : 'Crear Planilla'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlanilla;
