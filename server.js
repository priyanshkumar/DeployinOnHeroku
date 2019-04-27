var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.post("/api", function(req, res) {
  res.json(req.body);
});

app.get("/add", function(req, res) {
  res.json(path.join(__dirname, "add.html"));
});

app.listen(PORT, function() {
  console.log(`Server up and running PORT ${PORT}`);
});
