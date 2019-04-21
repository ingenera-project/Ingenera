const express = require('express');
const router = express.Router();


/*
    Handlers
*/
const addMission = require('./add-mission');
const updateMission = require('./edit-mission');
const publishMission = require('./publish-missions');
const clientMissions = require('./client-missions');
const missionById = require('./Mission-by-id');
const allMissionsById = require('./all-missions-by-id');
const dashboardSumary = require('./dashboard-summary');
/*
    Routes
*/
router.post('/create', addMission);
router.post('/update', updateMission);
router.get('/publish', publishMission);
router.get('/misisonById/:missionId', missionById);
router.get('/client/:userId/status/:statusId', clientMissions);
router.get('/allMissionsByUserId/:userId', allMissionsById);
router.get('/dashboardSumary', dashboardSumary)
// 

module.exports = router;
