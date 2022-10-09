function Person(name,surname,age){
    this.name=name;
    this.age=age;
    this.surname=surname;
}

class PersonClass{
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;

    }
    fullName(){
        return this.name + '' + this.surname;
    }
}
var fatih=new PersonClass("Fatih","Dincer",24);
console.log(fatih);


var deger = function(){
    console.log("Fatih");
}
console.log(typeof(deger));
var Person=class Neden{

}
console.log(typeof(Person))
