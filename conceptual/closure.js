// function createCounter() {
//     let count = 10;

//     return function increment() {
//         count = count + 1;
//         return count;
//     }
// };

// const counter = createCounter();
// console.log(counter()); // 11
// console.log(counter()); // 12
// console.log(counter()); // 13

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

function setupButton(buttonId, message) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function () {
        alert(message);
    });
}

setupButton('save-btn', 'Your work has been saved!');
setupButton('delete-btn', 'Item deleted.');