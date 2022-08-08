const Collections = require('../models/Collections');

const getAllCollections = async (req, res) => {
    try {
        const collections = await Collections.find();
        res.status(200).json(collections);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Collections not Found"
        });
        console.log(error);
    };
};

const getCollectionById = async (req, res) => {
    const { id } = req.params;
    try {
        const collection = await Collections.findById(id);
        res.status(200).json(collection);
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Collection not Found"
        });
        console.log(error);
    };
};

const createCollection = async (req, res) => {
    try {
        const newCollection = new Collections(req.body);
        await newCollection.save();
        res.status(200).json({
            ok: true,
            msg: 'Collection created',
            newCollection
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Collection could not be created"
        });
        console.log(error);
    };
};

const modifyCollection = async (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    try {
        const collectionUpdate = await Collections.findByIdAndUpdate(
            id,
            body,
            { new: true } 
        );
        res.status(200).json({
            ok: true,
            msg: 'Collection modified',
            collectionUpdate
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Collection could not be modified"
        });
        console.log(error);
    };
};

const deleteCollection = async(req, res) => {
    const { id } = req.params;
    try {
        const delCollection = await Collections.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "Collection deleted",
            delCollection
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: "Collection not Found"
        });
        console.log(error);
    };
};

module.exports = {
    getAllCollections,
    getCollectionById,
    createCollection,
    modifyCollection,
    deleteCollection
};