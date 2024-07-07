//JavaScript Class was introduced in ECMAScript 2015, also known as ES6
//very object in JavaScript has an internal property called [[Prototype]]
//The double square brackets that enclose [[Prototype]] signify that it is an internal property, and cannot be accessed directly in code.

// we’ve only defined properties and not methods in the constructor. 
// It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.
// Initializing a constructor function
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

const hero = new Hero('Varg', 1);
console.log(hero);

// inheritance
// Initialize Warrior constructor
class Warrior extends Hero {
    constructor(name, level, weapon) {
        // Chain constructor with call
        super(name, level);

        // Add a new property
        this.weapon = weapon;
    }
    attack() {
        return `${this.name} attacks with the ${this.weapon}.`;
    }
}

// Initialize Healer constructor
class Healer extends Hero {
    constructor(name, level, spell) {
        super(name, level);

        this.spell = spell;
    }
    heal() {
        return `${this.name} casts ${this.spell}.`;
    }
}


const hero1 = new Warrior('Bjorn', 1, 'axe');
console.log(hero1.greet());
console.log(hero1.attack());

const hero2 = new Healer('Kanin', 1, 'cure');
console.log(hero2.greet());
console.log(hero2.heal());