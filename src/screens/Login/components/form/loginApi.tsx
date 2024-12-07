/* import axios, { AxiosResponse } from 'axios';

const url = 'https://emmanuel.somee.com/api/v1/Tokens';

interface LoginData {
  userName: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  token: string;
}

interface UserData {
  id: number;
  userName: string;
}

export const login = async (userName: string, password: string): Promise<LoginResponse> => {
  const data: LoginData = {
    userName,
    password,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(url, data, config);
    return response.data;
  } catch (error: any) {
    console.error('Error en la solicitud:', error);
    throw new Error(error.response?.data?.message || error.message || 'Error desconocido');
  }
};

export const getUserData = async (): Promise<UserData> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token no encontrado');
  }

  const config = {
    headers: {
      'Accept': "text/plain",
      'Authorization': `Bearer ${token}`,
    },
  };

  try {
    const response: AxiosResponse<UserData> = await axios.get('https://emmanuel.somee.com/api/v1/UserData', config);
    return response.data;
  } catch (error: any) {
    console.error('Error en la solicitud:', error);
    throw new Error(error.response?.data?.message || error.message || 'Error desconocido');
  }
};
 */



import axios from 'axios';

const loginUrl = 'https://emmanuel.somee.com/api/v1/Tokens'; // URL para el login
const userDataUrl = 'https://emmanuel.somee.com/api/v1/Users'; // Ajusta esta URL según la correcta para obtener los datos del usuario

interface LoginData {
  userName: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  token: string;
}

interface UserData {
  id: number;
  userName: string;
  // Añade otras propiedades del usuario según sea necesario
}

export const login = async (userName: string, password: string): Promise<LoginResponse> => {
  const data: LoginData = {
    userName,
    password,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(loginUrl, data, config);
    return response.data;
  } catch (error: any) {
    console.error('Error en la solicitud:', error);
    throw new Error(error.response?.data?.message || error.message || 'Error desconocido');
  }
};

export const getUserData = async (): Promise<UserData> => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Token no encontrado');
  }

  const config = {
    headers: {
      'Accept': 'application/json', // Ajusta según el tipo de respuesta esperada
      'Authorization': `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(userDataUrl, config);
    return response.data;
  } catch (error: any) {
    console.error('Error en la solicitud:', error);
    throw new Error(error.response?.data?.message || error.message || 'Error desconocido');
  }
};
