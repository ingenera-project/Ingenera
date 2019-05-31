const jwt = require('jsonwebtoken');
const { hash } = require('bcryptjs');
const config = require('../../config/config');
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

				newUsers.save((err, savedData) => {
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
						html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

						<html xmlns="http://www.w3.org/1999/xhtml">
						
						<head>
						
							<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
						
							<title>Confirmation Email</title>
						
							<style>
						
								body {
						
									background-color: #FFFFFF; padding: 0; margin: 0;
						
								}
						
							</style>
						
						</head>
						
						<body style="background-color: #FFFFFF; padding: 0; margin: 0;">
						
						<table border="0" cellpadding="0" cellspacing="10" height="100%" bgcolor="#FFFFFF" width="100%" style="max-width: 650px;" id="bodyTable">
						
							<tr>
						
								<td align="center" valign="top">
						
									<table border="0" cellpadding="0" cellspacing="0" width="100%" id="emailContainer" style="font-family:Arial; color: #333333;">
						
										<!-- Logo -->
						
										<tr>
						
											<td align="left" valign="top" colspan="2" style="border-bottom: 1px solid #CCCCCC; padding-bottom: 10px;">
						
											   
						
											</td>
						
										</tr>
						
										<!-- Title -->
						
										<tr>
						
											<td align="left" valign="top" colspan="2" style="border-bottom: 1px solid #CCCCCC; padding: 20px 0 10px 0;">
						
												<span style="font-size: 18px; font-weight: normal;">Confirmation Email</span>
						
											</td>
						
										</tr>
						
										<!-- Messages -->
						
										<tr>
						
											<td align="left" valign="top" colspan="2" style="padding-top: 10px;">
						
												<span style="font-size: 12px; line-height: 1.5; color: #333333;">
						
													We have sent you this email to verify your account for Ingenera. 
						
													<br/><br/>
						
													To verify   , <a href="http://localhost:3001/auth/">please follow this link</a>
						
													
						
						
												</span>
						
											</td>
						
										</tr>
						
									</table>
						
								</td>
						
							</tr>
						
						</table>
						
						</body>
						
						</html>`
					};
					transporter.sendMail(mailOptions, (err, res) => {
						if (err) {
							console.log('Error', err);
							return;
						} else {
							console.log('Email Sent');
						}
					})

					const token = jwt.sign({ userId: savedData._id }, config.secretKey);
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





