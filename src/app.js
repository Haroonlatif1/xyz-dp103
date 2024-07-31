const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes.js");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

// Integration with MongoDB
mongoose.connect("mongodb+srv://haroonx2coc:abcdabcd@cluster0.wukybiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected with MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

// Exporting app
module.exports = app;
