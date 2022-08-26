const { Router } = require('express');
const router = Router();


router.use('/user', require('./user'));
router.use('/nft', require('./nft'));
router.use('/collection', require('./collection'));
router.use('/categories', require('./categories'));
router.use('/creators', require('./creators'));
router.use('/currencies', require('./currencies'));
router.use('/auth', require('./authentication'));


module.exports = router;
