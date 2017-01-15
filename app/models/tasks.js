var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	id: { type: String},
    name: { type: String },
	priority:{type: Number},  
    description:{ type: String },
    status:{ type: String , enum: ['not started', 'started','completed'] ,default : 'not started'},
	type:{type:String},
	start:{type:String},
	end:{type:String},
	created_by:{type:String},
	created_date:{type: Date,default: Date.now},
	progress:{type: Number,default : 0}, 
 	
});

module.exports = mongoose.model('Task1',TaskSchema);