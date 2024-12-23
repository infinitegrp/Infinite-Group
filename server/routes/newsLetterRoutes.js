const express = require('express');
const { subscribe,updategetSubscribeStatus,getSubscribe } = require('../controllers/newsLetterController');

const router = express.Router();

router.post('/', subscribe);
router.get('/getAllSubscribes', getSubscribe);
router.put('/update-status', updategetSubscribeStatus);

module.exports = router;
