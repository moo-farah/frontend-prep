# async/await in JavaScript

Introduced in ECMAScript 2017 (ES8)
They allow you to write asynchronous code that looks and behaves like synchronous code, avoiding complex chaining (like **.then() and .catch()** ).

### How it Works

Before the async/await, we used .then() chains to handle promises. It worked but when you had multiple asynchronous operations that depended on each other, the code became hard to follow.

**The async Keyword:**
The **async** before a function, two things happen:

- The function always return a promise. Even if you return a plain value, it gets wrapped in a promise automatically
- You are now allowed to use the **await** keyword inside this function.

**The await Keyword:**
The **await** pauses the execution of the **async** function until the promise is resolved
**await** only pauses the function it is inside. It does not block the entire program. Other code outside this function can still run while this function is waiting.

### Parallel vs Sequentially


| Paralle         | Sequentially | Notes                           |
| --------------- | ------------ | ------------------------------- |
| Markdown Tables | Yes          | Standard GFM syntax             |
| Live Preview    | Yes          | Use the split-view preview icon |
| Auto-formatting | Yes          | Extensions can help format      |


