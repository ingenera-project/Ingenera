const { Missions } = require('../../../Database/missionsSchema');

module.exports = saveWithoutPublish = (req, res) => {
    const { userId ,status} = req.params
    console.log('check user id ', userId)
    Missions.find({ userId: userId, status: 0, isDeleted: 0 }, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.send(data)
    })

}