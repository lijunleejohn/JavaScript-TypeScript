var Pet = (function() {
    var typeSymbol = Symbol('type');//each time this is called it will generate a new GUID which is valid in an instance of this Javascript Object
    function Pet(type) {
      this[typeSymbol] = type;
    }
    Pet.prototype.getType = function(){
      return this[typeSymbol];
    }
    return Pet;
  }());
  
  var a = new Pet('dog');
  console.log(a.getType());//Output: dog
  a.type = null;
  //Stays private
  console.log(a.getType());//Output: dog
  var b = new Pet('cat')
  console.log(b.getType());//Output: cat
  console.log(a.getType());//Output: dog