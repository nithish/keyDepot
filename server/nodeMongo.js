var mongo = require('mongodb').MongoClient;
module.exports = function(args2, config, callback) {
    mongo.connect("mongodb://localhost:27017/test", function(err, db) {
        switch (args2) {
            case 1:
            	var users = db.db("users");
                users.collection("user_info", function(err, collection) {
                    if (err)
                        console.error(err.toString());
                    else {
                        	collection.find({ "username": config["username"], "pwd": config["pwd"] }).toArray().then(function(docs){
                            console.log(docs);
                            docs.length > 0 ? callback({ "user_verify": 1 }) : callback({ "user_verify": 0 });
                        });
                    }
                });
            break;
            case 2:
            	var users = db.db("users");
                users.collection("user_info", function(err, collection) {
                    if (err)
                        console.error(err.toString());
                    else {
                        	collection.find({ "username": config["username"], "pwd": config["pwd"] }).toArray().then(function(docs){
                            console.log(docs);
                            docs.length > 0 ? callback({ "user_verify": 1 }) : callback({ "user_verify": 0 });
                        });
                    }
                });
            break;
        }
    });
}
