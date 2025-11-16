
**CALLBACKS**

const posts=[{title: 'Post One' , body: 'This is post one'},{title: 'Post Two' , body: 'This is post two'}]
function getPosts(){
setTimeout(()=>{
let output=''
posts.forEach((post,index) => {
output+='<>$(post.title)</li>
})
document.body.innerHTML=output;
},2000);
}

function createPosts(post,callback)
{
setTimeout(()=>{
posts.push(post);
callback();
},2000);
}

function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

fetchData(function(result) {
    console.log(result); // Logs "Some data" after 1 second
});

- *A callback is a function passed as an argument to another function, intended to be executed after the completion of an asynchronous operation.*

- *Traditional way to handle asynchronous tasks like network requests or timers.*


**PROMISES**

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Some data from promise");
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}

fetchDataPromise()
    .then(data => console.log(data)) // Logs "Some data from promise"
    .catch(error => console.error(error));

- *A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It provides a more structured way to handle asynchronous code.
-
- *Offers a cleaner alternative to callbacks, avoiding callback hell and improving readability through chaining methods like `.then()` for success and `.catch()` for error handling.*


**ASYNC / AWAIT**

async function fetchDataAsync() {
    try {
        const data = await new Promise(resolve => {
            setTimeout(() => resolve("Some data from async/await"), 1000);
        });
        console.log(data); // Logs "Some data from async/await"
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();

- *An `async` function is a function that can `await` the resolution of a Promise. The `await` keyword can only be used inside an `async` function and pauses the execution of the `async` function until the awaited Promise settles.*

- *The most modern and preferred method, making asynchronous code look and feel synchronous, simplifying complex asynchronous flows.*

USING FETCH :

![[Pasted image 20251116194934.png]]

![[Pasted image 20251116195004.png]]