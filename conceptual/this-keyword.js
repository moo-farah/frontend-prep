// Global Context & Strict Mode
// function showThis() {
//     console.log(this);
// }



// showThis();  // Output: Window{...}

// // Call site 2: Strict mode
// ('use strict');
// function strictShowThis() {
//     console.log(this);
// }

// strictShowThis();

// Object Method Context
const person = {
    name: 'John',
    sayH: function() {
        console.log('Hi, I am ' + this.name);
    },
}

// Method invocation
person.sayH();  // output: Hi, I am John
// When a method is called directly on an object, 'this' binds to that object.
// The call site shows person.sayHi(), so javaScript knows to bind 'this' to person.

// Constructor Functions
function User(name) {
    this.name = name;
    this.sayName = function () {
        console.log('My name is ' + this.name);
    };
}

// Call site 1: with 'new Keyword

const user1 = new User('John');
user1.sayName();  // Output: My name is John
// WHY: the 'new' keyword create a new empty object and make 'this' point to it.
// It's like saying "create a new context for this function"

function introduce() {
    console.log('I am ' + this.name);
}

const person1 = {name: 'John'};
const person2 = {name: 'Jane'};

introduce.call(person1);  // Output: I am John
introduce.apply(person2); // Output: I am Jane
// WHY: call/apply execute the function immediately,

const introducePerson1 = introduce.bind(person1);
introducePerson1();  // Output: I am John
// WHY: bind creates a new function with 'this' permanently set to the specified object.
// It's like creating a copy of the function that always remembers its context.

