function postverilerigetir(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
         .then(response=>{
            resolve(response.json())
         }).catch(()=>{
             reject("Hataaaa")
         })
    })   
}

function userverilerinigetir(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>{
            resolve(response.json())
         }).catch(()=>{
             reject("Hataaaa")
         })
    })   
}
function diziverisigetir(){
    return new Promise((resolve,reject)=>{
        var dizi=[1,2,3,4];
        console.log(dizi)
    })
        
}


var data=[1,2,3,4];
function dataverilerinigetir(){
    data.forEach(data=>console.log(data));
}


function yazdir(){
    postverilerigetir().then((response)=>{
        console.log(response)
        userverilerinigetir().then((res)=>{
            console.log(res);
        }).then(()=>{
            diziverisigetir();
        })
    })
}
yazdir();



function verigetir1(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>
        console.log(res.json()));
    })

    
}