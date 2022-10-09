
/*   var p=new Promise((resolve,reject)=>{
    if(true){
        resolve("Basarili")
    }
    else{
        reject("Basarisiz")
    }
  });
  p.then((data)=>{
        console.log(data);
  }).catch((err)=>{
    console.log(err)
  }); */
  // Promise Zincirleri
  // Promise Sıralı devirli işlemler
/*   var x=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(5)
    }, 1000);
  }).then((num)=>{
    console.log(num)
    return num + num;
  }).then((num)=>{
    console.log(num)
  })
 */
/*   const isMomHappy=true;
  const willGetNewPhone=new Promise((resolve,reject)=>{
    if(isMomHappy){
        const phone={
            name:"Iphone 8",
            price:20000,
            color: "Silver"
        }
        resolve(phone)
    }
    else{
        const error=new Error("Mom İs Not Happy");
        reject(error);
    }
  });
const showToFriend=(phone)=>{
    const message="He Friend this.is my new phone"+phone.name;
    return Promise.resolve(message);
}
function askMom(){
    willGetNewPhone.then(showToFriend).then(message=>{
        console.log(message)
    }).catch(error=>{
        console.log(error)
    })
}
askMom();
 */
/* 
var a=10;
function deneme(){
    return new Promise((resolve,reject)=>{
        a=14;
        resolve(4);
        reject(err)
    })
}
deneme().then((data)=>{
    console.log(data)
})

console.log(a) */



