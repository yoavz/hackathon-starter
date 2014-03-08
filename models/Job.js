var mongoose = require('mongoose');
var Schema = mongoose.Schema
var User = require('mongoose').model('User');

var jobSchema = new Schema({
	users: {
		phone: String,
		venmoID: String,
		amount: Number,
		hasPayed: { type: Boolean, default: false },
		isMaster: { type: Boolean, default: false },

		isVerfied: { type: Boolean, default: true } 
	}, 

	total_amount: Number,
	is_active: { type: Boolean, default: false }
});