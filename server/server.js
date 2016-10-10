var url = require('url');
var http = require('http');
var fs = require('fs');
var db = require("./nodeMongo");
var args = process.argv;
var server = http.createServer(function(req, res) {
    var urlStr = url.parse(req.url, true);
    var query = {};
    if (req.method == 'GET')
        switch (urlStr.pathname) {
            case '/':
                fs.readFile("/Git-Repo/keyDepot/index.html", "utf8", function(e, data) {
                    if (!e) {
                        res.writeHead(200, "OK", { 'Content-Type': 'text/html' });
                        res.write(data);
                        res.end();

                    } else {
                        console.log("Error" + e.toString());
                    }
                });
                break;
            case '/css/basic.css':
                fs.readFile("/Git-Repo/keyDepot/css/basic.css", "utf8", function(e, data) {
                    if (!e) {
                        res.writeHead(200, "OK", { 'Content-Type': 'text/css' });
                        res.write(data);
                        res.end();

                    } else {
                        console.log(e.toString());
                    }
                });
                break;
            case '/js/core.js':
                fs.readFile("/Git-Repo/keyDepot/js/core.js", "utf8", function(e, data) {
                    if (!e) {
                        res.writeHead(200, "OK", { 'Content-Type': 'text/javascript' });
                        res.write(data);
                        res.end();

                    } else {
                        console.log("Error" + e.toString());
                    }
                });
                break;
            case '/js/jquery-1.11.2.js':
                fs.readFile("/Git-Repo/keyDepot/js/jquery-1.11.2.js", "utf8", function(e, data) {
                    if (!e) {
                        res.writeHead(200, "OK", { 'Content-Type': 'text/javascript' });
                        res.write(data);
                        res.end();

                    } else {
                        console.log("Error" + e.toString());
                    }
                });
                break;
        }
    else if (req.method == 'POST') {
        switch (urlStr.pathname) {
            case '/doLogin':
                var data = "";
                console.log("[200] " + req.method + " to " + req.url);
                req.setEncoding('utf8');
                req.on("data", function(datum) {
                    data += datum;
                }).on("end", function() {
                    if (data.length > 0) {
                        var obj = decode(data);
                        db(1, obj, function(status) {
                            if (status["user_verify"] == 1) {
                                res.writeHead(200, "OK", { 'Content-Type': 'text/html' });
                                res.write(status["user_verify"]);
                                res.end();
                            }
                        });
                    }
                });
                break;
            case '/doRegister':
                var data = "";
                console.log("[200] " + req.method + " to " + req.url);
                req.setEncoding('utf8');
                req.on("data", function(datum) {
                    data += datum;
                }).on("end", function() {
                    if (data.length > 0) {
                        var obj = decode(data);
                        db(2, obj, function(status) {
                            if (status["user_verify"] == 1) {
                                res.writeHead(200, "OK", { 'Content-Type': 'text/html' });
                                res.write(status["user_verify"]);
                                res.end();
                            }
                        });
                    }
                });
                break;
        }
    }
});
server.listen(7777);
var decode = function(data) {
    var obj = [];
    var url = data.split("&");
    for (let i = 0; i < url.length; i++) {
        var str = url[i].split("=");
        obj[str[0]] = str[1];
    }
    return obj;
}
