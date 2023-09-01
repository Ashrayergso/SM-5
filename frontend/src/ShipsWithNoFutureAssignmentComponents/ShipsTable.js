import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShipsTable.css';

const ShipsTable = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        axios.get('/api/ships')
            .then(response => {
                setShips(response.data);
            })
            .catch(error => {
                console.error(`Error fetching data: ${error}`);
            });
    }, []);

    return (
        <div className="ShipsTable">
            <h2>Ships With No Future Assignment</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ship ID</th>
                        <th>Ship Name</th>
                        <th>Ship Type</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {ships.map(ship => (
                        <tr key={ship.id}>
                            <td>{ship.id}</td>
                            <td>{ship.name}</td>
                            <td>{ship.type}</td>
                            <td>{ship.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShipsTable;