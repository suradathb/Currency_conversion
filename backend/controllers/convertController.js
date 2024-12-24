const axios = require('axios');

const convertCurrency = async (req, res) => {
    const { from, to, amount } = req.query;
    const api_key = '2f846856f267ad24270179fa';
    try {
        // const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${from}`);
        // console.log('API response data:', response.data);
        // const rate = response.data.rates[to];
        const rate = response.data.conversion_rates[to];
        const convertedAmount = rate * amount;
        res.json({ convertedAmount });
    } catch (error) {
        res.status(500).send('Error converting currency');
    }
};

module.exports = { convertCurrency };