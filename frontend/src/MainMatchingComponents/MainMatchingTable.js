import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const MainMatchingTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/api/main-matching',
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Staff Name</th>
                    <th>Role</th>
                    <th>Ship Name</th>
                    <th>Schedule</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.staff_name}</td>
                        <td>{item.role}</td>
                        <td>{item.ship_name}</td>
                        <td>{item.schedule}</td>
                        <td>{item.score}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default MainMatchingTable;