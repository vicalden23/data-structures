var Queue = function() {
  var funcMethods = Object.create(queueMethods);
  funcMethods.storage = {};
  return funcMethods;
};

var queueMethods = {
  enqueue : function(value) {
    if (this.storage[this.size()]) {
      this.storage[this.size() + 1] = value;
    } else {
      this.storage[this.size()] = value;
    }
  },
  dequeue : function() {
    var takeOut = this.storage[counter]
    delete this.storage[counter];
    counter++;
    return takeOut;
  },
  size : function() {
    var currentLength = Object.keys(this.storage).length;
    if (currentLength === 0) {
      counter = 0;
    }
    return Object.keys(this.storage).length;
  }
};




