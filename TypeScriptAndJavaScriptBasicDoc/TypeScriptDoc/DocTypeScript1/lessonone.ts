var sayi:Number=10;
console.log(sayi);

var stringdegisken:String="Merhaba Fatih";
console.log(stringdegisken);

function topla(a:number,b:number):number{
    return a+b;
}


const topla2=function(a:number,b:number):number{
           return a+b;
};
console.log(topla(3,4));
console.log(topla(5,7));

class Fatih{
    kos():void{
        console.log("Fatih Kosuyor");
    }
}
const fatih=new Fatih();
const fatihkosuyor=fatih.kos();
console.log(fatihkosuyor);




