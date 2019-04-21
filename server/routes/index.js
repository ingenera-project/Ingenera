const express = require('express');
const router = express.Router();
const baseAuth = require('../access-controll/base-auth')
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

/*
  * security checking
*/
router.get('/secure', baseAuth, (req, res) => {
  const { user } = req;
  res.send(user);
});

module.exports = router;
