// Promise ALL
const p1=Promise.resolve("P1");
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Ben 2.Promisim")
    },2000);
});
const p3=1234;
const p4=fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json());
const p5=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

Promise.all([p4,p5]).then(promises=>{
    console.log("promises",promises);
});