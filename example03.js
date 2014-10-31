var _ = require('underscore');

_.each([1, 2, 3, 4], function(num) {
  setTimeout(function() {
    console.log(num * num);
  }, 4000 * Math.random());
});
