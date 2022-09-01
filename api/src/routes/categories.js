const router = require('express').Router();
const { getAllCategories, 
        getCategoryById, 
        createCategory, 
        modifyCategory, 
        deleteCategory } = require('../controllers/categories.controllers');
const { validarCampos } = require('../middlewares/validar.campos')



router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', [validarCampos], createCategory);
router.put('/:id', modifyCategory);
router.delete('/:id', deleteCategory);

module.exports = router;