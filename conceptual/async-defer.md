# What is the difference between async and defer in JavaScript?
**defer (deferred):** the defer attribute tells the browser not to wait for the script, Instead, the browser will continue to process the HTML, build DOM. The script loads in the background, and then runs when the DOM is fully build.

**Key differences at a Glance:**
 - Loaded in parallel with HTML parsing.
 - Executed after the HTML parsing in completely finished, right before **DOMContentLoaded**.
 - Ordered. Scripts execute in the exact order they appear in the HTML document.

``` 
<p>...Content before script...</p>
    <script
        <defer src='https://javascript.info/article/script-async-defer/long.js?speed=1'>
    ></script>

<!-- Visible immediately -->
<p>...content after script...</p>
```
 - scripts with defer never blocks the page.
 - scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

**async (asynchronous):**
The async attribute means the script is completely independent. async scripts load in the background and run when ready.
The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes).

