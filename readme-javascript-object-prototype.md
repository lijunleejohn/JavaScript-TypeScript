# JavaScript Object and Prototype
- JavaScript Object is a Key/Value pair data structure, Key is a string, Value could be Property or Method
- Javascript Object Prototype is a built-in property of every object.
- Prototype itself is an Object and it has its own prototype where contains the current JavaScript Object's parent chain, this is called Protytype Chain. The chain ends when we reach a prototype that has null for its own prototype.
- To get a JavaScript Object Prototype, but in practice all browsers use __proto__ (don't use it in Production). The standard way to access an object's prototype is the Object.getPrototypeOf() method.