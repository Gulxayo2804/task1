const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');


const {createCard,updateByColumns,updateCard,deleteCard} =require('../controllers/cardControllers')

router.post('/add',protect,createCard);
router.put('/:id', protect,updateByColumns);
router.put('/:id',protect, updateCard);
router.delete('/:id',protect, deleteCard);

module.exports = router;