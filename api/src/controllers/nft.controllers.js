const Nft = require('../models/Nfts');

const createNft = async (req, res) => {
    try {
        const obj = req.body;
        const nft = new Nft(obj);
        await nft.save();
        res.status(200).json({
            ok: 'true',
            msg: 'NFT created'
        });
    }
    catch (error) {
        res.status(500).json({
            ok: 'false',
            msg: "Unexpected error"
        });
        console.log(error);
    };
};

const getNftById = async (req, res) =>{
    const { id } = req.params;
    try {
        const getById = await Nft.findById(id)
            .populate('categories', { name:1, _id:0})
            .populate('creator', { name:1, _id:0})
            .populate('owner', { name:1, _id:0})
            .populate('currencies', { name:1, _id:0})
            .populate('Files_types', { name:1, _id:0})
            .populate('Collections', { name:1, _id:0})
        res.status(200).json( getById );   
    
    } catch (error) {
        res.status(404).json({
            ok: 'false',
            msg: 'Id Not Found'
        });
        console.log(error);
    };
};

const getAllNfts = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const start = (page - 1) * limit;
    const end = page * limit;
    try {
        const nfts = await Nft.find({})
            .skip(start)
            .limit(limit)
            .populate('categories', { name:1, _id:0})
            .populate('creator', { name:1, _id:0})
            .populate('owner', { name:1, _id:0})
            .populate('currencies', { name:1, _id:0})
            .populate('Files_types', { name:1, _id:0})
            .populate('Collections', { name:1, _id:0})
            .exec();
        const total = await Nft.countDocuments();
        const countPages = Math.ceil(total / limit);
        res.json({
            ok: true,
            nfts,
            total,
            end,
            countPages
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

const updateNft = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const nftUpdate = await Nft.findByIdAndUpdate(id, body, { new: true });
        res.json(nftUpdate);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };

};

const deleteNft = async (req, res) => {
    const { id } = req.params;
    try {
        const nftDelete = await Nft.findByIdAndDelete(id);
        res.json(nftDelete);
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    };
};

module.exports = {
    createNft, getNftById, deleteNft, getAllNfts, updateNft
};