const Currencies = require('../models/Currencies');

const getAllCurrencies = async (req, res) => {
    try {
        const currencies = await Currencies.find();
        res.status(200).json(currencies);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Currencies not Found"
        });
        console.log(error);
    };
};

const getCurrencyById = async (req, res) => {
    const { id } = req.params;
    try {
        const currency = await Currencies.findById(id);
        res.status(200).json(currency);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Currency not Found"
        });
        console.log(error);
    };
};

const createCurrency = async (req, res) => {
    try {
        const newCurrency = new Currencies(req.body);
        await newCurrency.save();
        res.status(200).json({
            ok: true,
            msg: 'Currency created',
            newCurrency
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Currency could not be created"
        });
        console.log(error);
    };
};

const modifyCurrency = async (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const currencyUpdate = await Currencies.findByIdAndUpdate(
            id, 
            body,
            { new: true },
        );
        res.status(200).json({
            ok: true,
            msg: 'Currency modified',
            currencyUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Currency could not be modified"
        });
        console.log(error);
    };
};

const deleteCurrency = async (req, res) => {
    const { id } = req.params;
    try {
        const currencyDelete = await Currencies.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: 'Currency deleted',
            currencyDelete
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Currency could not be deleted"
        });
        console.log(error);
    };
};

module.exports = {
    getAllCurrencies,
    getCurrencyById,
    createCurrency,
    modifyCurrency,
    deleteCurrency
}