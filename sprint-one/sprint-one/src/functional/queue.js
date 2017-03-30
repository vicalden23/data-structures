var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0;
  someInstance.enqueue = function(value) {
    if (storage[someInstance.size()]) {
      storage[someInstance.size() + 1] = value;
    } else {
    storage[someInstance.size()] = value;
    }
  };

  someInstance.dequeue = function() {
    var takeOut = storage[counter]
    // if (storage[someInstance.size()] === 0){
    //   counter = 0;
    //   delete storage[counter];
    // }
    delete storage[counter];
    counter++;

    return takeOut;
  };

  someInstance.size = function() {
    var currentLength = Object.keys(storage).length;
    if (currentLength === 0) {
      counter = 0;
    }
    return Object.keys(storage).length;
  };

  return someInstance;
};

//queue first in first out

//counter

//dequeue the lowest numbered property

storage = {
  0: "b"



}


