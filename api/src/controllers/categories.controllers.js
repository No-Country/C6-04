const Categories = require('../models/Categories');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Categories not Found"
        });
        console.log(error);
    };
};

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Categories.findById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Category not Found"
        });
        console.log(error);
    };
};

const createCategory = async (req, res) => {
    try {
        const newCategory = new Categories(req.body);
        await newCategory.save();
        res.status(200).json({
            ok: true,
            msg: 'Category created',
            newCategory
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Category could not be created"
        });
        console.log(error);
    };
};

const modifyCategory = async (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const categoryUpdate = await Categories.findByIdAndUpdate(
            id, 
            body,
            { new: true },
        );
        res.status(200).json({
            ok: true,
            msg: 'Category modified',
            categoryUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Category could not be modified"
        });
        console.log(error);
    };
};

const deleteCategory = async(req, res) => {
    const { id } = req.params;
    try {
        const delCategory = await Categories.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "Category deleted",
            delCategory
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Category not Found"
        });
        console.log(error);
    };
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    modifyCategory,
    deleteCategory
};