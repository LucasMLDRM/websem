/* import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchRoles = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchRoles = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            throw new Error('Token not found');
          }
  
          const response = await axios.get('https://emmanuel.somee.com/api/v1/Roles', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  

          if (Array.isArray(response.data)) {
            setRoles(response.data);
          } else {
            throw new Error('Unexpected response structure');
          }
        } catch (error) {
          setError(error.message || 'Error fetching roles');
        } finally {
          setLoading(false);
        }
      };
  
      fetchRoles();
    }, []);
  
    return { roles, loading, error };
  };
  
  

export default useFetchRoles; */




import { useState, useEffect } from 'react';
import axios from 'axios';
import { Role } from './types';

const useFetchRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoles = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found.');
        }

        const response = await axios.get('https://emmanuel.somee.com/api/v1/Roles', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Roles fetched:', response.data); // Verifica los datos obtenidos
        setRoles(response.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error fetching roles');
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, []);

  return { roles, loading, error };
};

export default useFetchRoles;
