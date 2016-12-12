var fs = require('fs');
var path = require('path');
var res = [];
module.exports = function myModule(dirname,ext,callback) {
	fs.readdir(dirname, function (err,list) {
		if(err)
			return callback(err,res);
		else {
			for(var i = 0; i < list.length; i++) {
				if(ext === path.extname(list[i]).slice(1))
					res.push(list[i]);
			}
		}
		return callback(null,res);
	});
}