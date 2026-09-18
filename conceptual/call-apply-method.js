// ### What is the difference between call() and apply()?
// Both call() and apply() are methods that allow you to execute a function with a specified 'this' context and arguments

// The difference between call and apply
// The main difference between call() and apply() is how they handle the arguments:
 // -> call() accepts arguments individually, functionName.call(thisContext, arg1, arg2).
 // -> apply() accepts arguments as an array, functionName.apply(thisContext, [arg1, arg2]).




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
console.log(Task.introduce.apply(employee, ['Manager', 'Marketting']));
