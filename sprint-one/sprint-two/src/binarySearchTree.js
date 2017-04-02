// A .left property, a binary search tree (BST) where all values are lower than than it the current value.
// A .right property, a BST where all values are higher than than it the current value.
// A .insert() method, which accepts a value and places in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.





/*
 * Complexity: What is the time complexity of the above functions?
 */

var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);

    instance.value = value;
    // a BST where all values are higher than than the current value.
    instance.right = undefined;
    // a binary search tree (BST) where all values are lower than than the current value.
    instance.left = undefined;

  return instance
};

BinarySearchTree.prototype.insert = function (value) {
  // accepts a value and places in the tree in the correct position.
  var node = BinarySearchTree(value);

  function recurse(tree) {
    if (tree.value > value && tree.left === undefined) {
      tree.left = node;
    } else if (tree.value > value) {
      recurse(tree.left);
    } else if (tree.value < value && tree.right === undefined) {
      tree.right = node;
    } else if (tree.value < value) {
      recurse(tree.right);
    }
  }

  recurse(this);
}

BinarySearchTree.prototype.contains = function (value) {
  var doesContain = false;
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  function recurse(tree) {
    if (tree.value === value) {
      doesContain = true;;
    } else if (tree.left !== undefined && value < tree.value) {
      recurse(tree.left);
    } else if (tree.right !== undefined && value > tree.value) {
      recurse(tree.right)
    }
  }

  recurse(this);
  return doesContain;
}

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  //accepts a callback and executes it on every value contained in the tree.
  function recurse(tree) {
    callback.call(tree, tree.value)

    if (tree.left !== undefined) {
      recurse(tree.left)
    }

    if (tree.right !== undefined) {
      recurse(tree.right);
    }
  }

  recurse(this);
}

// var obj = {
//   value: value,
//   left: value,
//   right: value
// }



