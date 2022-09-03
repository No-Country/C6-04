const router = require('express').Router();
const { check } = require('express-validator')

// controllers 
const { createUser,
        getUser,
        getUsers, 
        updateUser, 
        deleteUser } = require("../controllers/user.controllers");
        
// routes

router.post('/',createUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
// Compare this snippet from api\src\routes\index.js: