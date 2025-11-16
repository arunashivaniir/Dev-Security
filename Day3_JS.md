
CALLBACKS

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
setTimeot(()=>{
posts.push(post);
callback();
},2000);
}

- A callback is a function passed as an argument to another function, intended to be executed after the completion of an asynchronous operation.