var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express();
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hello World")
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));