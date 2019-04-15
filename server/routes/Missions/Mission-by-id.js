const { Missions } = require('../../../Database/missionsSchema');

module.exports = missionById = (req, res) => {
    let { missionId } = req.params;
   
    Missions.find({ _id: missionId }, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        console.log(data)
        res.send(data);
    })

}