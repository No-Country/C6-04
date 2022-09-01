const router = require('express').Router();
const { getAllCollections, 
        getCollectionById, 
        createCollection, 
        modifyCollection, 
        deleteCollection } = require('../controllers/collections.controller');


router.get('/', getAllCollections);
router.get('/:id', getCollectionById);
router.post('/', createCollection);
router.put('/:id', modifyCollection);
router.delete('/:id', deleteCollection);

module.exports = router;
// Compare this snippet from api\src\routes\index.js: