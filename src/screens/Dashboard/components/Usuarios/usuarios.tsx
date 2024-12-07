import React from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';
import './usuarios.css';
import UserListComponent from './components/UserList/UserList';

const Users: React.FC = () => {
  const { error } = useFetchUsers();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="users-container">
      <UserListComponent />
    </div>
  );
};

export default Users;