const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    base: String,
    rates: Object,
    date: String
});

module.exports = mongoose.model('Currency', currencySchema);