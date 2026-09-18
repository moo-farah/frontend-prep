# What is the difference between call() and apply()?
Both call() and apply() are methods that allow you to execute a function with a specified 'this' context and arguments

The difference between call and apply
The main difference between call() and apply() is how they handle the arguments:
  - call() accepts arguments individually, functionName.call(thisContext, arg1, arg2).
  - apply() accepts arguments as an array, functionName.apply(thisContext, [arg1, arg2]).

## call() vs bind()
Both are methods that allow you to manipulate the this context of a function.
They enable you to control what the this keyword refers to inside the function being called.

**call():** executes the function immediately while **bind:** returns a new function can be called later.