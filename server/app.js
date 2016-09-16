/**
 * http://usejsdoc.org/
 */
const express = require("express");
const bodyParser = require("body-parser");
const dbUtils = require("./utils/DBUtils");
const config = require("../ets/config");

dbUtils.setUpConnection();

const app = express();

const server = app.listen(config.serverPort, function(){
	console.log("Server Run...");
});

app.use(bodyParser.json());

app.get("/notes", function(req, res){
	console.log(1);
	dbUtils.listNotes().then(function(data){
		res.send(data);
	});
});

app.post("/notes", function(req, res){
	dbUtils.createNote(req.body).then(function(data){
		res.send(data);
	});
});

app.delete("/notes/:id", function(req, res){
	dbUtils.deleteNote(req.params.id).then(function(data){
		res.send(data);
	});	
});