const { Missions } = require('../../../Database/missionsSchema');

module.exports = saveWithoutPublish = (req, res) => {
    const { userId, statusId } = req.params
    console.log('check user id ', userId, statusId)
    Missions.find({ userId: userId, status: statusId, isDeleted: 0 }, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.send(data)
    })

}