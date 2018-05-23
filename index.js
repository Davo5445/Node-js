const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const artistsController = require('./controllers/artists');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/' , function(req , res) {
	res.send("Welcome");
});

app.get('/artists/:id' , artistsController.findById);

app.get('/artists' , artistsController.all);

//app.post('/artists' , artistsController.create);

app.put('/artists/:id' , artistsController.update);

app.delete('/artists/:id' , artistsController.delete);


db.connect("students",'mongodb://localhost/students',function (err )	 {
	if(err){
		console.log("errow");
	}
	
	app.listen(8080 , function() {
		console.log("api server run on 8080 port");
	});
})

