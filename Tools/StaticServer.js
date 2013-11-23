var static = require('node-static');

var getStaticServerRootPath = function () {
    return '../contents';
};

var file = new static.Server(getStaticServerRootPath());

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);
