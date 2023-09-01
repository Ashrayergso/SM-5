import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
    const [staffName, setStaffName] = useState('');
    const [shipName, setShipName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter({ staffName, shipName });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Staff Name:
                <input
                    type="text"
                    value={staffName}
                    onChange={e => setStaffName(e.target.value)}
                />
            </label>
            <label>
                Ship Name:
                <input
                    type="text"
                    value={shipName}
                    onChange={e => setShipName(e.target.value)}
                />
            </label>
            <button type="submit">Filter</button>
        </form>
    );
};

export default FilterForm;