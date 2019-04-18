const express = require('express');
const router = express.Router();


/*
    Handlers
*/
const searchFilter = require('./searchFilter');

/*
    Routes
*/
router.post('/filter', searchFilter);

module.exports = router;

