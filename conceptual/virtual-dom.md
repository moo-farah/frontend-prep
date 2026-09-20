# What is the virtual DOM in React?

The virtual DOM is a core concept in React that significantly improves application performance and provides an efficient
way to update the user interface.

The virtual DOM is a lightweight copy of the actual DOM (Document Object Model) that React keeps in memory.
When you make changes to your React application, these changes are first applied to the virtual DOM rather than directly to the browser's DOM. This process happens in three main steps:

- Whenever a component's state or props change, React creates a new virtual DOM tree representing the updated UI.
- React performs a process called **"Reconciliation",** where it compares the new virtual DOM with a snapshot of the previous virtual DOM
- React applies only these necessary changes to the real DOM in a single batch update. This approach is significantly more effecient than directly manipulating the DOM for each individual change, as DOM operations are computationally expensive.

```
function ProfileCard({user}) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}
```

When user.name changes in this component, React doesn't immediately update the DOM instead, it:

- Creates a new virtual DOM with the updated name
- Compares it with the previous version
- Determines that only the text context of the h2 element needs to change - Makes this single specific update to the real DOM

