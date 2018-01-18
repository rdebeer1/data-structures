var Tree = function(value) {
  var newTree = {
    value: value,
    // your code here
    children: []  // fix me
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
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
  
 */
