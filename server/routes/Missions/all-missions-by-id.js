const { Missions } = require('../../../Database/missionsSchema');

module.exports = allMissionsById = (req, res) => {
    let { userId } = req.params;
    let { query } = req;
    if (!!query.count) {
        query.count = parseInt(query.count)
    } else {
        query.count = 25;
    }

    if (!!query.page) {
        query.skip = parseInt((query.page - 1) * query.count);
    } else {
        query.skip = 0;
    }
    Missions.find({ userId, isDeleted: 0 })
        .limit(query.count)
        .skip(query.skip)
        .exec((err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.send(data);
        })
}