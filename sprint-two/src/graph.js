

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
  // console.log(JSON.stringify(this.edges));
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    console.log(this.edges[node]);
    if (this.edges[node]) {
      var nodeIndex = this.edges[node].indexOf(node);
      console.log(nodeIndex);
    }
    var otherIndex;
    if (nodeIndex === 0) {
      otherIndex = 1;
    } else {
      otherIndex = 0;
    }
    if (this.edges[node]) {
      var nodeSplice = this.edges[node].splice(otherIndex, 1);
    }
    delete this.nodes[node];
    delete this.edges[node];
    console.log(this.edges[otherIndex]);
    delete this.edges[nodeSplice];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // for (var key in this.edges) {
  //   // var findZero = (this.edges[key][0] === fromNode) && (this.edges[key][1] === toNode);
  //   // var findOne = (this.edges[key][1] === fromNode) && (this.edges[key][0] === toNode);
  //   // console.log('1', this.edges[key][0], this.edges[key][1]);
  //   // console.log('2', this.edges[key][0] === fromNode && this.edges[key][1] === toNode);
  //   // if (findZero || findOne) {
  //   //   return true;
  //   // }
  //
  //   //expect(graph.hasEdge(4, 5)).to.equal(true);
  // }
  // return false;
  if (this.edges[fromNode]) {
    if (this.edges[fromNode].includes(toNode)) {
      return true;
    } else if (this.edges[toNode] && this.edges[toNode].includes(fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = [fromNode, toNode];
  this.edges[toNode] = [toNode, fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this.edges[fromNode];
    delete this.edges[toNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    node = parseInt(node);
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
