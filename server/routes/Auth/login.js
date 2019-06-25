const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const { compare } = require('bcryptjs');
const { users } = require('../../../Database/usersSchema')
module.exports = login = (req, res) => {
	const { email, password } = req.body;
	console.log("check data ", password)
	users.findOne({ email }, (err, data) => {
		console.log("check data ", data)
		if (err) {
			res.sendStatus(500);
		} else if (!data) {
			res.send({
				code: 409,
				message: 'User Does Not Exist'
			});

		} else {
			compare(password, data.password, (err, match) => {
				console.log("matching -===> ", match)
				if (err) {
					console.log(err)
					res.sendStatus(500);
					return;
				}
				if (match) {
					const token = jwt.sign({
						role: data.role,
						email, userId: data._id
					}, config.secretKey);
					res.send({
						role: data.role,
						token,
						code: 200,
						message: `Welcome Back ${data.firstName}`,
						firstName: data.firstName

					});
					return;
				}
				else {
					res.send({
						code: 409,
						message: 'Password is wrong'
					})
					return;
				}
			});
		}
	});
};
