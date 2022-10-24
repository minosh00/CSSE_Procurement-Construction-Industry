const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
    companyName: {
		type: String,
		required: true,
		default:null
	},

supplierAddress: {
		type: String,
		required: true,
		default:null
	},

	password: {
		type: String,
		required: true,
	},
	userRole: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model("suppliers", UserSchema);