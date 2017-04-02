var Tree = function(value) {

  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //if children === undefined in tree
  if (this.children === undefined) {
    //want to add child
    this.children = Tree(value);
    //if children
  } else {
    //add another child
    this.children.push(Tree(value))
  }
};

treeMethods.contains = function(target) {
  //check tree to see if target exists
  //if so, return true
  if (this.value === target) {
    return true;
  } for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
  }
  return false;
  //else, loop through children
    //if it exists, return true
  //else return fasle
};


// newTree = {
//   newTree.value : "value",
//   newTree.children: [child1, child2],
//   newTree.methods: addChild, contains
// }
/*
 * Complexity: What is the time complexity of the above functions?
 */
