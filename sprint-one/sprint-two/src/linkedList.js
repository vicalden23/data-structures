var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
   var node = Node(value)
   this.head = this.head || node;
   if(this.tail){
    this.tail.next = node;
   }
    this.tail = node;

  };

  list.removeHead = function() {
    var head = this.head;
    this.head = this.head.next;
    return head.value;
  };

  list.contains = function(target) {
    for (var key in this) {
      if (this[key].value === target) {
        return true;
      }
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

 // var linkedList = [_ _ , , , _ _ , ...]
