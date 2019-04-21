const { Missions } = require('../../../Database/missionsSchema');
const { EditAndValidate } = require('../../Helper/utility')

module.exports = updateMission = (req, res) => {
    let { body } = req;
    let bodyKeys = Object.keys(body);
    let obj = {}
    let updateMission = EditAndValidate(body, bodyKeys)
    if (Object.keys(updateMission).length) {

        body.status === 1 ? obj = { ...updateMission, publishDate: Date.now() } : obj = updateMission

        Missions.findOneAndUpdate({ _id: body.id }, { $set: obj }, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            } else {
                res.send({ message: "Has been updated", status: 200, payload: data });
                return;
            }
        });
    } else {
        res.send({ message: "Nothing updated, because there's no content", status: 204 }).status(204)
        return;
    }
}