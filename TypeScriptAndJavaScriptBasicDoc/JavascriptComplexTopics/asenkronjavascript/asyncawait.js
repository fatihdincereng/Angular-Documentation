async function fetchPosts(){
    var data;
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response)
    data=await response.json();
    console.log(data)
    data.forEach(i=>{
        console.log(i)
    });
}

fetchPosts();