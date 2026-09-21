# What is hoisting in JavaScript?
Is default behavior of moving varibale and function declarations to the top of their containing scop during the compilation (before the code is executed).

**<u>What is Execution Context? </u>**
Execution context is a way of organizing and running your code.
Just as we organize our code into functions and modules to keep things manageable,

### The Global Setup: First Steps
When you start running any JavaScript code, even before the first line executes, 
JavaScript creates what we call the **Global Execution Context**
This initial setup provides two essential pieces:

```
window; // The global object (in browsers)
this;   // References the global object
```

### The Two-Phase Process
JavaScript runs your code in two distinct phases

During this first phase, JavaScript:
```
// The engine sets up the environment
var name;      // variables are created with the value 'undefined'
function getData()  // functions are stored in full
```

