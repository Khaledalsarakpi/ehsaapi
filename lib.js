const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require('helmet');
const cors = require("cors");
const morgan=require('morgan');
const bodyParser = require('body-parser');
const list_router = require("./list/list_router");
const request_router = require("./request/request_router");
const notification = require('./notification');
const auth = require('./authentication/auth_router');
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('tiny'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
module.exports ={app,express,server,morgan,bodyParser,list_router,request_router,notification,cors,io,helmet,auth};