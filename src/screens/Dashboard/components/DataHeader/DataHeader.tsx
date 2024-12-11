import React from "react";

interface DataHeaderProps {
  title: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  children?: React.ReactNode; // Permite agregar filtros adicionales, como roles
}

const DataHeader: React.FC<DataHeaderProps> = ({ title, searchTerm, onSearchChange, children }) => {
  return (
    <div className="data-header">
      <h2 className="data-header-title">{title}</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Buscar..."
        className="data-header-search"
      />
      <div className="data-header-filters">{children}</div>
    </div>
  );
};

export default DataHeader;
