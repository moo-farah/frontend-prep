# What is the difference between Client side rendering and Server side rendering?
Client-side rendering (CSR): refers to the practice of generating HTML content using JavaScript in the browser

**Benefits of CSR include:**
 - Interactivity: any page update, including route transitions, do not require a full page reload
 - Performance: the server only sends the initial HTML content and JavaScript assets.

 ### CSR
  - The browser downloads this minimal HTML document
  - Encouters JavaScript file references and downloads them
  - The JavaScript executes in the browser(the client)
  - The javaScript code:
    - Requests data from APIs or servies
    - Generate HTML dynamically
    - Injects this HTML into the DOM
    - Handles user interactions and updates the page without full reloads

Server-side rendering (SSR): refers to the practice of generating HTML content on the server and sending it to the client
A **Static site:** can be considered as SSR (can be generated using SSR infrastructure), 
 - But there are nuanced differences. Content of a static site is generated at build time not at request time
 - Not need to deployed on a server but can served from a CDN
### Benefits of SSR
 - Accessibility: 
 - Crawler-friendliness: search engines, social media crawlers, and other bots can easily read the content without needing to execute JavaScript.
 - Performance: the server can know ahead-of-time what content is needed and can fetch all necessary data at once.

### SSR
- The server receives a request for a page
- Server-side code (Like PHP, Ruby, Node.js, etc.) runs and:
  - Fetches necessary data from databases or APIs
  - Processes the data
  - Injects the data into HTML templates
- The server sends the fully formed HTML document to the browser
- The browser renders this ready-to-display HTML
    