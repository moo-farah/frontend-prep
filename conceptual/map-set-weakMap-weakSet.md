# What are the differences between Map/Set and WeakMap/WeakSet?
**Map** and **Set** are collection types that hold strong references to their contents - as long as something in a Map or Set, it won't be garabage collected.
**WeakMap** and **WeakSet** hold weak references instead, meaning they don't prevent garbage collection.

## Map
Any type (objecte, primitives like strings/numbers).
Fully iterable **( keys(), values(), entries(), forEach, for...of)**
Has a **.size** property
Methods **.clear(), .keys(), .values(), .entries(), .size()**

**Allowed Key Types**
**Map / Set:** Accept both primitives values(string, numbers, booleans, symbols) and objects as keys or values
**WeakMap / WeakSet:** Key must be objects(or non-registered symbols in modern environments). Passing a primitive will throw a TypeError.