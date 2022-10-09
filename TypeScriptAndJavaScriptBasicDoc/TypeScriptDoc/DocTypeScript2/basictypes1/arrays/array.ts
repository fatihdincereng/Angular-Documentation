let arrays:string[];
arrays=["A","B","C"];
arrays.push("D");
console.log(arrays);


let sayidizileri=[1,2,3,4];
let a=sayidizileri.map(e=>e * 2);
console.log(sayidizileri);
console.log(a);

let karisikdizi:(string |  number)[];
karisikdizi=[1,2,3,4,"A","B"];

console.log(karisikdizi);

let diziyapisi:string[]=["A","B","C"];
diziyapisi.push("D");
const maplenmisdizi=diziyapisi.map(e=>e.concat("B"));
console.log(maplenmisdizi);
