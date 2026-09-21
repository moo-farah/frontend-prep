# What is the difference between controlled and uncontrolled components in React?
In a controlled component, React state is the single source of truth - the component's behavioir is fully driven by props or state from the parent.
In a uncontrolled component, the component manages it own internal state, and you read the value only when you need it.

### The core concept - who owns the state?
Who is in charge of the state?
A **Controlled** components is like a puppet on strings - the parents tells it exactly what to show and what to do.
An **Uncontrolled** component is like an actor - it does it own thing internally and you only check in when you need to know what happened.

### When to use which
**Use controlled when:**
 - You need to validate or transform input on every keystroke
 - You need to disable a submit button untill the form is valid
 - You need to show real-time feedback as the user types
 - Multiple inputs depend on each other's values

**Use uncontrolled when:**
 - You have a simple form and only need the values on submit
 - You want to avoid re-renders on every keystroke for performance
 - You are integrating with non-React code or third-party libraries
 - You are working wiht file inputs (<input type="file" /> is always uncontrolled in React because its value is ready-only)