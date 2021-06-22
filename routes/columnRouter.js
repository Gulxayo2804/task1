const router = require('express').Router();
const {createColumns, updateColumns, deleteColumns} = require('../controllers/columnController');
const {protect} = require('../middleware/auth');

router.post('/add',protect, createColumns);
router.put('/:id',protect, updateColumns);
router.delete('/:id',protect, deleteColumns);

module.exports = router;