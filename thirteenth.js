var http = require('http');
var url = require('url');
var server = http.createServer(function (request,response) {
	var q = url.parse(request.url,true);
	response.writeHead(200, {'Content-Type' : 'application/json'});
	if(q.pathname === '/api/parsetime') {
		var d = new Date(q.query['iso']);
		var t = {"hour" : d.getHours(), "minute" : d.getMinutes(), "second" : d.getSeconds()};
		response.end(JSON.stringify(t));
	}
	if(q.pathname === '/api/unixtime') {
		var d = new Date(q.query['iso']);
		var t = {"unixtime" : d.getTime()};
		response.end(JSON.stringify(t));
	}
});
server.listen(process.argv[2]);