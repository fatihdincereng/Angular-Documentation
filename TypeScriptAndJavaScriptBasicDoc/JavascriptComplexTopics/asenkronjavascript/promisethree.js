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
        },6000)
    })
}

function allResult(){
    Promise.all([birincifonksiyon(),ikincifonksiyon()]).then((res)=>{
        console.log(res);
    });
}

allResult();