require("dotenv").config()
require('./database');
const server = require('./app.js');
const port= process.env.port || 8001

// Syncing all the models at once.

  server.listen(port, () => {
    console.log(`Running server: port ${port}:`); // eslint-disable-line no-console
  });

