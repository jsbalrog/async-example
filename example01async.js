var async = require('async');

var square = function(num, doneCallback) {
  console.log(num * num);

  // Nothing went wrong, so call back with a null error
  doneCallback(null);
};

// Square each number in the array [1, 2, 3, 4].
// The finished callback (third argument to async each)
// is only called when doneCallback has been called for
// every item in the array.
async.each([1, 2, 3, 4], square, function(err) {
  // square has now been called on each of the numbers
  console.log("Finished!");
});
