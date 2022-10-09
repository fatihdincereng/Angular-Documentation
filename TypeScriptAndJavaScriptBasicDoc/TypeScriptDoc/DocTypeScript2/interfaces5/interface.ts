function butunadigetir(x:{
    name:string,
    age:number;
})
{
    return x.name+x.age;
}

let person ={
    name:"Fatih",
    age:10
}

console.log(butunadigetir(person));



interface Futbolcu{
    name:string;
    age:number;
}

let ronoldo={
    name:"Ronaldo",
    age:37
}

function futbolcubilgisigetir(futbolcu:Futbolcu){
        return futbolcu.age + futbolcu.name;
}

console.log(futbolcubilgisigetir(ronoldo));





interface Arabalar{
    name:string;
    modeli?:number;
}



var ferrari={
    name:"Ferrari"
}
var remo={
    name:"Reno",
    modeli:2010
} 

function arabaverilerinigetir(arabalar:Arabalar){
        if(arabalar.modeli){
            return arabalar.modeli + arabalar.name
        }
        else{
            return arabalar.name;
        }
}

console.log(arabaverilerinigetir(ferrari)); // Ferrari
console.log(arabaverilerinigetir(remo)); // Reno

