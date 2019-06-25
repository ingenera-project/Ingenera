const { Missions } = require('../../../Database/missionsSchema');

module.exports = publishMissions = (req, res) => {
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
    Missions.find({ status: 1, isDeleted: 0 })
        .limit(query.count) //limit
        .skip(query.skip) // skip
        .exec((err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.send(data);
        })

}

