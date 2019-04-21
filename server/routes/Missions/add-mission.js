const { Missions } = require('../../../Database/missionsSchema');


module.exports = addMisstion = (req, res) => {

    const { status } = req.body;
    let obj = {}
    status === 1 ? obj = { ...req.body, publishDate: Date.now() } : obj = req.body

    let mission = new Missions({ ...obj, isDeleted: 0, creationDate: Date.now() });
    mission.save((err, data) => {
        if (err) {
            console.log("Erorr ", err);
            res.sendStatus(500);
            return;
        }
        res.send({ message: "Your mission has been saved", status: 200 })
        return;
    });

};