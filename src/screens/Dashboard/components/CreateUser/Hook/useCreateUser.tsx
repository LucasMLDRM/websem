import { useState } from 'react';
import axios from 'axios';
import { FormValues } from './types'; // Ensure the path to your types file is correct

interface UseCreateUserReturn {
  createUser: (userData: FormValues) => Promise<any>;
  isLoading: boolean;
  error: Error | null;
}

const useCreateUser = (): UseCreateUserReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const createUser = async (userData: FormValues): Promise<any> => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found.');
      }

      const response = await axios.post('https://emmanuel.somee.com/api/v1/Users', userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Unknown error'));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createUser, isLoading, error };
};

export default useCreateUser;

