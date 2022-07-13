const http = require('http');
const { parseBodyParams } = require('./parseBodyParams.js');
const { parseSearchParams } = require('./parseSearchParams.js');
const { createRouter } = require('./router.js');

const startServer = (port, app) => {
  const server = http.createServer(app);
  server.listen(port, () => console.log(`server is listening on ${port}`));
};

module.exports = { startServer, parseBodyParams, parseSearchParams, createRouter };
