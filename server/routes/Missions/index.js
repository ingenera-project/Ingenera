const express = require('express');
const router = express.Router();
const { legitProjectManager, tokenShouldExist } = require('../../access-controll/base-auth')


/*
    Handlers
*/
const addMission = require('./add-mission');
const updateMission = require('./edit-mission');
const publishMission = require('./publish-missions');
const clientMissions = require('./client-missions');
const missionById = require('./Mission-by-id');
const allMissionByClientId = require('./all-missions-by-id');
const dashboardSumary = require('./dashboard-summary');


/*
    Routes
*/
router.post('/create', legitProjectManager, addMission);
router.post('/update', legitProjectManager, updateMission);
router.get('/publish', tokenShouldExist, publishMission);
router.get('/misisonById/:missionId', legitProjectManager, missionById);
router.get('/client/:userId/status/:statusId', legitProjectManager, clientMissions);
router.get('/allMissionsByUserId/:userId', legitProjectManager, allMissionByClientId);
router.get('/dashboardSumary/:userId', legitProjectManager, dashboardSumary);






module.exports = router;
