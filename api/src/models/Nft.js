const { Schema, model } = require('mongoose');
require('mongoose-double')(mongoose);

const Nft = Schema({
    name: { 
        type: String, 
        required: [true,"name is required"],
        validate: {
            validator: (v) => /^[a-zñáéíóú\s]{3,}$/i.test(v),
            message: props => {
               if (props.value.length < 3){
                  return 'NFT name accept minimun 3 letters';
               } else {
                  return 'NFT name only accept letters';
               }
            }
        } 
    },
    description: {
        type: String,
        required: [true, 'NFT description is required']
    },
    img: {
        type: String,
        required: [true,"NFT image is required"],
        validate: v => /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
        message: props => `${props.value} is not valid url image`
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categories'
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Creators'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    price: {
        type: mongoose.SchemaTypes.Double,
        required: [true,"NFT price is required"]
    },
    currencies:  {
        type: Schema.Types.ObjectId,
        ref: 'Currencies'  
    },
    files_types: {
        type: Schema.Types.ObjectId,
        ref: 'Files_types'  
    }
});

Nft.method('toJSON', function () {
    const { __v, ...object } = this.toObject();
    return object;
});

module.exports = model('Nft', Nft);