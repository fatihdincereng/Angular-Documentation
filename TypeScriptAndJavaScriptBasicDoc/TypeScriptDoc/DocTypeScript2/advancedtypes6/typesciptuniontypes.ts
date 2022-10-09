interface X{
     name:string;
}
interface Y{
    age:number;
}

type Employee= X & Y;

let e :Employee ={
    name:"fATİH",
    age:24
}
console.log(e.age);

class Ahmet{
    av:string;
}

class ABC{
    
    acb=new Ahmet();
    deger(){
        this.acb.av="S";
        console.log(this.acb.av);
        
    }
    merhaba(){
        console.log(this.acb.av);
    }
}

const tr=new ABC();
console.log(tr.deger());



