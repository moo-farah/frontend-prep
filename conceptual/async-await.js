// Example, let's say you want to fetch a user and then fetch their orders
// with promises:

// function getChainedData(userId) {
//     return fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => response.json())
//     .then(user => {
//         console.log('1. User fetched:', user.name);
//         // Return the next fetch promise
//     return fetch (`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//     })
//     .then(response => response.json())
//     .then(posts => {
//         const firstPost = posts[0];
//         console.log('2. First posts fetched', firstPost.title);
//         // Return another fetch promise for comments
//     return fetch (`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
//     })
//     .then(response => response.json())
//     .then(comments => {
//         console.log('3. Comments fetched! Total comments:', comments.length);
//         return comments;
//     })
//     // catch the errors
//     .catch(error => {
//         console.log('An error occured anywhere in the chain', error)
//     });
// };

// // Test
// getChainedData(1);


// With async/await

// async function getChainedData(userId) {
//     try {
//         // Step 1: Fetch user
//         const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         const user = await userRes.json();
//         console.log('1. User fetched:', user.name);

//         // Step 2: Fetch the posts
//         const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
//         const posts = await postRes.json();
//         const firstPost = posts[0];
//         console.log('2 First post fetched', firstPost.title);

//         // Step 3: Fetch the comments
//         const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`)
//         const comments = await commentsRes.json();
//         console.log('3 comments fetched! Total comments? ', comments.length);
//         return comments
//     } catch (error) {
//         console.log('An error occured after fetching', error);
//     };
    
// }
// // Test it
// getChainedData(1);

// The second version reads top to bottom, just like synchronous code. 
// Each await pauses the function until the promise resolves, then continues to the next line.

// async function greet() {
//     return 'hello';
// }

// // This is the same as
// async function greet() {
//     return Promise.resolve('Hello');
// }
// greet().then((message) => console.log(message));


// Sequentially
// async function processSequentially(userIds) {
//     console.log('Starting sequential run...');

//     for (const id of userIds) {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();
//         console.log(`Processed: ${user.name}`);
//     }
//     console.log('All done sequentially!');
// }

// processSequentially([1, 2, 3]);

// Parallel
async function processInParallel(userIds) {
    console.log('Starting parallel run...');

    // Map through the IDs and start all fetches at the same time
    const fetchePromises = userIds.map(async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response.json();
    });

    // Wait for all promises to resolve together
    const users = await Promise.all(fetchePromises);

    users.forEach(user => console.log(`Processed: ${user.name}`));
    console.log('All done in parallel');
}

processInParallel([1, 2, 3, 4])

