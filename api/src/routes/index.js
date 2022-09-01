const { Router } = require('express');
const router = Router();
const categories = require('./categories')


router.use('/user', require('./user'));
//router.use('/nft', require('./nft.js'));
router.use('/collections', require('./collections'));
router.use('/categories', categories);
router.use('/creators', require('./creators'));
router.use('/currencies', require('./currencies'));
router.use('/auth', require('./authentication'));


module.exports = router;
