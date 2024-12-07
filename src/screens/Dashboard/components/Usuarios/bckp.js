/* import { useEffect, useState } from 'react';
import axios from 'axios';
import './usuarios.css';
import UserHeaderComponent from './components/UserHeaderComponent/UserHeaderComponent';
import UserListComponent from './components/UserList/UserList';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found.');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'accept': 'text/plain',
          },
        };

        const response = await axios.get('https://emmanuel.somee.com/api/v1/Users', config);
        setUsers(response.data);
        setFilteredUsers(response.data);

        const storedUsername = localStorage.getItem('username');
        const foundUser = response.data.find(user => user.userName === storedUsername);
        if (foundUser) {
          localStorage.setItem('user', JSON.stringify(foundUser));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = users.filter(user =>
      user.firstName.toLowerCase().includes(lowercasedQuery) ||
      user.lastName.toLowerCase().includes(lowercasedQuery) ||
      user.userName.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="users-container">
      <UserHeaderComponent onSearch={handleSearch} />
      <UserListComponent users={currentUsers} />
      <div className="pagination">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default Users;
 */