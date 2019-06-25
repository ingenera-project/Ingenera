const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { users } = require('../../Database/usersSchema')

const tokenShouldBeExist = async (token, res, next) => {
	const user = jwt.verify(token, config.secretKey);
	const userRes = await users.findOne({ _id: user.userId });
	if (userRes._id.toString() === user.userId) {
		return next();
	}
	res.sendStatus(401);
	return;
};



const verifyUserIsProjectManager = async (token, res, next) => {
	const user = jwt.verify(token, config.secretKey);
	const userRes = await users.findOne({ _id: user.userId });
	if (userRes._id.toString() === user.userId && userRes.role === 'pm') {
		return next();
	}
	res.sendStatus(401);
	return;
};

const verifyUserIsBusinessManager = async (token, res, next) => {
	const user = jwt.verify(token, config.secretKey);
	const userRes = await users.findOne({ _id: user.userId });
	if (userRes._id.toString() === user.userId && userRes.role === 'bm') {
		return next();
	}
	res.sendStatus(401);
	return;
};

const verifyUserIsAdmin = async (token, res, next) => {
	const user = jwt.verify(token, config.secretKey);
	const userRes = await users.findOne({ _id: user.userId });
	if (userRes._id.toString() === user.userId && userRes.role === 'Admin') {
		return next();
	}
	res.sendStatus(401);
	return;
};

const legitProjectManager = (req, res, next) => {
	const token = req.get('Authorization').split(' ');
	if (token[0] !== 'Bearer') {
		res.sendStatus(401);
		return;
	}
	return verifyUserIsProjectManager(token[1], res, next);
};

const legitBusinessManager = (req, res, next) => {
	const token = req.get('Authorization').split(' ');
	if (token[0] !== 'Bearer') {
		res.sendStatus(401);
		return;
	}
	return verifyUserIsBusinessManager(token[1], res, next);
};

const legitAdmin = (req, res, next) => {
	const token = req.get('Authorization').split(' ');
	if (token[0] !== 'Bearer') {
		res.sendStatus(401);
		return;
	}
	return verifyUserIsAdmin(token[1], res, next);
};
const tokenShouldExist = (req, res, next) => {
	const token = req.get('Authorization').split(' ');
	if (token[0] !== 'Bearer') {
		res.sendStatus(401);
		return;
	}
	return tokenShouldBeExist(token[1], res, next);
};

module.exports = {
	legitAdmin,
	legitBusinessManager,
	legitProjectManager,
	tokenShouldExist
};
