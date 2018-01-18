var Queue = function() {
  var someInstance = {
    storage : {},
    counter : 0,
    start : 0,
    end : 0
  };
  
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue : function(value) { 
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue : function() {
    if (this.end - this.start) {
      var result = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return result;
    }
  },

  size : function() {
    return this.end - this.start;
  }
};
