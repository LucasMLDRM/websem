import { useState, useEffect } from 'react';
import { User } from './User';


export const useHandleSearch = (users: User[]) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

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

  return { filteredUsers, currentPage, setCurrentPage, handleSearch };
};
