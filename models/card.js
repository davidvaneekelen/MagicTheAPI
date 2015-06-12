var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
	layout: {type: String, required: true},
	type: {type: String, required: true},
	types: [{type: String, required: true}],
	colors: [{type: String, required: false}],
	multiverseid: {type: Number, required: true},
	name: {type: String, required: true},
	subtypes: [{type: String, required: false}],
	originalType: {type: String, required: false},
	cmc: {type: String, required: true},
	rarity: {type: String, required: true},
	artist: {type: String, required: true},
	power: {type: String, required: false},
	toughness: {type: String, required: false},
	manaCost: {type: String, required: true},
	text: {type: String, required: false},
	originalText: {type: String, required: false},
	flavor: {type: String, required: false},
	number: {type: Number, required: true},
	imageName: {type: String, required: false},
	foreignNames: [{type: Schema.Types.ObjectId, ref: 'ForeignName', required: false}],
	legalities: [{type: String, required: false}],
	printings: [{type: String, required: true}],
	printingCodes: [{type: String, required: true}]
});

module.exports = mongoose.model('Card', cardSchema);