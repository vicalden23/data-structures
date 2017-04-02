var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //see if item exists do nothing
    this._storage.push(item);
    //if not, add into storage
};

setPrototype.contains = function(item) {
  //look through storage
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item){
      return true;
    }
  }
  return false;
  //if item matches value, return true
};

setPrototype.remove = function(item) {
//search through storage, if item matches value in storage, remove it with splice
for (var i = 0; i < this._storage.length; i++){
  if (this._storage[i] === item){
    this._storage.splice(i, 1)
  }
}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
