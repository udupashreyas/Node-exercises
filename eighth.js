var http = require('http');
var total = 0;
var allchars = '';
http.get(process.argv[2], function(response) {
	response.on("data", function(data) {
		allchars = allchars + data.toString();
		total = total + data.toString().length;
	});
	response.on("end", function() {
		console.log(total);
		console.log(allchars);
	})
})