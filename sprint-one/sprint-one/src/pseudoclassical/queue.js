var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  if (this.storage[this.size()]) {
    this.storage[this.size() + 1] = value;
  } else {
    this.storage[this.size()] = value;
  }
};

Queue.prototype.dequeue = function() {
  var takeOut = this.storage[counter]
  delete this.storage[counter];
  counter++;
  return takeOut;
};

Queue.prototype.size = function() {
  var currentLength = Object.keys(this.storage).length;
  if (currentLength === 0) {
    counter = 0;
  }
  return Object.keys(this.storage).length;
};


