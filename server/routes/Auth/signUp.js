const jwt = require('jsonwebtoken');
const { hash } = require('bcryptjs');
const config = require('../../utils/config');
const { users } = require('../../../Database/usersSchema')
const nodemailer = require('nodemailer');




module.exports = register = (req, res) => {
	const { firstName, email, lastName, password, role } = req.body;
	users.find({ email: email }, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else if (data.length > 0) {
			res.send({
				status: 409,
				message: 'User Already Exist'
			});
			return;
		} else {
			hash(password, 10, (err, hash) => {
				if (err) {
					res.sendStatus(500);
				}
				const newUsers = new users({ ...req.body, password: hash });

				newUsers.save((err, savedUser) => {
					if (err) {
						res.sentStatus(500);
					}
					var transporter = nodemailer.createTransport({
						service: 'gmail',
						auth: {
							user: 'mohd.alduraidi@gmail.com',
							pass: process.env.EMAIL_PASS
						}
					})

					var mailOptions = {
						from: 'mohd.alduraidi@gmail.com',
						to: email,
						subject: 'Sign up successfuly',
						text: `Welcome to Ingenera ${firstName}`
					};
					transporter.sendMail(mailOptions, (err, res) => {
						if (err) {
							console.log('Error', err);
							return;
						} else {
							console.log('Email Sent');
						}
					})
					console.log('check id ==>', savedUser._id)
					const token = jwt.sign({...req.body, id: savedUser._id}, config.secret);
					res.send({
						status: 200,
						token,
						role,
						message: `Welcome ${firstName}`,
					});
				});
			});
		}
	})
};





