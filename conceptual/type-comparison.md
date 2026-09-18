# What is the difference between == and === in JavaScript
Both == and === check the types of their operands. The difference is in how they respond if the types don't match.
The == allows coercion when types don't match
=== disallows coercion.


### Strick Equality (===)
Also known as the strict equality operator. It return **true** only if both the value and the data type of the operands are identical.

### Loose Equaliy (==)
Also known as the abstract equality operator. If the operands have different types, JavaScript attempts to convert (coerce)
one or both of them to a common type before making the comparison.