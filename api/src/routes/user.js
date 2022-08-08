const router = require('express').Router();
const { check } = require('express-validator')

// controllers 
const { createUser,
        getUser,
        getUsers, 
        updateUser, 
        deleteUser } = require("../controllers/users.controllers");
        
// check validator
const { validarCampos } = require('../middlewares/validar.campos.js');

router.post('/',
    [
        check('username', 'Username is required').not().isEmpty(),
        check('email', 'Email is required and must be valid').not().isEmpty().isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        validarCampos
    ], 
    createUser
);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
// Compare this snippet from api\src\routes\index.js: