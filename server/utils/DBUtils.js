const mognoose = require("mongoose");
const dbConfig = require("../../ets/config").db;

require("../models/Note");

const Note = mognoose.model("Note");

exports.setUpConnection = function(){
	mognoose.connect(dbConfig.url);
};

exports.listNotes = function(){
	return Note.find();
};

exports.createNote = function(data){
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createAt: new Date()
	});
	note.save();
};

exports.deleteNote = function(id){
	return Note.findById(id).remove();
};