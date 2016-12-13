var net = require('net')
var server = net.createServer(function(socket) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours();
	var mins = date.getMinutes();
	if(month.toString().length < 2)
		month = '0' + month;
	if(day.toString().length < 2)
		day = '0' + day;
	if(hours.toString().length < 2)
		hours = '0' + hours;
	if(mins.toString().length < 2)
		mins = '0' + mins;
	socket.write(year + '-' + month + '-' + day + ' ' + hours + ':' + mins + '\n');
	socket.end();
});
server.listen(process.argv[2]);