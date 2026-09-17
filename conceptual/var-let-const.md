# What are the key differences between var, let, and const in JavaScrip

**var:** is function-scoped and gets hoisted with a default value of undefined.
**let:** are block-scoped and get hoisted too, but they throw a ReferenceError if you try to use them before their declaration(this is called the Temporal Dead Zone).
The difference between let and const is that const cannot be reassigned after initialization, but let can.

**Scoping - the most important difference:**
 - var is function-scoped. That means a var variable is available anywhere inside the function where it was declared.
 regardless of blocks like If, for, or while.

  - Block-scoped: is anything between curly braces {} . The variable only exists inside that block.

**const does not mean immutable**
const prevent reassignment, not mutation.
You cannot point user to a different object, but you can change the properties inside the object. The same applies to arrays: