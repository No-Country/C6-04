const { Schema, model } = require('mongoose');
var mongoose = require('mongoose')
require('mongoose-double')(mongoose);

const Nft = Schema({
    name: {
        type: String,  
    },
    image: {
        type: String  
    },
    description: {
        type: String
    },
    details: {
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'Creators'},
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'},
        contract_address: String,
        token_id: Number
    },
    create_date: {
        type: String
    },
    collection: { 
        type: [Schema.Types.ObjectId],
        ref: 'Collections'  
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'  
    },
    price: {
        type: mongoose.Types.Double
    },
    currencies:  {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'  
    },
    files_types: {
        type: Schema.Types.ObjectId,
        ref: 'Files_types'  
    },
    sale_status: {
        type: Boolean,
        default: false
    }
});
Nft.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Nft', Nft);
