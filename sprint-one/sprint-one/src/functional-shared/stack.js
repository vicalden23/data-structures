var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  return _.extend(someInstance, funcMethods);
};

  var funcMethods = {
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

