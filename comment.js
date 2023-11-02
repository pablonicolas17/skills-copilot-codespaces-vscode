//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var multer = require('multer');

//Connect to database   
mongoose.connect('mongodb://localhost:27017/Comment');  
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {  
  console.log('Connection success!');
});

//Create schema


var commentSchema = new Schema({
    id: ObjectId,
    name: String,
    comment: String
});

//Create model
var Comment = mongoose.model('Comment', commentSchema);
        