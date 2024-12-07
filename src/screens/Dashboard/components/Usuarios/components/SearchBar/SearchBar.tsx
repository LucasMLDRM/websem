// import { useState, ChangeEvent } from 'react';
// import './SearchBar.css';

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState<string>('');

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const queryValue = e.target.value;
//     setQuery(queryValue);
//     onSearch(queryValue);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="   Buscar usuario..."
//       />
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, ChangeEvent } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
    onSearch(queryValue); // Notifica al padre
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar usuario..."
      />
    </div>
  );
};

export default SearchBar;
