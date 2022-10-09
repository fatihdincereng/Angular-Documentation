
console.log(this);
console.log(this.location.href);

function func1(){
    console.log(this)
}
func1();

const func2=function(){
    console.log(this)
};
func2();

var a;
function degerata(){
        a=10;
    return a;
}
console.log(degerata(5))
function Personn(name,age){
    var obje={};
    obje.name=name;
    obje.age=age;
    obje.fullName=()=>{
        return obje.name;
    }
    return obje;
}

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        
    }

    metod=function(){
        return this.name;
    }

}
const fatih=new Person("Fatih","Dinçer");
console.log(fatih);