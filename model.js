
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let UserSchema = mongoose.Schema({
	user : {type : String, required : true, unique : true},
	pass : {type : String, required : true},
	cantCv : {type : Number, required : true},
	PrimaryCV : {type : Number, required : true},
	FullName : [{type : String}],
	email : [{type : String}],
	CellPhone : [{type : String}],
	Objective : [{type : String}],
	University : [{type : String}],
	Major : [{type : String}],
	OfficeSkills : [{type : String}],
	TechnicalSkills : [{type : String}],
	Company1 : [{type : String}],
	Position1 : [{type : String}],
	Location1 : [{type : String}],
	Years1 : [{type : String}],
	Company2 : [{type : String}],
	Position2 : [{type : String}],
	Location2 : [{type : String}],
	Years2 : [{type : String}],
	Hobbies : [{type : String}],
	References : [{type : String}],


	Tips : [{type : String}]
	
});

let users = mongoose.model('Users', UserSchema);

const ListUser = {
	get : function(){
		//error aqui
		return users.find()
			.then(User => {
				console.log(User)
				return User;
			})
			.catch(err => {
				 throw new Error(err);
			});
	} ,


	post : function(newUser){
		return users.create(newUser)
			.then(User => {
				return User;
			})
			.catch(err => {
				 throw new Error(err);
			});
	},

	updateField : function(userT, newData){
		
		return users.updateOne({user : userT}, { $push: newData }, { new: true })
			.then(user => {
				if (user){
					return user;
				}
				throw new Err("Sport not found");
			})
			.catch(err =>{
				throw new Error(err);
			});
	},

	updateFieldPrimary : function(userT, newData){
		
		return users.updateOne({user : userT}, { $set: newData }, { new: true })
			.then(user => {
				if (user){
					return user;
				}
				throw new Err("Sport not found");
			})
			.catch(err =>{
				throw new Error(err);
			});
	},

	delete : function(userT, data){

		return users.replaceOne({user : userT}, data)
			.then(user => {
				if (user){
					return user;
				}
				throw new Err("Sport not found");
			})
			.catch(err =>{
				throw new Error(err);
			});
		


	},

	decrese : function(userT, newData){

		return users.updateOne({user : userT},{ $inc: {cantCv: -1 } })
			.then(user => {
				if (user){
					return user;
				}
				throw new Err("Sport not found");
			})
			.catch(err =>{
				throw new Error(err);
			});
	},

	increment : function(userT, newData){

		return users.updateOne({user : userT},{ $inc: {cantCv: 1 } })
			.then(user => {
				if (user){
					return user;
				}
				throw new Err("Sport not found");
			})
			.catch(err =>{
				throw new Error(err);
			});
	},

	login : function(userT){
		return users.findOne({user: userT})
			.then(User => {
				return User;
			})
			.catch(err => {
				 throw new Error(err);
			});
	}
	}

module.exports = {ListUser};





