const express = require('express');
const router = express.Router();
const { legitBusinessManager } = require('../../access-controll/base-auth')

/*
    Handlers
*/
const searchFilter = require('./searchFilter');

/*
    Routes
*/
router.post('/filter', legitBusinessManager, searchFilter);

module.exports = router;

