class Person{
    constructor(name,age,surname){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    fullName(){
        return this.name + '' + this.surname;
    }


    static showName="Person";

    static staticMethod(){
        console.log("Static Methos Calisiyor")
    }
}

var fatih=new Person("Fatih",24,"Dincer");
var mert=new Person("Mert",24,"Asilturk");
console.log(Person.staticMethod());


class Engineer extends Person{
    constructor(name,surname,age,job){
        super(name,surname,age);
        this.job=job;
    }

    getMpney(){
        console.log("Para Kazan")
    }

    ozellik(){
        return this.name;
    }
}

const gurcan=new Engineer("Fatih",24,"Dincer","Engineer");
console.log(gurcan);
console.log(gurcan.ozellik())
console.log(gurcan.fullName())


class ExtendedArray extends Array{
    shuffle(){
        this.sort(()=>Math.random() - 0.5);
    }
}

let myArr= new ExtendedArray(1,2,3,4,5);
console.log(myArr)
myArr.shuffle();
console.log(myArr)
