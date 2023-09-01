import React, { useEffect, useState } from 'react';
import ShipsTable from './ShipsTable';
import FilterForm from './FilterForm';
import api from '../services/api';

const ShipsWithNoFutureAssignmentPage = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const fetchShips = async () => {
    setLoading(true);
    try {
      const response = await api.get('/ships', { params: filters });
      setShips(response.data);
    } catch (error) {
      console.error('Failed to fetch ships', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShips();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Ships With No Future Assignment</h1>
      <FilterForm onChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ShipsTable ships={ships} />
      )}
    </div>
  );
};

export default ShipsWithNoFutureAssignmentPage;