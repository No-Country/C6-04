const router = require('express').Router();
const { getAllCategories, 
        getCategoryById, 
        createCategory, 
        modifyCategory, 
        deleteCategory } = require('../controllers/categories.controllers');



router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', modifyCategory);
router.delete('/:id', deleteCategory);

module.exports = router;