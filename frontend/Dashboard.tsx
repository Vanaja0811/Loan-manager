import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchLoans = async () => {
            const response = await axios.get('http://localhost:5000/api/loans');
            setLoans(response.data);
        };
        fetchLoans();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {loans.map((loan: any) => (
                    <li key={loan._id}>
                        {loan.userId}: {loan.amount} - {loan.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;

