const Creators = require('../models/Creators');

const getAllCreators = async (req, res) => {
    try {
        const creators = await Creators.find();
        res.status(200).json(creators);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Creators not Found"
        });
        console.log(error);
    };
};

const getCreatorById = async (req, res) => {
    const { id } = req.params;
    try {
        const creators = await Creators.findById(id);
        res.status(200).json(creators);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Id creator not Found"
        });
        console.log(error);
    };
};

const createCreator = async (req, res) => {
    try {
        const newCreator = new Creators(req.body);
        await newCreator.save();
        res.status(200).json({
            ok: true,
            msg: 'Creator created',
            newCreator
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Creator could not be created"
        });
        console.log(error);
    };
};

const modifyCreator = async (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const creatorUpdate = await Creators.findByIdAndUpdate(
            id,
            body,
            { new: true } 
        );
        res.status(200).json({
            ok: true,
            msg: 'Creator modified',
            collectionUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Creator could not be modified"
        });
        console.log(error);
    };
};

const deleteCreator = async(req, res) => {
    const { id } = req.params;
    try {
        const delCreator = await Creators.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "Creator deleted",
            delCreator
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Creator not Found"
        });
        console.log(error);
    };
};

module.exports = {
    getAllCreators,
    getCreatorById,
    createCreator,
    modifyCreator,
    deleteCreator
};