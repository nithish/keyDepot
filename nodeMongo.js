var mongo = require('mongodb').MongoClient;
module.exports = function(args2,args3,config){
	mongo.connect("mongodb://localhost:27017/"+args2,function(err,db){
		var dbname = args2 || "pwd";
		db.db(dbname);
			db.createCollection(args3,function(e,r){
				var coll = db.collection(args3 || "non_personal");
					coll.insertMany(config,function(err,res){
							if(err){
								console.log(err.errmsg);
								db.close();
								return;
							}
							console.log("Your credentials have been saved!");
							db.close();
					});
				});
			});
}