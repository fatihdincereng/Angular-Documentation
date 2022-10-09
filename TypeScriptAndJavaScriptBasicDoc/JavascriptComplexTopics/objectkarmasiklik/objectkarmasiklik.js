const person={
    name:"Fatih",
    surname:"Dincer",
    age:24,
    fullName: function(){
        return this.name+"" + this.surname
    }
}

console.log(person);
console.log(person.toString());

const bosobje={};
console.log(bosobje.toString)

function Person(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.fullName=function(){
        return this.name +""+this.surname;
    }
}
const fatih=new Person("Fatih","Dincer",6)
fatih.job="Engineer";
console.log(fatih);

fatih.toString=function(){
    return "FatihOverrideYapti"
}
console.log(fatih.toString());

var nesne={
    name:"Fatih",
    surname:"Dincerss",
    age:24
}


const {name,surname}=nesne;
console.log(name);
console.log(surname)


let nesne2={...nesne};
console.log(nesne2)




console.log(Object.keys(person)) // Array Döner
console.log(Object.values(person)) // Array Döner