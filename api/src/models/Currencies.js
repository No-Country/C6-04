const { Schema, model } = require('mongoose');

const Currencies = Schema({
    name: {
        type: String,
        required: [true, 'Currenciy name is required']
    },
    symbol: {
        type: String,
        required: [true, 'Currenciy symbol is required']
    },
});

Currencies.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Currencies', Currencies);