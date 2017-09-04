const path = require('path');
let place;

process.argv.forEach((val, index) => {
    place = path.dirname(val);
    console.log(`${index}: ${val} in path ${place}`);
  });

  var fs = require("fs");
  var p = "./";
  //p = place;
  fs.readdir(p, function (err, files) {
      if (err) {
          throw err;
      }
  
      files.map(function (file) {
          return path.join(p, file);
      }).filter(function (file) {
          return fs.statSync(file).isFile();
      }).forEach(function (file) {
          console.log("%s (%s)", file, path.extname(file));
      });
  });