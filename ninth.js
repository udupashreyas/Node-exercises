var http = require('http');
var allchars = '';
http.get(process.argv[2], function(response) {
	response.on("data", function(data) {
		allchars = allchars + data.toString();
	});
	response.on("end", function() {
		allchars = allchars + '\n';
		http.get(process.argv[3], function(response) {
			response.on("data", function(data) {
				allchars = allchars + data.toString();
			});
			response.on("end", function() {
				allchars = allchars + '\n';
				http.get(process.argv[4], function(response) {
					response.on("data", function(data) {
						allchars = allchars + data.toString();
					});
					response.on("end", function() {
						console.log(allchars);
					});
				})
			});
		})
	});
})