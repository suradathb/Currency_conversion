import React, { useState } from 'react';
import axios from 'axios';
import './CurrencyConverter.css'; // เพิ่มไฟล์ CSS สำหรับการจัดรูปแบบ

const CurrencyConverter = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleConvert = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/convert?from=${from}&to=${to}&amount=${amount}`);
            setConvertedAmount(response.data.convertedAmount);
        } catch (error) {
            console.error('Error converting currency', error);
        }
    };

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="From Currency"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="To Currency"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button onClick={handleConvert}>Convert</button>
            {convertedAmount && (
                <h2>Converted Amount: {convertedAmount} {to}</h2>
            )}
        </div>
    );
};

export default CurrencyConverter;