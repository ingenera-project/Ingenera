const { users } = require('../../../Database/usersSchema')
const { hash } = require('bcryptjs');
module.exports = resetPass = (req, res) => {
    const { id, newPass } = req.body;
    users.findOne({
        _id: id
    }, (err, data) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        if (Date.now() <= parseInt(data.resetPasswordExpires)) {

            hash(newPass, 10, (err, hash) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                users.findOneAndUpdate({ _id: id }, {
                    $set: {
                        password: hash
                    }
                }, (err, data) => {

                    if (err) {
                        res.sendStatus(400)
                        console.log(err);
                        return;
                    }
                    res.send({
                        code: 200,
                        message: 'Your password has been changed'
                    })
                    return;
                })
            })
        } else {
            res.send({
                code: 409,
                message: 'Token has expired'
            })

        }
    })
}