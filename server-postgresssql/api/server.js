const express = require('express');
const cors = require('cors');


const server = express();
server.use(cors());
server.use(express.json());



const plantRoutes = require('./controllers/plants')


//root Route 

server.use('/plants', plantRoutes)

server.get('/', (req, res) => res.send('Hello, Pearl here!'))

module.exports = server 