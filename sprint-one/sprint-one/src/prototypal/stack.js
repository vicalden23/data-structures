var Stack = function() {
  var funcMethods = Object.create(stackMethods);
  funcMethods.storage = {};
  return funcMethods;
};
  var stackMethods = {
    push : function(value) {
    this.storage[this.size()] = value;
  },
    pop : function() {
    var takeOut = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return takeOut;
  },
    size : function() {
    return Object.keys(this.storage).length;
  }
};



