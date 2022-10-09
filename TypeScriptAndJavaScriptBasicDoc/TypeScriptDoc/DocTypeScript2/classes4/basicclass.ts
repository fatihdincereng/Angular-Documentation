class Person{
    name:string;
    lastname:string;
    age:number;

    constructor(ad:string,soyad:string){
        this.name=ad;
        this.lastname=soyad;
    }

    TumAdıYazdır():string{
        return this.name +this.lastname;
    }
}

var person1=new Person("Fatih","Dincer");
console.log(person1.name);
console.log(person1.lastname);
console.log(person1.TumAdıYazdır());


class Futbolcu{
    adi:string;
    soyadi:string;
}

var ronaldo=new Futbolcu();
var ronaldonunadi=ronaldo.adi="Ronaldo";
console.log(ronaldonunadi);


class Araba{
    marka:string;
    cikisyili:number;

    constructor(markasi:string,cikisi:number){
        this.marka=markasi;
        this.cikisyili=cikisi;
    }

    markavecikisyolunugoster(){
            return this.marka + this.cikisyili
    }

}


const reno=new Araba("Reno",2000);
var renomarkasi=reno.marka="Fiat";
var renocikisyili=reno.cikisyili=1034
console.log(renomarkasi);
console.log(renocikisyili);
 
console.log(reno.marka);
console.log(reno.cikisyili);
console.log(reno.markavecikisyolunugoster());

