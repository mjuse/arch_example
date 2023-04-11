var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');

var handler = function () {
  console.log('The file is open');
}

rs.on('open', handler);
// rs.on('open', handler);
  
// rs.on('close', function () {
//     console.log('The file is closed');
// });

// rs.close()