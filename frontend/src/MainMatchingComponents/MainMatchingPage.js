import React, { useEffect, useState } from 'react';
import MainMatchingTable from './MainMatchingTable';
import FilterForm from './FilterForm';
import { getMainMatching } from '../services/api';

const MainMatchingPage = () => {
  const [mainMatchingData, setMainMatchingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const fetchMainMatchingData = async () => {
    setLoading(true);
    try {
      const response = await getMainMatching(filters);
      setMainMatchingData(response.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMainMatchingData();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Main Matching</h1>
      <FilterForm onChange={handleFilterChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MainMatchingTable data={mainMatchingData} />
      )}
    </div>
  );
};

export default MainMatchingPage;