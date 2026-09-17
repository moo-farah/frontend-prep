// How the event loop works step by step
console.log('Start');

setTimeout(function () {
    console.log('Timeout')
}, 1000);

Promise.resolve().then(function () {
    console.log('Promise')
});

console.log('End')

// Step 1: console.log('Start') goes on the call stack, executes, prints starts, and gets popped off.
// Step 2: setTimeout goes on the call stack. JavaScript hands the callback to the browser's timer API with a deleay of 0ms
// Step 3: Promise.resolve().then(...) goes on the call stack. The promise resolves immediately, so the .then callback gets placed in the microtask queue
// Step 4: console.log('End) goes on the call stack, executes, prints End, and gets popped off.
// Step 5: The call stack is now empty. The event loop checks the microtask queue first, It finds the promise callback, pushes it on the call stack
// Step 6: The microtask queue is now empty. The event loop checks the callback queue. The timer callback is there (the browser time finished). It pushes the callbacl onto the call stack, It executes and prints Timeout.

// Output
//  start
//  End 
//  Promise
//  Timeout

Promise.resolve().then(() => {
    console.log('Microtask 1')
    Promise.resolve().then(() => {
        console.log('Microtask 2');
    });
});

setTimeout(() => {
    console.log('Timeout');
}, 0);

// output
// Microtask 1
// Microtask 2
// Timeout

const start = Date.now();

setTimeout(() => {
    console.log(`Ran after ${Date.now() - start}ms` )
}, 100);

while (Date.now() - start < 500) {

}