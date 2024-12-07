import React, { useEffect, ChangeEvent, useState } from 'react';
import axios from 'axios';
import useFetchRoles from '../CreateUser/Hook/useFetchRoles';
import { User } from '../../../Dashboard/components/Usuarios/hooks/User';
import './EditUser.css';
import { FormErrors, Role } from '../CreateUser/Hook/types';

const EditUser: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const { roles } = useFetchRoles();
  const [formErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
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


  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedRoles: string[] = [];
    for (const option of options) {
      if (option.selected) {
        selectedRoles.push(option.value);
      }
    }
    setFormData((prevValues) => ({ ...prevValues, rolesName: selectedRoles }));
  };


  useEffect(() => {
    const storedUser = localStorage.getItem('selectedUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setSelectedUser(user);

      // Formatear birthDate a yyyy-MM-dd
      const formattedBirthDate = user.birthDate ? new Date(user.birthDate).toISOString().split('T')[0] : '';

      setFormData({
        ...user,
        birthDate: formattedBirthDate,
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleProf = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'profession' ? parseInt(value, 10) : value;
    setFormData((prevValues) => ({ ...prevValues, [name]: newValue }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('No token found.');
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.put(
        `https://emmanuel.somee.com/api/v1/Users`,
        formData,
        config
      );
      alert('User updated successfully.');
      // Eliminar la lista de usuarios del localStorage
      localStorage.removeItem('users');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  };

  if (!selectedUser) {
    return <div>No user selected</div>;
  }


  return (
    <div className="edit-user-container">
      <h1>Editar:  {selectedUser.userName}</h1>
      <form onSubmit={handleSubmit} className="edit-user-form">
        {/* <label>
          Display Name:
          <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} />
        </label>
        <label>
          User Name:
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
        </label> */}
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Birth Date:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        </label>
        <label>
          Document Number:
          <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label>
          Province:
          <input type="text" name="province" value={formData.province} onChange={handleChange} />
        </label>
        <label>
          Postal Code:
          <input type="number" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <label>
          Phone Number 2:
          <input type="text" name="phoneNumber2" value={formData.phoneNumber2} onChange={handleChange} />
        </label>
        <label>
          Observations:
          <textarea name="observations" value={formData.observations} onChange={handleChange} />
        </label>
        <div>
          <label htmlFor="profession" className="labl">Profesión:</label>
          <select className='inp-create' name="profession" id="profession" value={formData.profession} onChange={handleProf}>
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
            value={formData.rolesName}
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

        <button type="submit" className='submit-create'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
