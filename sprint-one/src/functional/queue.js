var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var start = 0;
  var end = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) { 
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    if (end - start) {
      var result = storage[start];
      delete storage[start];
      start++;
      return result;
    }
  };

  someInstance.counter = function() {
    return end - start;
  };

  return someInstance;
};
