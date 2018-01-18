var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var length = 0;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
      console.log('add to tail', JSON.stringify(list));
    } else {
      list.tail.next = node;
      list.tail = node;
      console.log(JSON.stringify(list));
    }
    length++;
    return list;
  };

  list.removeHead = function() {
    var severedHead = list.head;
    list.head = list.head.next;
    length--;
    return severedHead.value;
    // console.log(JSON.stringify('removehead', value));
  };

  list.contains = function(target) {
    console.log(length);
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
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
