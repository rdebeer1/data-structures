var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var currentNodes = Node(value);
    currentNodes.next = list.tail;
    list.tail = currentNodes;
    console.log(JSON.stringify(list));
    return list;
  };

  list.removeHead = function() {
    list.head = 
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
