# What is Code Splitting?
**Code Splitting:** Is a performance optimization technique that splits your JavaScript application's code into smaller, separate chunks(or bundles) rather than packing everything into a single massive file.

**The Problem It Solves**
Traditionally, bundlers combine all your application code, components, and third-party libraries into one large **bundle.js** file.
 - **The Issue:** As your application grows, this bundle size balloons, When a user visits your site, their browser has to download, parse, and execute the entire file before they can see or interact with anything.

**How Code Splitting Works**
Instead of sending the whole application upfront, code splitting allows your app to load only **What is needed for the current view**, downloading other parts asynchronously when the user requests them (often called **lazy loading**)

``` 
// Instead of a static import at the top:
// Import HeavyChart from './HeavyChart';

// You dynamically import it only when needed:
const HeavyChart = React.lazy(() => import('./HeavyChart'));
```

**Common Strategies**
* **Route-based splitting(most common, highest impact)**: Breaking your app up by pages.
* **Component-based splitting**:Isolating heavy, infrequently used components

### Benefits of Code Splitting
 * It reduces the initial bundle size, Instead of loading your entire application upfront, users download only what they need for the current page or feature.
 * It enables more efficient caching. When you update one part of your application, users only need to download the changes chunks, not the entire application again.