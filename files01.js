var async = require('async'),
    fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  async.map(files, fs.stat, function(err, stats) {
    console.log(stats);
  });
});
