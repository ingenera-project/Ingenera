const { Missions } = require('../../../Database/missionsSchema');


module.exports = dashboardSumary = (req, res) => {
    let obj = {}
    let counter = 1
    let secondCounter = 1
    let { userId } = req.params;
    Missions.find({ userId, isDeleted:0 }, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        obj.all = data.length
        for (let i = 0; i < data.length; i++) {
            if (data[i].status === 1) {
                obj.open = counter++


            }
            if (data[i].status === 0) {
                obj.saved = secondCounter++

            }
        }

        res.send(obj)
    })

}