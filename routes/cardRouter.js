const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');


const {createCard,
    updateByColumns,
    updateCard,
    deleteCard,
    getByUserCard,
    getSearch,
    deleteUserByCard,
    updateUserByCard
} =require('../controllers/cardControllers')

router.post('/add',protect,createCard);
router.put('/:id', protect,updateByColumns);
router.put('/:id',protect, updateCard);
router.delete('/:id',protect, deleteCard);
router.put('/user/:id',protect, updateUserByCard);
router.delete('/user/:id',protect, deleteUserByCard);
router.get('/:id',protect, getByUserCard);
router.get('/search',protect, getSearch);
module.exports = router;