import React, { useState } from 'react';
import axios from 'axios';

const LoanForm: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/loans', { userId, amount });
            alert('Loan application submitted');
        } catch (error) {
            alert('Error submitting loan application');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="submit">Apply for Loan</button>
        </form>
    );
};

export default LoanForm;

