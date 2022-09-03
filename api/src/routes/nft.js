const router = require('express').Router();
const { createNft, 
        getNftById, 
        getAllNfts, 
        updateNft, 
        deleteNft } = require("../controllers/nft.controllers");

router.post('/', createNft);
router.get('/', getAllNfts);
router.get('/:id', getNftById);
router.put('/:id', updateNft);
router.delete('/:id', deleteNft);

module.exports = router;
// Compare this snippet from api\src\routes\index.js:

  
    
