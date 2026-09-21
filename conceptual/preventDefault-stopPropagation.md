# What is the difference between preventDefault() and stopPropagation()?
The difference between **preventDefault()** and **stopPropagation()** is crucial. These two methods serve different purposes in controlling how events behave in your application.

**event.preventDefault()**
It stops the browser from executing the default action associated with an event.
It's like telling the browser, "hey, I'll handle this myself!"

When you submit a form, the browser naturally wants to:
 - Send the form data to the URL specified in the action attribute
 - Reload the page (or navigate to a new one)
 - Process the form in the traditional way that predates modern JavaScript

```
const handleSubmit = (event) => {
    event.preventDefault();   // This prevents the page reload!
    runSearch(searchTerm);    // Now we can handle the submission our own way
};
```