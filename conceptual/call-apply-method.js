




// call() vs apply()
const person = {
    name: 'Mohamed',
    greet: function() {
        return `Hello, ${this.name}`
    },
};

const manager = {
    name: 'Sarah',
};

// Using the greet function with manager's context
console.log(person.greet.call(manager));   // Output: Hello, Sarah
console.log(person.greet.apply(manager));  // Output: Hello, Sarah


const Task = {
    name: 'John',
    introduce: function(role, department) {
        return `Hello, I am ${this.name}, ${role} in ${department}`;
    },
};

const employee = {
    name: 'Sarah',
};

console.log(Task.introduce.call(employee, 'Manger', 'Sales'));  // Output: Hello, I am Sarah, Manager in Sales
console.log(Task.introduce.apply(employee, ['Manager', 'Marketting']));  // Output: Hello, I am Sarah, Manager in Marketting

const personName = {
    name: 'John',
    greet: function () {
        return `Hello, ${this.name}`;
    },
};

const role = {
    name: 'Sarah',
};

// Using call() - executes the function immdiately with manager's context
console.log(personName.greet.call(role));

// Using bind() - returns a new function

const boundGreet = personName.greet.bind(role);
console.log(boundGreet());
