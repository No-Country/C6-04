const { Schema, model } = require('mongoose');

const User = Schema({
    username: {
        type: String,
        require: [true, 'Username is required'],
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
    email: {
        type: String,
        require: [true, 'Email is required'],
        validate: {
            validator: (v) => /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/i.test(v),
            message: props => `email is not valid`
        }
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    },
    image: {
        type: String,
        validate: v => /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
        message: props => `${props.value} is not valid url image`,
        default: "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    },
    // array de id
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Nft'
    },
    description: {
        type: String
    },
    user_type: {
        type: Schema.Types.ObjectId,
        ref: 'User_type'
    },
    // estado del usuario confirmacion de mail
    confirm_email: {
        type: Boolean,
        default: false
    }
    
});

User.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('User', User);