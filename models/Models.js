/**
 * Created by jimtrim on 07/05/15.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Player = new Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true}
});

var Tournament = new Schema({
	format: {type: String, required: true},
	players: {type: ObjectId, ref: "Player"}
});
