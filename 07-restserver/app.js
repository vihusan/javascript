const server = require('./models/server');

require('dotenv').config();

const serve = new server();
serve.listen()
