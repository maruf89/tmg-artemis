'use strict';

var config,
    app,
    httpServer,

    express         = require('express'),
    coffee          = require('coffee-script'),
    http            = require('http')
    ;

/**
 * Main application file
 */

// Default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
config = require('./lib/config/config');

/*  Service instantiation + redis session storage  */
app = express();

httpServer = http.createServer(app);

// Express settings
require('./lib/config/express')(app);

// Routing
require('./lib/routes')(app);

// Start server
app.listen(config.port, function () {
  console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;