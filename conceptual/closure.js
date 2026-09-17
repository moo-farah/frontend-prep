function createCounter() {
    let count = 10;

    return function increment() {
        count = count + 1;
        return count;
    }
};

const counter = createCounter();
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance = balance + amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) {
                return 'Insufficient funds';
            }

            balance = balance - amount;
            return balance;
        },

        getBalance() {
            return balance;
        },
    };
}

const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50))    // 150
console.log(myAccount.withdraw(20));  // 130
console.log(myAccount.getBalance());   // output returns 120


// The classic loop problem
for (var i = 0; i < 3; i++ ) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
} // output: 3, 3, 3 (not 0, 1 ,2)
// All three functions close over the same i variables (Bacause var is function-scoped, not block-scoped).
// By the time setTimeout callbacks run, the loop has alread finished and i is 3.

// Fix 1: Use let instead of va

for (let i = 0; i < 3; i++ ) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
} // output: 0, 1, 2

// Fix 2: Create a new scope with an IIFE

for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        }, 1000);
    } )(i);
}