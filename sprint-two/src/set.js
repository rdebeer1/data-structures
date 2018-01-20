var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  set.length = 0;
  return set;
};

var setPrototype = {
  
  add: function(item) {
    this.storage.push(item);
  },

  contains: function(item) {
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === item) {
        return true;
      }
    }
    return false;
  },

  remove: function(item) {
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i] === item) {
        this.storage.splice(i, 1);
      }
    }
  }
  
};



/*

* Complexity: What is the time complexity of the above functions?
  ** add: O(1)
  ** contains: O(n) 
  ** remove: O(n)

*/
