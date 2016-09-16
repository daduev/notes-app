const mognoose = require("mongoose");

const Schema = mognoose.Schema;

const NoteSchema = new Schema({
	title : {type : String},
	text : {type : String, required: true},
	color : {type : String},
	createAt : {type : Date}
});

const Note = mognoose.model("Note", NoteSchema);
