var Stack = function() {
  var someInstance = {
    storage : [],
    counter : 0
  };
  
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push : function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  
  pop : function() {
    if (this.counter > 0) {
      this.counter--;
      var value = this.storage[this.counter];
      delete this.storage[this.counter];
      return value;
    }
  },
  
  size : function() {
    return this.counter;
  }
};


