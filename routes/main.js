const express = require('express');

const sendFortunes = require('../controllers/sendFortunes');

const router = express.Router();



router.route('/').post(sendFortunes);


module.exports = router;