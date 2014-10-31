var async = require('async');

var square = function(num, doneCallback) {
  // Nothing went wrong, so call back with a null error
  doneCallback(null, num * num);
};

// Square each number in the array [1, 2, 3, 4].
// The finished callback (third argument to async.map())
// is only called when doneCallback has been called for
// every item in the array.
async.map([1, 2, 3, 4], square, function(err, results) {
  // square has now been called on each of the numbers
  console.log(results);
  console.log("Finished!");
});
