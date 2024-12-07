/* 

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './createuser.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useFetchRoles from './Hook/useFetchRoles';
import { FormValues, FormErrors, Role } from './Hook/types';

const CreateUser: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    displayName: '',
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    documentNumber: '',
    address: '',
    location: '',
    province: '',
    postalCode: 0,
    phoneNumber: '',
    phoneNumber2: '',
    observations: '',
    profession: 0,
    rolesName: [''],
  });
  const [formErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const { roles } = useFetchRoles();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'profession' ? parseInt(value, 10) : value;
    setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
  };

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedRoles: string[] = [];
    for (const option of options) {
      if (option.selected) {
        selectedRoles.push(option.value);
      }
    }
    setFormValues((prevValues) => ({ ...prevValues, rolesName: selectedRoles }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found.');
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const valuesToSend = {
        ...formValues,
        profession: Number(formValues.profession),
      };

      console.log("VALUES TO SEND: ", valuesToSend);
      await axios.post('https://emmanuel.somee.com/api/v1/Users', valuesToSend, config);

      console.log('User created successfully.');
      setIsCreated(true);
      setTimeout(() => setIsCreated(false), 2000);
    } catch (error) {
      setCreateError(error instanceof Error ? error.message : 'Error creating user');
      console.error('Error creating user:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="back-button" onClick={() => window.history.back()}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <h1 className='title-create'>Crear Usuario</h1>
      <form className="user-form" onSubmit={handleSubmit}>
      
        {Object.keys(formValues).map((key) => (
          (key !== 'profession' && key !== 'rolesName') && (
            <div key={key}>
              <label htmlFor={key} className="labl">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
              </label>
              <input
                className='inp-create'
                type={key === 'birthDate' ? 'date' : 'text'}
                name={key}
                id={key}
                value={formValues[key as keyof FormValues]}
                onChange={handleChange}
              />
              {formErrors[key] && <div className="error">{formErrors[key]}</div>}
            </div>
          )
        ))}
        <div>
          <label htmlFor="profession" className="labl">Profesión:</label>
          <select className='inp-create' name="profession" id="profession" value={formValues.profession} onChange={handleChange}>
            <option value={0}>Ninguna</option>
            <option value={1}>Psicólogo</option>
            <option value={2}>Clínico</option>
            <option value={3}>Traumatólogo</option>
          </select>
          {formErrors.profession && <div className="error">{formErrors.profession}</div>}
        </div>
        <div>
          <label htmlFor="rolesName" className="labl">Roles:</label>
          <select
            className='inp-create'
            name="rolesName"
            id="rolesName"
            multiple
            value={formValues.rolesName}
            onChange={handleRoleChange}
          >
            {roles.map((role: Role) => (
              <option key={role.id} value={role.name}>
                {role.name}
              </option>
            ))}
          </select>
          {formErrors.rolesName && <div className="error">{formErrors.rolesName}</div>}
        </div>
        <button className='submit-create' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creando...' : 'Crear'}
        </button>
        {isCreated && <i className="fas fa-check" style={{ marginLeft: '10px', color: 'green' }}></i>}
        {createError && <div className="error">Error: {createError}</div>}
      </form>
    </div>
  );
};

export default CreateUser;
 */
















// import { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';
// import './createuser.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import useFetchRoles from './Hook/useFetchRoles';
// import { FormValues, FormErrors, Role } from './Hook/types';

// const CreateUser: React.FC = () => {
//   const [formValues, setFormValues] = useState<FormValues>({
//     displayName: '',
//     userName: '',
//     email: '',
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     documentNumber: '',
//     address: '',
//     location: '',
//     province: '',
//     postalCode: 0, 
//     phoneNumber: '',
//     phoneNumber2: '',
//     observations: '',
//     profession: 0,
//     rolesName: [''],
//   });
//   const [formErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [createError, setCreateError] = useState<string | null>(null);
//   const [isCreated, setIsCreated] = useState<boolean>(false);
//   const { roles } = useFetchRoles();

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     console.log(`Field: ${name}, Value: ${value}`);
//     const newValue = name === 'profession' ? parseInt(value, 10) : value;
//     setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
//   };

//   const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const { options } = e.target;
//     const selectedRoles: string[] = [];
//     for (const option of options) {
//       if (option.selected) {
//         selectedRoles.push(option.value);
//       }
//     }
//     setFormValues((prevValues) => ({ ...prevValues, rolesName: selectedRoles }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found.');
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       };

//       const valuesToSend = {
//         ...formValues,
//         profession: Number(formValues.profession),
//       };

//       console.log("VALUES TO SEND: ", valuesToSend);
//       await axios.post('https://emmanuel.somee.com/api/v1/Users', valuesToSend, config);

//       console.log('User created successfully.');
//       setIsCreated(true);
//       setTimeout(() => setIsCreated(false), 2000);
//         } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       const responseData = error.response.data;
//       if (responseData && responseData.Message) {
//         setCreateError(responseData.Message);
//       } else {
//         setCreateError('Error creando el usuario');
//       }
//     } else {
//       setCreateError('Error creando el usuario');
//     }
//     console.error('Error creating user:', error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };
//   return (
//     <div className="form-container">
//       <div className="back-button" onClick={() => window.history.back()}>
//         <i className="fas fa-arrow-left"></i>
//       </div>
//       <h1 className='title-create'>Crear Usuario</h1>
//       <form className="user-form" onSubmit={handleSubmit}>
//         {Object.keys(formValues).map((key) => (
//           (key !== 'profession' && key !== 'rolesName') && (
//             <div key={key}>
//               <label htmlFor={key} className="labl">
//                 {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
//               </label>
//               <input
//                 className='inp-create'
//                 type={key === 'birthDate' ? 'date' : 'text'}
//                 name={key}
//                 id={key}
//                 value={formValues[key as keyof FormValues]}
//                 onChange={handleChange}
//               />
//               {formErrors[key] && <div className="error">{formErrors[key]}</div>}
//             </div>
//           )
//         ))}
//         <div>
//           <label htmlFor="profession" className="labl">Profesión:</label>
//           <select className='inp-create' name="profession" id="profession" value={formValues.profession} onChange={handleChange}>
//             <option value={0}>Ninguna</option>
//             <option value={1}>Psicólogo</option>
//             <option value={2}>Clínico</option>
//             <option value={3}>Traumatólogo</option>
//           </select>
//           {formErrors.profession && <div className="error">{formErrors.profession}</div>}
//         </div>
//         <div>
//           <label htmlFor="rolesName" className="labl">Roles:</label>
//           <select
//             className='inp-create'
//             name="rolesName"
//             id="rolesName"
//             multiple
//             value={formValues.rolesName}
//             onChange={handleRoleChange}
//           >
//             {roles.map((role: Role) => (
//               <option key={role.id} value={role.name}>
//                 {role.name}
//               </option>
//             ))}
//           </select>
//           {formErrors.rolesName && <div className="error">{formErrors.rolesName}</div>}
//         </div>
//         <button className='submit-create' type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Creando...' : 'Crear'}
//         </button>
//         {isCreated && <i className="fas fa-check" style={{ marginLeft: '10px', color: 'green' }}></i>}
//         {createError && (<div className="error">{createError}</div>)}
//       </form>
//     </div>
//   );
// };

// export default CreateUser;













// import { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';
// import './createuser.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import useFetchRoles from './Hook/useFetchRoles';
// import { FormValues, FormErrors, Role } from './Hook/types';
// import validationCreate from '../CreateUser/Hook/validationCreate';
// import * as Yup from 'yup';

// const CreateUser: React.FC = () => {
//   const [formValues, setFormValues] = useState<FormValues>({
//     displayName: '',
//     userName: '',
//     email: '',
//     firstName: '',
//     lastName: '',
//     birthDate: '',
//     documentNumber: '',
//     address: '',
//     location: '',
//     province: '',
//     postalCode: 0, 
//     phoneNumber: '',
//     phoneNumber2: '',
//     observations: '',
//     profession: 0,
//     rolesName: [''],
//   });
//   const [formErrors, setFormErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [createError, setCreateError] = useState<string | null>(null);
//   const [isCreated, setIsCreated] = useState<boolean>(false);
//   const { roles } = useFetchRoles();

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     const newValue = name === 'profession' ? parseInt(value, 10) : value;
//     setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
//   };

//   const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const { options } = e.target;
//     const selectedRoles: string[] = [];
//     for (const option of options) {
//       if (option.selected) {
//         selectedRoles.push(option.value);
//       }
//     }
//     setFormValues((prevValues) => ({ ...prevValues, rolesName: selectedRoles }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Validar el formulario con Yup antes de enviar
//       await validationCreate.validate(formValues, { abortEarly: false });

//       const token = localStorage.getItem('token');
//       if (!token) {
//         throw new Error('No token found.');
//       }

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       };

//       const valuesToSend = {
//         ...formValues,
//         profession: Number(formValues.profession),
//       };

//       console.log("VALUES TO SEND: ", valuesToSend);
//       await axios.post('https://emmanuel.somee.com/api/v1/Users', valuesToSend, config);

//       console.log('User created successfully.');
//       setIsCreated(true);
//       setTimeout(() => setIsCreated(false), 2000);
//     } catch (error) {
//       if (error instanceof Yup.ValidationError) {
//         const errors: FormErrors = {};
//         error.inner.forEach(err => {
//           if (err.path) {
//             errors[err.path as keyof FormErrors] = err.message;
//           }
//         });
//         setFormErrors(errors);
//       } else if (axios.isAxiosError(error) && error.response) {
//         const responseData = error.response.data;
//         setCreateError(JSON.stringify(responseData));
//       } else {
//         setCreateError('Error creando el usuario');
//       }
//       console.error('Error creating user:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="back-button" onClick={() => window.history.back()}>
//         <i className="fas fa-arrow-left"></i>
//       </div>
//       <h1 className='title-create'>Crear Usuario</h1>
//       <form className="user-form" onSubmit={handleSubmit}>
//         {Object.keys(formValues).map((key) => (
//           (key !== 'profession' && key !== 'rolesName') && (
//             <div key={key}>
//               <label htmlFor={key} className="labl">
//                 {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
//               </label>
//               <input
//                 className='inp-create'
//                 type={key === 'birthDate' ? 'date' : 'text'}
//                 name={key}
//                 id={key}
//                 value={formValues[key as keyof FormValues]}
//                 onChange={handleChange}
//               />
//               {formErrors[key] && <div className="error">{formErrors[key]}</div>}
//             </div>
//           )
//         ))}
//         <div>
//           <label htmlFor="profession" className="labl">Profesión:</label>
//           <select className='inp-create' name="profession" id="profession" value={formValues.profession} onChange={handleChange}>
//             <option value={0}>Ninguna</option>
//             <option value={1}>Psicólogo</option>
//             <option value={2}>Clínico</option>
//             <option value={3}>Traumatólogo</option>
//           </select>
//           {formErrors.profession && <div className="error">{formErrors.profession}</div>}
//         </div>
//         <div>
//           <label htmlFor="rolesName" className="labl">Roles:</label>
//           <select
//             className='inp-create'
//             name="rolesName"
//             id="rolesName"
//             multiple
//             value={formValues.rolesName}
//             onChange={handleRoleChange}
//           >
//             {roles.map((role: Role) => (
//               <option key={role.id} value={role.name}>
//                 {role.name}
//               </option>
//             ))}
//           </select>
//           {formErrors.rolesName && <div className="error">{formErrors.rolesName}</div>}
//         </div>
//         <button className='submit-create' type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Creando...' : 'Crear'}
//         </button>
//         {isCreated && <i className="fas fa-check" style={{ marginLeft: '10px', color: 'green' }}></i>}
//         {createError && <div className="error">Error: {createError}</div>}
//       </form>
//     </div>
//   );
// };

// export default CreateUser;