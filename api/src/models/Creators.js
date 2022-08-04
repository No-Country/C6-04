const { Schema, model } = require('mongoose');

const Creators = Schema({
    name: {
        type: String,
        required: [true, 'Collection name is required']
    },
    description: {
        type: String,
        required: [true, 'Collection description is required']
    },
    img: {
        type: String,
        required: [true,"Collection image is required"]
    },
});

Creators.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Creators', Creators);