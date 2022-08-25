const router = require('express').Router();
const { check } = require('express-validator')
// controllers 
const { login, googleSignIn } = require("../controllers/authentication.controllers");
const { validarCampos } = require('../middlewares/validar.campos.js');

router.post('/',
    [
        check('email', 'Email is required and must be valid').not().isEmpty().isEmail(),
        check('password', 'Password is required').not().isEmpty(),
        validarCampos
    ],
    login
);
router.post('/google', googleSignIn);


module.exports = router;