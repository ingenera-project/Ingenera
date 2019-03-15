const { Missions } = require('../../../Database/missionsSchema');

module.exports = publishMissions = (req, res) => { 
    Missions.find({ status: 1, isDeleted: 0}, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.send(data);
    })

}