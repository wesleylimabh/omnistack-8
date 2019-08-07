const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('../config.json');
const cors = require('cors');

const { user, pass, base} = config.database;
const { node_port: port } = config.server;

const server = express();

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-1dzlm.mongodb.net/${base}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port);
