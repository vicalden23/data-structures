// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
  // var container = {};
  // container.edges = {};
  // this.storage[node] = container;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for (var key in this.storage){
    for (var i = 0; i < this.storage[key].length; i++){
      if (this.storage[key][i] === node){
        this.storage[key].splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.storage) {
    for (var i = 0; i < this.storage[key].length; i++) {
      if (this.storage[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.storage){
    for (var i = 0; i < this.storage[key].length; i++){
      if (this.storage[fromNode][i] === toNode) {
        console.log(this.storage[fromNode][i]);
        this.storage[fromNode].splice(i, 1);
      }
    } for (var i = 0; i < this.storage[key].length; i++){
        if (this.storage[toNode][i] === fromNode) {
          this.storage[toNode].splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb([key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var randomObj = {
//   storage : {
//     1 : [2, 5],
//     2 : [1, 3, 5],
//     }

//   }

// }


// 1 will appear as a value in the 2 and 5 node







