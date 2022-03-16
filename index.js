var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
require('dotenv').config()

var app = express();
app.use(cors())
var conString = process.env.CONN;
var pg = require("pg");


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
    res.send(new Date().toISOString());

});
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/products", async (req, res) => {
    var client = new pg.Client(conString);
    await client.connect()
    const res1 = await client.query('SELECT * from customers', [])
    await client.end()
    res.send(res1.rows);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));