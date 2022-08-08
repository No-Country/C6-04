const router = require('express').Router();
const { getAllCurrencies, 
        getCurrencyById, 
        createCurrency, 
        modifyCurrency, 
        deleteCurrency } = require('../controllers/currencies.controllers');

router.get('/', getAllCurrencies);
router.get('/:id', getCurrencyById);
router.post('/', createCurrency);
router.put('/:id', modifyCurrency);
router.delete('/:id', deleteCurrency);

module.exports = router;