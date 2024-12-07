import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TbEdit } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import HeaderPlanillas from './components/HeaderPlanillas/HeaderPlanillas';
import Switch from './components/Switch/Switch';
import CreatePlanilla from './components/CreatePlanilla/CreatePlanilla';
import './Planillas.css';

type Planilla = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  createdByName: string;
  isEnabled: boolean;
};

const Planillas: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const planillasPerPage = 6;
  const [planillas, setPlanillas] = useState<Planilla[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchPlanillas = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://emmanuel.somee.com/api/v1/Spreadsheets', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPlanillas(response.data);
        localStorage.setItem('planillas', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error al obtener las planillas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanillas();
  }, []);

  const handleToggle = async (planillaId: number, isEnabled: boolean) => {
    try {
      const token = localStorage.getItem('token');
      if (!isEnabled) {
        await axios.put(
          `https://emmanuel.somee.com/api/v1/Spreadsheets/Enable/${planillaId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.delete(
          `https://emmanuel.somee.com/api/v1/Spreadsheets/${planillaId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      setPlanillas(prevPlanillas =>
        prevPlanillas.map(planilla =>
          planilla.id === planillaId ? { ...planilla, isEnabled: !isEnabled } : planilla
        )
      );
    } catch (error) {
      console.error('Error al cambiar el estado de la planilla:', error);
    }
  };

  const filteredPlanillas = planillas.filter(planilla =>
    planilla.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    planilla.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPlanilla = currentPage * planillasPerPage;
  const indexOfFirstPlanilla = indexOfLastPlanilla - planillasPerPage;
  const currentPlanillas = filteredPlanillas.slice(indexOfFirstPlanilla, indexOfLastPlanilla);

  const totalPages = Math.ceil(filteredPlanillas.length / planillasPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleViewPlanClick = (planilla: Planilla) => {
    localStorage.removeItem('selectedPlanilla');
    localStorage.setItem('selectedPlanilla', JSON.stringify(planilla));
    navigate('/dashboard/planillas/vista');
  };

  const handleSuccess = async () => {
    navigate('/dashboard/planillas');
  };

  return (
<div className="planillas-container">
  <HeaderPlanillas searchTerm={searchTerm} onSearchChange={handleSearchChange} />

  <div className="planillas-table-container">
    {loading ? (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    ) : (
      <table className="planillas-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Fecha de Creación</th>
            <th>Creada por</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentPlanillas.map((planilla: Planilla) => (
            <tr key={planilla.id}>
              <td>{planilla.name}</td>
              <td>{planilla.description}</td>
              <td>{new Date(planilla.createdAt).toLocaleDateString()}</td>
              <td>{planilla.createdByName}</td>
              <td>
                <Switch
                  isEnabled={planilla.isEnabled}
                  onToggle={() => {
                    handleToggle(planilla.id, planilla.isEnabled);
                  }}
                />
              </td>
              <td>
                <div
                  className="edit-button-container"
                  onClick={() => handleViewPlanClick(planilla)}
                >
                  <TbEdit className="edit-button" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
    {!loading && currentPlanillas.length === 0 && (
      <div className="no-planillas">No se encontraron planillas</div>
    )}
  </div>


  <div className="pagination-and-create-btn-container">
    <div className="create-planilla-button">
      <button onClick={openModal} className="create-btn-plan">Crear Nueva Planilla</button>
    </div>

    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>

  {isModalOpen && (
    <CreatePlanilla onClose={closeModal} onSuccess={handleSuccess} />
  )}
</div>



  );
};

export default Planillas;
