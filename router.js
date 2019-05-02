const express = require('express');
const router = express.Router();
const {ListUser} = require('./model');


router.get('/Userlist/', (req, res, next) => {

	ListUser.get()
	.then( Userrs => {
		res.status(200).json({
			message : 'Successfully sending the list of Users',
			status : 200,
			Users : Users
		});
	}).catch( err => {
		res.status(500).json({
			message : `Internal server error.`,
			status : 500
		});
		return next();

	});
});


router.post('/NewUser/', (req, res, next) => {
	
	let requiredFields = ['UserName', 'Password'];

	for ( let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			});
			return next();
		}
	}

	let objectToAdd = {
		user: req.body.UserName,
		pass: req.body.Password
	};

	ListUser.post(objectToAdd)
		.then(User => {
			res.status(201).json({
				message : "Successfully created a new User",
				status : 201,
				User : User
			});
		})
		.catch( err => {
			res.status(500).json({
				message : `Internal server error.`,
				status : 500
			});
			return next();
		});
});

module.exports = router;