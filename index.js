require("dotenv").config()
const server = require('./app.js');
require('./database');
const port= process.env.port || 8001

// Syncing all the models at once.

  server.listen(port, () => {
    console.log('Running server: port 8001:'); // eslint-disable-line no-console
  });

