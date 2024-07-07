// very object in JavaScript has an internal property called [[Prototype]]
//The double square brackets that enclose [[Prototype]] signify that it is an internal property, and cannot be accessed directly in code.

// we’ve only defined properties and not methods in the constructor. 
// It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.
// Initializing a constructor function
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
	return `${this.name} says hello.`;
}

const hero = new Hero('Varg', 1);
console.log(hero);

// inheritance
// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

//Prototype properties and methods are not automatically linked when you use call() to chain constructors. 
//We will use Object.setPropertyOf() to link the properties in the Hero constructor to the Warrior and Healer constructors, making sure to put it before any additional methods.
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
  }
  
Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
console.log(hero1.greet());
console.log(hero1.attack());

const hero2 = new Healer('Kanin', 1, 'cure');
console.log(hero2.greet());
console.log(hero2.heal());