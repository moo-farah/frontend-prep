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
Sequential Execution: Use this when you must wait for one operation to finish before starting the next
Example(getting a user ID first, then using that ID to fetch their specific orders).
``` 
for... of
```

**When to use:**
 - When tasks depend on previous results.
 - When you want to avoid overwhelming a server with too many requests at the exact same time(rate limiting).

### Parellel Execution(All at Once)
Use this when you have a list of independent tasks that don't care about what the others are doing.
Example(downloading 5 different product images or fetching 5 independent user profiles).
```
You combine .map() with Promise.all()
```
**Why use Parallel**
Reason 1: Independent Tasks
 - Example: Loading a dashboard that needs user info, product categories, and site settings simultaneously.
Reason 2: Better User experience(UX)
 - Users hate waiting. If your page taskes 3 seconds instead of 15 seconds to load because you ran independent requests in parallel, the app feels lightning fast.
