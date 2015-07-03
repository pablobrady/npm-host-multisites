// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ),
    vhost = require( 'vhost' );

function createVirtualHost(domainName, dirPath) {
    return vhost(domainName, express.static( dirPath ));
}

//Create server
var app = express();

//Create the virtual hosts
var host1 = createVirtualHost("testsite1.localhost", "testsite1");
var host2 = createVirtualHost("testsite2.localhost", "testsite2");

//Use the virtual hosts
app.use(host1);
app.use(host2);

//Start server
var port = 80;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});