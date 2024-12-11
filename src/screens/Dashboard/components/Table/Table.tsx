import React from "react";

interface TableProps {
  headers: string[];
  data: any[]; // Define el tipo de datos según sea necesario
  renderRow: (item: any) => React.ReactNode; // Define cómo se renderiza cada fila
}

const Table: React.FC<TableProps> = ({ headers, data, renderRow }) => {
  return (
    <table className="generic-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>{renderRow(item)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
