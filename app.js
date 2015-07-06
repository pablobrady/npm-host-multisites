var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
    if (req.headers.host === 'testsite1.localhost') {
        bounce(9001);
    }
    else if (req.headers.host === 'testsite2.localhost') {
        bounce(9002);
    }
    else {
        res.statusCode = 404;
        res.end('no such host');
    }
});
server.listen(80); 
	// Can't listen on ports < 1024 without root privileges.
	// Requires 'sudo npm app.js' on launch. (Or 'sudo ./go' to start the launch script.)
