# What is Event loop?

- Is a mechanism that allows JavaScript to perform non-blocking operations even though it runs on a single thread.
- It continuously checks if the call stack is empty, when it is empty, it picks up tasks from the queues and pushes them onto the call

**JavaScript is single-threade**
- JavaScript has only one call stack. That means it can do only one thing at a time.
- If a function is running, nothing else can run until that function finishes.
- Think of it like a single-lane road - one car at a time.

**The pieces that make it work**

**Call Stack:** 
This is where JavaScript keeps track of what function is currently running.
When you call a function it pushed onto to the stack. when it done, it get it popped off.
**Web APIs:** These are provided by the browser (not JavaScript itself). Things like 
**setTimeout, fetch, DOM events, and setInterval** are all Web APIs
**Callback Queue(Task Queue):**
When a Web API finishes its work(like a timer expiring or a click happening)
**Microtask Queue:**
This is a special queue with higher priority than the callback queue.
Promises (.then, .catch, .finally) and MutationObserver callbacks go here.
After each task from the call stack finishes, the event loop empties the entire microtask queue before picking anything from the callback queue.

**Microtask queue vs Callback queue**
The event loop does not treat all queues equally. 
After each task completes and the call stack is empty, the event loop does the following:
 - Run all pending microtasks (promises, queueMicrotask)
 - Then pick one task from the callback queue
Meaning if a microtask adds another microtask, that new microtast also runs before any callback queue task

**A visual way to think about it**
I like to think of the event loop as a restuarant.

The call stack is the chef - they can only cook one dish at a time. The Web APIs are the prep staff - they handle the slow work (peeling, marinating) in the background. The callback queue is the order counter where finished prep work get placed. The event loop is the expeditor who checks: "Is the chef free? Yes? Here is the thing to cook."

