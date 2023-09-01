import React, { useState } from 'react';

const FilterForm = ({ onFilter }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter({ name, role });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Role:
                <input type="text" value={role} onChange={e => setRole(e.target.value)} />
            </label>
            <input type="submit" value="Filter" />
        </form>
    );
};

export default FilterForm;