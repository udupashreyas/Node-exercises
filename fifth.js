var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function directory(err,list) {
	if(err)
		console.error(err);
	else {
		for(var i = 0; i < list.length; i++) {
			if(process.argv[3] === path.extname(list[i]).slice(1))
				console.log(list[i]);
		}
	}
});