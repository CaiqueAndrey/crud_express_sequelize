import express from "express";
require('dotenv').config();
const port = process.env.NODE_PORT;

const server = express();

server.use(require('./app'));

server.listen(port, () => {
  console.log(`Server started in port ${port}`);
});