const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

//catch-all endpoint
server.get('*', handleDefault)
function handleDefault(req, res) {
  res.json({ message: 'hello you are in Node-DB3 Challenge with Jayne'});
}

module.exports = server;