var Tree = function(value) {
  var newTree = {
    value: value,
    children: []
  };
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {

  addChild: function(value) {
    this.children.push(Tree(value));
  },

  contains: function(target, child = this) { //ES6!!!
    if (child.value === target) {
      return true;
    }
    for (var i = 0; i < child.children.length; i++) {
      if (this.contains(target, child.children[i])) {
        return true;
      }
    }
    return false;
  },

  //added a remove method to remove values from a tree
  remove: function(target, child = this) {
    for (var i = 0; i < child.children.length; i++) {
      if (this.contains(target, child.children[i])) {
        this.children.splice(i, 1);
      }
    }
  }

};

/*

* Complexity: What is the time complexity of the above functions?
  ** addChild: O(1)
  ** contains: O(n)
  ** remove: O(n)

*/
