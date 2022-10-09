// VeriTabanına veri kaydettik ve veri listeleme yapıcaz.
const todos=[
    {title:"todo1",description:"Bug Temizlik"},
    {title:"todo2",description:"Oyun oyna"},
    {title:"todo3",description:"Video Çek"}
];

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
    setTimeout(()=>{
        todos.push(todo);
        callback();
    },3000)
}

newTodo({
    title:"Todo 4",
    description:"Yemek Yap ulan"
},todoList);


 

