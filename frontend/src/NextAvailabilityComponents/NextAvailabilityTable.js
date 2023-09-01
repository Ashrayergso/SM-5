import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NextAvailabilityTable.css';

const NextAvailabilityTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/next-availability',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="NextAvailabilityTable">
            <table>
                <thead>
                    <tr>
                        <th>Staff Name</th>
                        <th>Role</th>
                        <th>Next Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.next_availability}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NextAvailabilityTable;