const router = require('express').Router();
const { getAllCreators, 
        getCreatorById, 
        createCreator, 
        modifyCreator, 
        deleteCreator } = require('../controllers/creators.controllers');

router.get('/', getAllCreators);
router.get('/:id', getCreatorById);
router.post('/', createCreator);
router.put('/:id', modifyCreator);
router.delete('/:id', deleteCreator);

module.exports = router;
// Compare this snippet from api\src\routes\index.js:


