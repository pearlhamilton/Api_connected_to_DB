const express = require('express');
const cors = require('cors');


const server = express();
server.use(cors());
server.use(express.json());





//root Route 

server.get('/', (req, res) => res.send('Hello, Pearl here!'))

module.exports = server 