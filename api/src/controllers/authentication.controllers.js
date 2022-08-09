const User = require("../models/User");
const bcrypt = require('bcrypt');
const User_type = require("../models/User_type");
const { googleVerify } = require('../helpers/googleVerify');

const login = async (req, res) => {
    // login comun con email y password
    const { email, password } = req.body;
    try {
        // validar email
        const existEmail = await User.findOne({ email })
        if (!existEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'The email is not registered'
            });
        };
        // validar password
        const validPassword = bcrypt.compareSync(password, existEmail.password);// develve true o false
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'The password is wrong'
            });
        };
        // respuesta
        res.json({
            ok: true,
            usuario: existEmail,
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const googleSignIn = async (req, res) => {
    const googleToken = req.body.tokenId;
    const { givenName, familyName } = req.body;
    try {
        const { name, email, img } = await googleVerify(googleToken);
        const usuarioDb = await User.findOne({ email });// busca si existe el email
        // user_type seteo user por default
        const user_type = await User_type.findOne({ name: 'common' });
        let usuario;
        // create user
        if (!usuarioDb) {// si no existe el email crea una cuenta nueva
            usuario = new User({
                username: name,
                email,
                image: img,
                password: ':)',
                user_type: user_type._id,
                confirm_email:true
            });
        }
        else{
            usuario = usuarioDb;// si existe el email continua con la cuenta existente 
        }
        await usuario.save();// debe ir dentro del if?
        res.json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};



module.exports = { login, googleSignIn };