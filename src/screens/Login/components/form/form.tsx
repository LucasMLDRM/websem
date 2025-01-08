/* import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './form.css';
import useValidate from '../../hooks/useValidate.js';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../Store/reducers';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from './loginApi';

const MyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: '',
    password: '',
  };

  const { validationSchema } = useValidate();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const { username, password } = values;
      const data = await login(username, password);

      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('username', username);

      dispatch(setUser({ username }));

      navigate('/dashboard/usuarios', { replace: true });
    } catch (error) {
      console.error('Login error:', error);

      if (error.message.includes('401')) {
        setErrors({ username: 'Invalid username or password' });
      } else {
        setErrors({ username: 'An unexpected error occurred' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className='label-log'>
              <label htmlFor="username">Usuario</label>
              <Field type="text" name="username" id="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className='label-log'>
              <label htmlFor="password">Contraseña</label>
              <div className="password-field">
                <Field type={showPassword ? 'text' : 'password'} name="password" id="password" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password-button"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button className='submit' type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
 */


// import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
// import './form.css';
// import useValidate from '../../hooks/useValidate';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../../Store/reducers';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { login } from './loginApi';

// interface LoginFormValues {
//   username: string;
//   password: string;
// }

// const MyForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const initialValues: LoginFormValues = {
//     username: '',
//     password: '',
//   };

//   const { validationSchema } = useValidate();

//   const onSubmit = async (
//     values: LoginFormValues,
//     { setSubmitting, setErrors }: FormikHelpers<LoginFormValues>
//   ) => {
//     try {
//       const { username, password } = values;
//       const data = await login(username, password);

//       localStorage.setItem('token', data.accessToken);
//       localStorage.setItem('username', username);

//       dispatch(setUser({ username }));

//       navigate('/dashboard/inicio', { replace: true });
//     } catch (error: any) {
//       console.error('Login error:', error);

//       if (error.message.includes('401')) {
//         setErrors({ username: 'Invalid username or password' });
//       } else {
//         setErrors({ username: 'An unexpected error occurred' });
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="login-form">
//             <div className='label-log'>
//               <label htmlFor="username">Usuario</label>
//               <Field type="text" name="username" id="username" className='inputUser'/>
//               <ErrorMessage name="username" component="div" className="error" />
//             </div>
//             <div className='label-log'>
//               <label htmlFor="password">Contraseña</label>
//               <div className="password-field">
//                 <Field type={showPassword ? 'text' : 'password'} name="password" id="password" className='inputPassword' />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="show-password-button"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>
//             <button className='submit' type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Loading...' : 'Login'}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default MyForm;




// import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
// import './form.css';
// import useValidate from '../../hooks/useValidate';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../../Store/reducers';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { login } from './loginApi';

// interface LoginFormValues {
//   username: string;
//   password: string;
// }

// const MyForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   const initialValues: LoginFormValues = {
//     username: '',
//     password: '',
//   };

//   const { validationSchema } = useValidate();

//   const onSubmit = async (
//     values: LoginFormValues,
//     { setSubmitting, setErrors }: FormikHelpers<LoginFormValues>
//   ) => {
//     try {
//       const { username, password } = values;
//       const data = await login(username, password);

//       localStorage.setItem('token', data.accessToken);
//       localStorage.setItem('username', username);

//       dispatch(setUser({ username }));

//       // Verificar el rol del usuario
//       const roles = data.roles || [];
//       if (roles.includes('Paciente') || roles.includes('Familiar')) {
//         navigate('/MisDatos', { replace: true });
//       } else {
//         navigate('/dashboard/inicio', { replace: true });
//       }
//     } catch (error: any) {
//       console.error('Login error:', error);

//       if (error.message.includes('401')) {
//         setErrors({ username: 'Invalid username or password' });
//       } else {
//         setErrors({ username: 'An unexpected error occurred' });
//       }
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="login-form">
//             <div className='label-log'>
//               <label htmlFor="username">Usuario</label>
//               <Field type="text" name="username" id="username" className='inputUser'/>
//               <ErrorMessage name="username" component="div" className="error" />
//             </div>
//             <div className='label-log'>
//               <label htmlFor="password">Contraseña</label>
//               <div className="password-field">
//                 <Field type={showPassword ? 'text' : 'password'} name="password" id="password" className='inputPassword' />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="show-password-button"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>
//             <button className='submit' type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Loading...' : 'Login'}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default MyForm;





import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import './form.css';
import useValidate from '../../hooks/useValidate';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../Store/reducers';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from './loginApi';

interface LoginFormValues {
  username: string;
  password: string;
}

const MyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  };

  const { validationSchema } = useValidate();

  const onSubmit = async (
    values: LoginFormValues,
    { setSubmitting, setErrors }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const { username, password } = values;
      const data = await login(username, password);

      // Guardar token, roles y username en localStorage
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('username', username);

      const roles = data.roles || [];
      localStorage.setItem('roles', JSON.stringify(roles)); // Guardar los roles como un array JSON

      // Actualizar estado global (si necesario)
      dispatch(setUser({ username }));

      // Redirección según el rol
      if (roles.includes('Paciente') || roles.includes('Familiar')) {
        navigate('/MisDatos', { replace: true });
      } else {
        navigate('/dashboard/inicio', { replace: true });
      }
    } catch (error: any) {
      console.error('Login error:', error);

      if (error.message.includes('401')) {
        setErrors({ username: 'Usuario o contraseña inválidos' });
      } else {
        setErrors({ username: 'Ocurrió un error inesperado' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="label-log">
              <label htmlFor="username">Usuario</label>
              <Field type="text" name="username" id="username" className="inputUser" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="label-log">
              <label htmlFor="password">Contraseña</label>
              <div className="password-field">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className="inputPassword"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="show-password-button"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button className="submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Cargando...' : 'Iniciar sesión'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
