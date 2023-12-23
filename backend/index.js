const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// const bodyParset = require('body-parser')
app.use(express.json());


const todoApi = require("../backend/routes/todos");
app.use("/api/v1", todoApi);


app.listen(PORT, ()=>{
    console.log("App Running Successfuly");
});

const dbConnect = require('../backend/config/database');
dbConnect();

app.get("/", (req, res)=>{
    res.send('This is Home Page');
    console.log("This is Home Page");
})