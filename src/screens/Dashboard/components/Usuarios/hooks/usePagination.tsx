import { useState } from 'react';
import { User } from './User';

export const usePagination = (filteredUsers: User[], usersPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return { currentPage, currentUsers, totalPages, handlePageChange };
};
