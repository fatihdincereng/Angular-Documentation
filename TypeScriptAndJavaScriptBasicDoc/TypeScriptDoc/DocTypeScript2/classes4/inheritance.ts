class Insanim{
   names:string;
   boys:number;
   
    tumadlarigetir(){
        return this.names + this.boys;
    }

    sadeceboyugetir(){
        return this.boys;
    }
}

class Calisanlar extends Insanim{
    maas:string;

    metod(){
        console.log("Merhaba");
    }

}

var calisan1=new Calisanlar();
calisan1.boys=10;
calisan1.names="Fatih";
calisan1.maas="55500"
console.log(calisan1.boys);
console.log(calisan1.names);
console.log(calisan1.maas);
console.log(calisan1.sadeceboyugetir());


