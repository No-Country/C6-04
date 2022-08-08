const { Schema, model } = require('mongoose');
require('mongoose-double')(mongoose);

const Transactions = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    nft_id: {
        type: Schema.Types.ObjectId,
        ref: 'Nft'
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'Creators'
    },
    currencies: {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'
    },
    amount: {
        type: mongoose.Types.Double
    },
    create_date: {
        type: Date,
        default: Date.now
    },
});

Transactions.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Transactions', Transactions);