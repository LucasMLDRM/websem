
// import axios from 'axios';

// const loginUrl = 'https://emmanuel.somee.com/api/v1/Tokens';

// interface LoginData {
//   userName: string;
//   password: string;
// }

// interface LoginResponse {
//   accessToken: string;
//   refreshToken: string;
//   patientId?: number; // Hacerlo opcional
//   roles: string[];
// }

// export const login = async (userName: string, password: string): Promise<LoginResponse> => {
//   const data: LoginData = { userName, password };

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   try {
//     const response = await axios.post<LoginResponse>(loginUrl, data, config);

//     const { accessToken, refreshToken, patientId, roles } = response.data;

//     // Validar que los datos requeridos estén presentes
//     if (!accessToken || !roles) {
//       throw new Error('Datos incompletos en la respuesta del servidor');
//     }

//     // Guardar datos en localStorage
//     localStorage.setItem('token', accessToken);
//     localStorage.setItem('refreshToken', refreshToken);
//     localStorage.setItem('roles', JSON.stringify(roles));

//     // Guardar patientId solo si está presente
//     if (patientId !== undefined && patientId !== null) {
//       localStorage.setItem('patientId', patientId.toString());
//     } else {
//       // Eliminar patientId si existe, para usuarios que no lo necesitan
//       localStorage.removeItem('patientId');
//     }

//     return response.data; // Devolver todos los datos
//   } catch (error: any) {
//     console.error('Error al iniciar sesión:', error);
//     throw new Error(error.response?.data?.message || 'Error desconocido al iniciar sesión');
//   }
// };







import axios from 'axios';

const loginUrl = 'https://emmanuel.somee.com/api/v1/Tokens';

interface LoginData {
  userName: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  patientId?: number; // Opcional para pacientes
  userId?: number;    // Alternativa para pacientes
  roles: string[];
}

export const login = async (userName: string, password: string): Promise<LoginResponse> => {
  const data: LoginData = { userName, password };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post<LoginResponse>(loginUrl, data, config);

    const { accessToken, refreshToken, patientId, userId, roles } = response.data;

    // Validar que los datos requeridos estén presentes
    if (!accessToken || !roles) {
      throw new Error('Datos incompletos en la respuesta del servidor');
    }

    // Guardar datos en localStorage
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('roles', JSON.stringify(roles));

    // Manejar patientId o userId dinámicamente
    if (patientId !== undefined && patientId !== null) {
      localStorage.setItem('patientId', patientId.toString());
    } else if (userId !== undefined && userId !== null) {
      // Para usuarios con rol "Paciente", usar userId como equivalente a patientId
      localStorage.setItem('patientId', userId.toString());
    } else {
      // Eliminar patientId si no hay un valor aplicable
      localStorage.removeItem('patientId');
    }

    return response.data; // Devolver todos los datos
  } catch (error: any) {
    console.error('Error al iniciar sesión:', error);
    throw new Error(error.response?.data?.message || 'Error desconocido al iniciar sesión');
  }
};
