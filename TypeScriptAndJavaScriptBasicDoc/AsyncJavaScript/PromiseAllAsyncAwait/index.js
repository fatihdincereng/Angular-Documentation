let loading=false;
const getTodoById = () => {
    alert("Basladi")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => 
            loading=false)

}

const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))
}

const getAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => console.log(json))
}

const getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
}

const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => 
            alert("Bitti")
        )
}


const allResult=()=>{
    Promise.all([getTodoById(),getComments(),getAlbums(),getTodos(),getUsers()]).then((res)=>{
        console.log(res)
    })
}


window.addEventListener('load', () => {
    getTodoById();
    getComments();
    getAlbums();
    getTodos();
    getUsers();
})



