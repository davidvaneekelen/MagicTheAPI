var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var foreignNameSchema = new Schema({
	language: {type: String, required: true},
	name: {type: String, required: true}
});

module.exports = mongoose.model('ForeignName', foreignNameSchema);