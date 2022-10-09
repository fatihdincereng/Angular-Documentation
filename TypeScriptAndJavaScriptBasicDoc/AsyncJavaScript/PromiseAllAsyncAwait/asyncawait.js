
function comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => console.log(json))
}

function photos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => console.log(json))
}


async function metod(){
    await photos();
    await  comment();
}

metod();