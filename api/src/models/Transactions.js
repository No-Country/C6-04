const { Schema, model } = require('mongoose');
require('mongoose-double')(mongoose);

const Transactions = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    nftId: {
        type: Schema.Types.ObjectId,
        ref: 'Nft'
    },
    creatorId: {
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