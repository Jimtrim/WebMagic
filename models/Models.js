/**
 * Created by jimtrim on 07/05/15.
 */
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var Player = new Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true}
});

var Table = new Schema({
	players: {type: Schema.ObjectId, ref: "Player"}
});

var Tournament = new Schema({
	format: {type: String, required: true},
	date: {type: Date, default: Date.now},
	players: {type: Schema.ObjectId, required: false, ref: "Table"},
	tables: {type: Schema.ObjectId, required: false, ref: "Player"}
});

modules.exports = {
	Player: Player,
	Table: Table,
	Tournament: Tournament
};
