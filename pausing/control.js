var fs = require('fs');

var stream = fs.createReadStream('data.json');

stream.pause();

console.log('paused');

setTimeout(function() {
	console.log('RESUMING...');
	stream.resume();
}, 3000);

stream.on('data', function (chunk) {
	console.log('----------------START----------------');
	console.log(chunk.toString());
	console.log('----------------FINISH----------------');
});


stream.on('data', function (chunk) {
	console.log('CHUNK LENGTH WAS: ' + chunk.length);
});

stream.on('end', function  () {
	console.log('----------------END OF THE FILE----------------');
});