var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.methods);
  newTree._value = value;
  newTree._right = null;
  newTree._left = null;  

  return newTree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
  var node = BinarySearchTree(value);


  if (this._value <= value) {
    if (!this._left && this._left < value) {
      this._left = node;
    } else { 
      this._left.insert(value); 
    }
  } else if (this._value > value) {
    if (!this._right && this._right < value) {
      this._right = node; 
    } else { 
      this._right.insert(value);
    }
  }
};

BinarySearchTree.methods.contains = function(value) {  
  if (this._value === value) {
    return true; 
  } else if (this._left && this._value < value) {
    return this._left.contains(value);
  } else if (this._right && this._value > value) {
    return this._right.contains(value);
  }
  return false;
};
//console.log(this._right);
BinarySearchTree.methods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
