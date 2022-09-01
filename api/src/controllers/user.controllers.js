const bcrypt = require('bcrypt');
const User = require('../models/User');
const User_type = require('../models/User_type');


const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existMail = await User.findOne({ email });
        // if the user email already exists
        if (existMail) {
            return res.status(400).json({
                ok: false,
                msg: 'This email is already registered'
            });
        }
        // if the username already exists
        const existUser = await User.findOne({ username });
        if (existUser) {
            return res.status(400).json({
                ok: false,
                msg: 'This username is already registered'
            });
        }
        //default common id user type
        const user_type = await User_type.findOne({ name: 'common' });
        const newUser = new User({
            username,
            email,
            password,
            image,
            description,
            user_type: user_type._id
        });
        // encrypt password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        res.json({
            ok: true,
            msg: 'User created'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const getUsers = async (req, res) => {
    // obtener usuarios // paginacion
    const { page = 1, limit = 10 } = req.query; 
    const start = (page - 1) * limit;
    const end = page * limit;
    try {
        
        const users = await User.find({})
            .skip(start)
            .limit(limit)
            .populate('user_type', 'name')
            .exec();
        const total = await User.countDocuments();
        const countPages = Math.ceil(total / limit);
        res.json({
            ok: true,
            user: req.uid, // id del usuario que esta logueado
            users,
            total,
            end,
            countPages
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const updateUser =  (req, res) => {
    const { id } = req.params;
    const user = req.body;
    const newUserInfo = {
        username: user.username,
        email: user.email,
        password: user.password,
        image: user.image,
        description: user.description,
        user_type: user.user_type
    }
    User.findByIdAndUpdate( id, newUserInfo, { new: true })
          .then(result => {
              res.json(result)
          })
          .catch(e => console.log(e))
};

const deleteUser = async (req, res) => {
    const { id } = req.params
    //delete user nfts in owner
    await User.findByIdAndDelete(id);
    return new Promise((resolve, reject) => {
        Nfts.deleteMany({ 'owner': id }, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
    .then(result => {
        res.json(result)
    })
    .catch(e => console.log(e))
};

module.exports = {
    createUser, getUser, updateUser, deleteUser, getUsers
};