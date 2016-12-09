var fs = require('fs')
fs.readFile(process.argv[2], function doneReading(err,buf) {
	if(err)
		console.error(err);
	else {
		var str = buf.toString();
		var arr = str.split('\n');
		console.log(arr.length - 1);
	}
});