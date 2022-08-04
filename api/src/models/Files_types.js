const { Schema, model } = require('mongoose');

const Files_types = Schema({
    name: {
        type: String,
        required: [true, 'File type name is required']
    },
    img: {
        type: String,
        required: [true,"Files_types image is required"]
    },
    

});
Files_types.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Files_types', Files_types);