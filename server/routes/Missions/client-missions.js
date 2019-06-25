const { Missions } = require('../../../Database/missionsSchema');

module.exports = getPublishOrSaveMissions = (req, res) => {
    //?count=10&page=1
    /**
     * @ api/mission/client/5caee773693ee2188f97830f/status/1?count=1&page=1
     */
    const { userId, statusId } = req.params
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
    Missions.find({ userId: userId, status: statusId, isDeleted: 0 })
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

