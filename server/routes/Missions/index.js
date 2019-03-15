const express = require('express');
const router = express.Router();


/*
    Handlers
*/
const addMission = require('./add-mission');
const updateMission = require('./edit-mission');
const publishMission = require('./publish-missions')
const saveWithoutPublish = require('./save-without-publish')
/*
    Routes
*/

router.post('/create', addMission);
router.post('/update', updateMission);
router.get('/publish', publishMission);
router.get('/saveWithoutPublish', saveWithoutPublish);



module.exports = router;
