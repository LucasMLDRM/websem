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
//     rolesName: [],
//   });
//   const [formErrors, setFormErrors] = useState<FormErrors>({});
//   const [errorVisible, setErrorVisible] = useState<{ [key: string]: boolean }>({});
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [createError, setCreateError] = useState<string | null>(null);
//   const [isCreated, setIsCreated] = useState<boolean>(false);
//   const { roles } = useFetchRoles();

//   const fieldLabels: { [key: string]: string } = {
//     displayName: 'Nombre para mostrar',
//     userName: 'Nombre de usuario',
//     email: 'Correo electrónico',
//     firstName: 'Nombre',
//     lastName: 'Apellido',
//     birthDate: 'Fecha de nacimiento',
//     documentNumber: 'Número de documento',
//     address: 'Dirección',
//     location: 'Ubicación',
//     province: 'Provincia',
//     postalCode: 'Código postal',
//     phoneNumber: 'Teléfono',
//     phoneNumber2: 'Teléfono alternativo',
//     observations: 'Observaciones',
//     profession: 'Profesión',
//     rolesName: 'Roles',
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     const newValue = name === 'profession' ? parseInt(value, 10) : value;
//     setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
//     setErrorVisible((prev) => ({ ...prev, [name]: false })); 
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
//     setErrorVisible((prev) => ({ ...prev, rolesName: false })); 
//   };

//   const handleErrorClose = (field: string) => {
//     setErrorVisible((prev) => ({ ...prev, [field]: false }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await validationCreate.validate(formValues, { abortEarly: false });

//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('No se encontró el token.');

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

//       await axios.post('https://emmanuel.somee.com/api/v1/Users', valuesToSend, config);
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
//         setErrorVisible(Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
//       } else if (axios.isAxiosError(error) && error.response) {
//         const responseData = error.response.data;
//         setCreateError(JSON.stringify(responseData));
//       } else {
//         setCreateError('Error creando el usuario');
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Variable para verificar si el rol "Profesional" está seleccionado
//   const isProfessionalRoleSelected = formValues.rolesName.includes("Profesional");

//   return (
//     <div className="forma-container">
//       <div className="back-button" onClick={() => window.history.back()}>
//         <i className="fas fa-arrow-left"></i>
//       </div>
//       <h1 className='title-create'>Crear Usuario</h1>
//       <form className="user-form" onSubmit={handleSubmit}>
//         {Object.keys(formValues).map((key) => (
//           (key !== 'profession' && key !== 'rolesName') && (
//             <div className={`input-container ${formErrors[key] && errorVisible[key] ? 'error' : ''}`} key={key}>
//               <label htmlFor={key} className="labl">
//                 {fieldLabels[key] || key}:
//               </label>
//               <input
//                 className='inp-create'
//                 type={key === 'birthDate' ? 'date' : 'text'}
//                 name={key}
//                 id={key}
//                 value={formValues[key as keyof FormValues]}
//                 onChange={handleChange}
//                 onFocus={() => setErrorVisible((prev) => ({ ...prev, [key]: false }))}
//               />
//               {formErrors[key] && errorVisible[key] && (
//                 <div className="error-tooltip">
//                   <span>{formErrors[key]}</span>
//                   <button type="button" className="error-close" onClick={() => handleErrorClose(key)}>×</button>
//                 </div>
//               )}
//             </div>
//           )
//         ))}
        
//         {/* Campo de selección de Roles */}
//         <div className={`input-container ${formErrors.rolesName && errorVisible.rolesName ? 'error' : ''}`}>
//           <label htmlFor="rolesName" className="labl">{fieldLabels.rolesName}:</label>
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
//           {formErrors.rolesName && errorVisible.rolesName && (
//             <div className="error-tooltip">
//               <span>{formErrors.rolesName}</span>
//               <button type="button" className="error-close" onClick={() => handleErrorClose('rolesName')}>×</button>
//             </div>
//           )}
//         </div>

//         {/* Campo de Profesión solo si el rol "Profesional" está seleccionado */}
//         {isProfessionalRoleSelected && (
//           <div className={`input-container ${formErrors.profession && errorVisible.profession ? 'error' : ''}`}>
//             <label htmlFor="profession" className="labl">{fieldLabels.profession}:</label>
//             <select
//               className='inp-create'
//               name="profession"
//               id="profession"
//               value={formValues.profession}
//               onChange={handleChange}
//             >
//               <option value={0}>Ninguna</option>
//               <option value={1}>Psicólogo</option>
//               <option value={2}>Clínico</option>
//               <option value={3}>Traumatólogo</option>
//             </select>
//             {formErrors.profession && errorVisible.profession && (
//               <div className="error-tooltip">
//                 <span>{formErrors.profession}</span>
//                 <button type="button" className="error-close" onClick={() => handleErrorClose('profession')}>×</button>
//               </div>
//             )}
//           </div>
//         )}

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





// import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
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
//     rolesName: [],
//   });
//   const [formErrors, setFormErrors] = useState<FormErrors>({});
//   const [errorVisible, setErrorVisible] = useState<{ [key: string]: boolean }>({});
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [createError, setCreateError] = useState<string | null>(null);
//   const [isCreated, setIsCreated] = useState<boolean>(false);
//   const { roles } = useFetchRoles();

//   const [patients, setPatients] = useState([]);
//   const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

//   const fieldLabels: { [key: string]: string } = {
//     displayName: 'Nombre para mostrar',
//     userName: 'Nombre de usuario',
//     email: 'Correo electrónico',
//     firstName: 'Nombre',
//     lastName: 'Apellido',
//     birthDate: 'Fecha de nacimiento',
//     documentNumber: 'Número de documento',
//     address: 'Dirección',
//     location: 'Ubicación',
//     province: 'Provincia',
//     postalCode: 'Código postal',
//     phoneNumber: 'Teléfono',
//     phoneNumber2: 'Teléfono alternativo',
//     observations: 'Observaciones',
//     profession: 'Profesión',
//     rolesName: 'Roles',
//   };

//   useEffect(() => {
//     if (formValues.rolesName.includes('Familiar')) {
//       const fetchPatients = async () => {
//         try {
//           const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Familiar');
//           setPatients(response.data);
//         } catch (error) {
//           console.error('Error fetching patients:', error);
//         }
//       };
//       fetchPatients();
//     } else {
//       setPatients([]);
//       setSelectedPatientId(null);
//     }
//   }, [formValues.rolesName]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     const newValue = name === 'profession' ? parseInt(value, 10) : value;
//     setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
//     setErrorVisible((prev) => ({ ...prev, [name]: false })); 
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
//     setErrorVisible((prev) => ({ ...prev, rolesName: false })); 
//   };

//   const handlePatientChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedPatientId(parseInt(e.target.value, 10));
//   };

//   const handleErrorClose = (field: string) => {
//     setErrorVisible((prev) => ({ ...prev, [field]: false }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await validationCreate.validate(formValues, { abortEarly: false });

//       const token = localStorage.getItem('token');
//       if (!token) throw new Error('No se encontró el token.');

//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       };

//       const valuesToSend = {
//         ...formValues,
//         profession: Number(formValues.profession),
//         patientId: selectedPatientId,
//       };

//       await axios.post('https://emmanuel.somee.com/api/v1/Users', valuesToSend, config);
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
//         setErrorVisible(Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
//       } else if (axios.isAxiosError(error) && error.response) {
//         const responseData = error.response.data;
//         setCreateError(JSON.stringify(responseData));
//       } else {
//         setCreateError('Error creando el usuario');
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="forma-container">
//       <div className="back-button" onClick={() => window.history.back()}>
//         <i className="fas fa-arrow-left"></i>
//       </div>
//       <h1 className='title-create'>Crear Usuario</h1>
//       <form className="user-form" onSubmit={handleSubmit}>
//         {Object.keys(formValues).map((key) => (
//           (key !== 'profession' && key !== 'rolesName') && (
//             <div className={`input-container ${formErrors[key] && errorVisible[key] ? 'error' : ''}`} key={key}>
//               <label htmlFor={key} className="labl">
//                 {fieldLabels[key] || key}:
//               </label>
//               <input
//                 className='inp-create'
//                 type={key === 'birthDate' ? 'date' : 'text'}
//                 name={key}
//                 id={key}
//                 value={formValues[key as keyof FormValues]}
//                 onChange={handleChange}
//                 onFocus={() => setErrorVisible((prev) => ({ ...prev, [key]: false }))}
//               />
//               {formErrors[key] && errorVisible[key] && (
//                 <div className="error-tooltip">
//                   <span>{formErrors[key]}</span>
//                   <button type="button" className="error-close" onClick={() => handleErrorClose(key)}>×</button>
//                 </div>
//               )}
//             </div>
//           )
//         ))}

//         {/* Campo de selección de Roles */}
//         <div className={`input-container ${formErrors.rolesName && errorVisible.rolesName ? 'error' : ''}`}>
//           <label htmlFor="rolesName" className="labl">{fieldLabels.rolesName}:</label>
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
//           {formErrors.rolesName && errorVisible.rolesName && (
//             <div className="error-tooltip">
//               <span>{formErrors.rolesName}</span>
//               <button type="button" className="error-close" onClick={() => handleErrorClose('rolesName')}>×</button>
//             </div>
//           )}
//         </div>

//         {/* Selector de pacientes si el rol Familiar está seleccionado */}
//         {formValues.rolesName.includes('Familiar') && (
//           <div className="input-container">
//             <label htmlFor="patient" className="labl">Seleccione un Paciente:</label>
//             <select
//               className='inp-create'
//               id="patient"
//               value={selectedPatientId || ''}
//               onChange={handlePatientChange}
//             >
//               <option value="">Seleccione un paciente</option>
//               {patients.map((patient) => (
//                 <option key={patient.id} value={patient.id}>
//                   {`${patient.firstName} ${patient.lastName}`}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

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






import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './createuser.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useFetchRoles from './Hook/useFetchRoles';
import { FormValues, FormErrors, Role } from './Hook/types';
import validationCreate from '../CreateUser/Hook/validationCreate';
import * as Yup from 'yup';

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
    rolesName: [],
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [errorVisible, setErrorVisible] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const { roles } = useFetchRoles();

  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

  const fieldLabels: { [key: string]: string } = {
    displayName: 'Nombre para mostrar',
    userName: 'Nombre de usuario',
    email: 'Correo electrónico',
    firstName: 'Nombre',
    lastName: 'Apellido',
    birthDate: 'Fecha de nacimiento',
    documentNumber: 'Número de documento',
    address: 'Dirección',
    location: 'Ubicación',
    province: 'Provincia',
    postalCode: 'Código postal',
    phoneNumber: 'Teléfono',
    phoneNumber2: 'Teléfono alternativo',
    observations: 'Observaciones',
    profession: 'Profesión',
    rolesName: 'Roles',
  };

  // useEffect(() => {
  //   if (formValues.rolesName.includes('Familiar')) {
  //     const fetchPatients = async () => {
  //       try {
  //         const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Familiar');
  //         setPatients(response.data);
  //       } catch (error) {
  //         console.error('Error fetching patients:', error);
  //       }
  //     };
  //     fetchPatients();
  //   } else {
  //     setPatients([]);
  //     setSelectedPatientId(null);
  //   }
  // }, [formValues.rolesName]);

  useEffect(() => {
    if (formValues.rolesName.includes('Familiar')) {
      const fetchPatients = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) throw new Error('No se encontró el token.');

          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

          const response = await axios.get('https://emmanuel.somee.com/api/v1/Users/GetByRol/Paciente', config);
          setPatients(response.data);
        } catch (error) {
          console.error('Error fetching patients:', error);
        }
      };
      fetchPatients();
    } else {
      setPatients([]);
      setSelectedPatientId(null);
    }
  }, [formValues.rolesName]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'profession' ? parseInt(value, 10) : value;
    setFormValues((prevValues) => ({ ...prevValues, [name]: newValue }));
    setErrorVisible((prev) => ({ ...prev, [name]: false })); 
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
    setErrorVisible((prev) => ({ ...prev, rolesName: false })); 
  };

  const handlePatientChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPatientId(parseInt(e.target.value, 10));
  };

  const handleErrorClose = (field: string) => {
    setErrorVisible((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await validationCreate.validate(formValues, { abortEarly: false });

      const token = localStorage.getItem('token');
      if (!token) throw new Error('No se encontró el token.');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const valuesToSend = {
        ...formValues,
        profession: Number(formValues.profession),
        patientId: selectedPatientId,
      };

      await axios.post('https://emmanuel.somee.com/api/v1/Users', valuesToSend, config);
      setIsCreated(true);
      setTimeout(() => setIsCreated(false), 2000);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors: FormErrors = {};
        error.inner.forEach(err => {
          if (err.path) {
            errors[err.path as keyof FormErrors] = err.message;
          }
        });
        setFormErrors(errors);
        setErrorVisible(Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      } else if (axios.isAxiosError(error) && error.response) {
        const responseData = error.response.data;
        setCreateError(JSON.stringify(responseData));
      } else {
        setCreateError('Error creando el usuario');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forma-container">
      <div className="back-button" onClick={() => window.history.back()}>
        <i className="fas fa-arrow-left"></i>
      </div>
      <h1 className='title-create'>Crear Usuario</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        {Object.keys(formValues).map((key) => (
          (key !== 'profession' && key !== 'rolesName') && (
            <div className={`input-container ${formErrors[key] && errorVisible[key] ? 'error' : ''}`} key={key}>
              <label htmlFor={key} className="labl">
                {fieldLabels[key] || key}:
              </label>
              <input
                className='inp-create'
                type={key === 'birthDate' ? 'date' : 'text'}
                name={key}
                id={key}
                value={formValues[key as keyof FormValues]}
                onChange={handleChange}
                onFocus={() => setErrorVisible((prev) => ({ ...prev, [key]: false }))}
              />
              {formErrors[key] && errorVisible[key] && (
                <div className="error-tooltip">
                  <span>{formErrors[key]}</span>
                  <button type="button" className="error-close" onClick={() => handleErrorClose(key)}>×</button>
                </div>
              )}
            </div>
          )
        ))}

        {/* Campo de selección de Roles */}
        <div className={`input-container ${formErrors.rolesName && errorVisible.rolesName ? 'error' : ''}`}>
          <label htmlFor="rolesName" className="labl">{fieldLabels.rolesName}:</label>
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
          {formErrors.rolesName && errorVisible.rolesName && (
            <div className="error-tooltip">
              <span>{formErrors.rolesName}</span>
              <button type="button" className="error-close" onClick={() => handleErrorClose('rolesName')}>×</button>
            </div>
          )}
        </div>

        {/* Selector de pacientes si el rol Familiar está seleccionado */}
        {formValues.rolesName.includes('Familiar') && (
          <div className="input-container">
            <label htmlFor="patient" className="labl">Seleccione un Paciente:</label>
            <select
              className='inp-create'
              name="patient"
              id="patient"
              value={selectedPatientId ?? ''}
              onChange={handlePatientChange}
            >
              <option value="">Seleccione un paciente</option>
              {patients.map((patient: any) => (
                <option key={patient.id} value={patient.id}>
                  {`${patient.firstName} ${patient.lastName}`}
                </option>
              ))}
            </select>
          </div>
        )}

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
