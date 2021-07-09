var http = require("http");
var url = require("url");
var fs = require("fs");
// var MongoClient = require("mongodb").MongoClient;

// const mongoUrl = "mongodb+srv://hliu23:Rd8IrvP313BixT1Ocel5jh0w@dcfc.wkwac.mongodb.net/Daily%20Carbon%20Footprint%20Calculator?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
// const mongoUrl = "mongodb+srv://hliu23:Rd8IrvP313BixT1Ocel5jh0w@dcfc.mongodb.net/Daily%20Carbon%20Footprint%20Calculator?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const mongoUrl = "mongodb://hliu23:Rd8IrvP313BixT1Ocel5jh0w@cluster0-shard-00-00-zcbag.mongodb.net:27017,cluster0-shard-00-01-zcbag.mongodb.net:27017,cluster0-shard-00-02-xvnqv.mongodb.net:27017/zcbag?ssl=true&replicaSet=Cluster0-shard-0&authSource=test&retryWrites=true&w=majority";

const client = new MongoClient(mongoUrl);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

var port = process.env.PORT;
if (port == null || port == "") port = 8080;

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var file = "." + q.pathname;
  fs.readFile(file, function (err, data) {
    if (err) {
      // change to separate file
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("<h1>404</h1>");
      res.write("<h2>Page Not Found</h2>");
      return res.end();
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  })
}).listen(port);
