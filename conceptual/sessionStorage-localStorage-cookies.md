# sessionStorage vs localStorage vs cookies

++The short answer++
All three are ways to store data in the browser, but they differ in how long the data lasts,
How much you can store, and whether the data is sent to the server

**localStorage**: Data in localstorage stays forever (or until the user clears their browser data or your code deletes it) It is scoped to the origin (same protocol, domain, and port)

```
 // Save data
 localStorage.setItem('theme', 'dark');

 // Read data
 const theme = localStorage.getItem('theme');

 // Remove one item
 localStorage.removeItem('theme');

 // Clear everything
 localStorage.clear();
```
Storage limit: ABout 5-20 MB (varies by browser)
Sent to server: No - stays in the browser only
Persistence: Until manually deleted
Scope: Shared across all tabs and windows of the same origin

**sessionStorage**:
Works extactly like localStorage, but the data is cleared when the tab (or browser window) is closed.
```
sessionStorage.setItme('cardId', 'abc123');
const cardId = sessionStorage.getItem('cardId');
```
Storage limit: ABout 5-20 MB (varies by browser)
Sent to server: No 
Persistence: Until the tab is closed
Scope: Only accessible in the tab that created it - not shared across tabs

**Cookies**:
Cookies are small pieces of data that are sent to the server with every HTTP request
They were the original way to store data in the browser
```
// Set a cookie
document.cookie = 'theme=dark; max-age-86400; path=/';

// Read cookies (returns all cookies as one string)
console.log(document.cookies);
```
Storage limit: ABout 4 KB per cookie
Sent to server: Yes - with every HTTP request to the same domain
Persistence: Until the expiration date
Scope: Should across tabs, can be scoped by path and domain

Cookies have attributes:
 - max-age or expires - how long the cookie lasts
 - path - which URL paths can access the cookie
 - domain - which subdomain can access the cookie
 - secure - only sent over HTTPS
 - httpOnly - cannot be accessed by JavaScript (set by the server)
 - SameSite - controls cross-site request behavior (CSRF protection)

