var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.status(200).send("Hello World");
});

app.get("/healthcheck", function(req, res) {
    res.sendStatus(200);
});

var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || "0.0.0.0");

app.listen(port, host);
