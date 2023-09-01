import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NextAvailabilityTable from './NextAvailabilityTable';
import FilterForm from './FilterForm';

const NextAvailabilityPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({});

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/next-availability', { params: filters });
            setData(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div>
            <h1>Next Availability</h1>
            <FilterForm onChange={handleFilterChange} />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <NextAvailabilityTable data={data} />
            )}
        </div>
    );
};

export default NextAvailabilityPage;