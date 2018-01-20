var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.right = null;
  newTree.left = null;

  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var node = BinarySearchTree(value);
  var loop = function(newTree) {
    if (newTree.value > value && newTree.left === null) {
      newTree.left = node;
    } else if (newTree.value > value) {
      loop(newTree.left);
    } else if (newTree.value < value && newTree.right === null) {
      newTree.right = node;
    } else {
      loop(newTree.right);
    }
  };
  loop(this);
};

BinarySearchTree.prototype.contains = function(value) {
  var hasNode = false;
  var loop = function(node) {
    if (node.value === value) {
      hasNode = true;
    } else if (node.left && node.value > value) {
      loop(node.left);
    } else if (node.right && node.value < value) {
      loop(node.right);
    }
  };
  loop(this);
  return hasNode;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var loop = function(cb) {
    callback(cb.value);
    if (cb.left) {
      loop(cb.left);
    }
    if (cb.right) {
      loop(cb.right);
    }
  };
  loop(this);
};

/* 

* Complexity: What is the time complexity of the above functions?
  ** .insert: O(log n)
  ** .contains: O(log n)
  ** .depthFirstLog: O(n)

*/























