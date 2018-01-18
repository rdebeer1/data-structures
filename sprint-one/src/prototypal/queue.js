var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.start = 0;
  someInstance.end = 0;

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