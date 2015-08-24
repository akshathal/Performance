
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
exports.loadTestcases = function (req, res) {
	MongoClient.connect('mongodb://localhost/RSD_DEV1', function(err, dbs) {

	if(err) { return console.dir(err); }

	console.log("Connected to db in post");
			
	//var formData = req.query.id;
	//var id = parseInt(formData);
	//console.log("MT_RECIPEXML_NEW_ID:"+id);
		
	var collection2 = dbs.collection('mt_recipe_steps');
		
	collection2.find({MT_RECIPEXML_NEW_ID:1}).toArray(function(err, itemsteps) {
	console.log("itemstep : ",itemsteps);	
				
	//res.send(itemsteps);
	 var json2html = require('node-json2html');

	    var data = itemsteps ;

	    var transform = {'tag':'div','html':'${MT_RECIPEXML_NEW_ID} ${STEP_Number} ${STEP_DETAILS} ${FRONTEND} ${BACKEND} ${AUDIO_ALERT} ${BATTERY} ${BLUETOOTH} ${CAMERA} ${CHARGING} ${DISPLAY_KEYBORED} ${MEMORY_CARD} ${POWER_ON_OFF} ${SIM_CARD} ${WIFI} ${NO_COMPLAINT}'};

	    var html = json2html.transform(data,transform);
	    console.log(html);
	    
	  res.send('test', html);
	 // res.render('test', {html:html});
	 
			});
	 
	});
};