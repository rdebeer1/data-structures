

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //added if statement to check for falsey values passed as k
  if (!k) {
    return undefined;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  if (bucket) {
    for (i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v; 
      } else {
        bucket.push(tuple);  
      }
    }
  } else {
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].splice(i, 1);
    }
  }
};

/*
 
* Complexity: What is the time complexity of the above functions?
  ** .insert: O(n)
  ** .retrieve: O(n)
  ** .remove: O(n)

*/


