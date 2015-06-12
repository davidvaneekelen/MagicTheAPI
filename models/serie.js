var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var serieSchema = new Schema({
	name: {type: String, required: true},
	code: {type: String, required: true},
	magicCardsInfoCode: {type: String, required: true},
	releaseDate: {type: String, required: true},
	border: {type: String, required: true},
	type: {type: String, required: true},
	booster: [{type: String, required: false}],
	cards: {type: Schema.Types.ObjectId, ref: 'Card', required: true}
});

module.exports = mongoose.model('Serie', serieSchema);