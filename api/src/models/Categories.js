const { Schema, model } = require('mongoose');

const Categories = Schema({
    name: {
        type: String,
        required: [true, 'Category name is required']
    },
});

Categories.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Categories', Categories);