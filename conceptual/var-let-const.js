// Var
function example() {
    if (true) {
     var name = 'Sarah';
    }
    console.log(name);
}

example()

// let and const are block-scoped

function block() {
    if (true) {
        let name = 'Mohamed';
        const age = 22;
    }
    console.log(name);  // ReferenceError name is not defined
    console.log(age);
}
block()

const age = 25;
age = 30;  // TypeError: Assignment to constant variable

const user = {name: 'Sarah', age: 25};
user.age = 30;  // This work fine
user.email = 'a@gmail.com';   // This also works fine
console.log(user);   // { name: 'Sarah', age: 30, email: 'a@gmail.com'}


const colors = ['red', 'blue'];
colors.push('green');
colors[0] = 'Yellow';

colors = ['new array'] // TypeError: Assigment to constant variable.
console.log(colors);
