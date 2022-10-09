const todos=[
    {title:"todo1",description:"Bug Temizlik"},
    {title:"todo2",description:"Oyun oyna"},
    {title:"todo3",description:"Video Çek"}
];

todos.map

let todolistEl=document.getElementById("todoList")

function todoList(){

    let todoItems="";
    setTimeout(()=>{
        todos.forEach(item=>{
            todoItems += `
                <li>
                <b>${item.title}</b>
                <p>${item.description}</p>
                </li>`
        },1000);
        todolistEl.innerHTML=todoItems;
    })

}

function newTodo(todo,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            todos.push(todo);
            const e=false;
            if(!e){
                resolve();
            }
            else{
                reject("Hata Var");
            }
        })
    },2000)
}

newTodo({
    title:"Todo 4",
    description:"Yemek Yap ulan"
}).then(response=>{
    todoList();
}).catch(e=>{
    console.log(e);
})


 

