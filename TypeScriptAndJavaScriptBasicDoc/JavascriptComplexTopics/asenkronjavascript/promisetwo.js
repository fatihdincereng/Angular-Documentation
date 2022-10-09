function birincifonksiyon(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
                resolve(response.json())
            }).catch(()=>{
                reject("Hata Var")
            })
        },4000)

    })
}

function ikincifonksiyon(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                resolve(response.json())
            }).catch(()=>{
                reject("Hata Var")
            })
        },2000)
    })
}


function yazdir(){
    birincifonksiyon().then((response)=>{
        console.log(response)
        ikincifonksiyon().then((res)=>{
            console.log(res)
        });
    })
}
console.log(yazdir())
