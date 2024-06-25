const express = require("express");
const bodyParser = require('body-parser');
const Connection = require('./Connection/Connection');
const router = require('./Router/Index-router');
const app = express();
const cors = require("cors");
app.use(express.json());
Connection();
app.use(cors());
app.use(router);

app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}))

// app.listen(4000,()=>{
// console.log("server running on port 4000")
// })
