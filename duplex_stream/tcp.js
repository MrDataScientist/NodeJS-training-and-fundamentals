var net = require('net'),
  fs = require('fs');

var server = net.createServer(function (connect) {

  var log = fs.createWriteStream('hfi.log');

  console.log('Connection established');

  connect.on('end', function() {
    console.log('Connection ended');
  });

  connect.write("Welcome to Heathrow Flight Information.\r\n");
  connect.write("We call it HFI: the Heathrow Flight Information.\r\n");
  connect.write("We'll get your message and display it on the board to passengers.\r\n");

  connect.pipe(connect).pipe(log);

});

server.listen(7777, function() {
  console.log('Server ready on port 7777');
});