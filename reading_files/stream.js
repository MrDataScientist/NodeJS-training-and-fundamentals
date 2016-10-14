var fs = require('fs');

var stream = fs.createReadStream('data.json');

stream.on('data', function (chunk) {
	console.log('-----------------START----------------');
	console.log(chunk.toString());
	console.log('----------------FINISH----------------');
});


stream.on('data', function (chunk) {
	console.log('CHUNK LENGTH WAS: ' + chunk.length);
});

stream.on('end', function () {
	console.log('----------------END OF THE FILE----------------');
});