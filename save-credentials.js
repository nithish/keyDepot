var insertDB = require("./nodeMongo");
var args = process.argv;
var readline = require("readline");
const rL = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var obj = {};
rL.question('Enter Website : ', (answer) => {
  obj["web/emailId"] = answer;
  rL.question('Enter Password :', (answer) => {
		obj["pwd"] = answer;
		obj["_id"] = obj["web/emailId"]+"#"+answer;
		var config = new Array(obj);
		insertDB(args[2],args[3],config);
		  rL.close();
 	});
});


