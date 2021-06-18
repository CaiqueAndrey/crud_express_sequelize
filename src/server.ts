import express from "express";

const port = process.env.PORT || 3001;

const server = express();

server.use(require('./app'));

server.listen(port, () => {
  console.log('Server started');
});