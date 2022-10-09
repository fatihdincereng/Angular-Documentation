 interface Insan{
     ad:string,
     soyad:string,
     kod:()=>string
 }

var fatihh:Insan={
    ad:"Fatih",
    soyad:"Dincer",
    kod: ():string =>{return "Hi there"}
}
console.log(fatihh);
console.log(fatihh.kod);
console.log(fatihh.kod());


// Union Interfaces
interface unioninterface{
    program:string,
    line:string[]|string|(()=>string);
}

var dgr1:unioninterface={
    program:"Program",
    line:["a","b"]
}

 var dgr2:unioninterface={
     program:"Program2",
     line:"Line"
 }
console.log(dgr1.program);
console.log(dgr2.line);
console.log(dgr1.line);

// Çoklu Kalıtım
interface Person{
    age:number
}
interface Musician extends Person{
    calgi:string
}
var yeniislem=<Musician>{};
console.log(typeof(yeniislem)); // Object Döner
yeniislem.age=24;
yeniislem.calgi="Cengi";
console.log(yeniislem.calgi);


interface Parent1{
    v1:number
}
interface Parent2{
    v2:number
}

interface Child extends Parent1,Parent2{};

// Child Objesi diğer interfacelerden alır herşeyi.
var ChildObjesi:Child={v1:10,v2:18};
console.log(ChildObjesi.v1);





