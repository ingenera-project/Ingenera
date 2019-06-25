const express = require('express');
const router = express.Router();
const authController = require('./Auth/index');
const Missions = require('./Missions/index');
const Filter = require('./Filter');


/* GET home page. */
router.use('/auth', authController);


/*
  * Get Missions
*/
router.use('/mission', Missions);


/**
  * FILTERATION
 */

router.use('/search', Filter);



module.exports = router;
