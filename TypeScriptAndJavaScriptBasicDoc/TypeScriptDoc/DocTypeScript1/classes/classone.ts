class Car{
    engine:string;
    constructor(engine:string){
        this.engine=engine;
    }
    motordegerinial():void{
        console.log("Motor Degeri  " +this.engine);
    }
}

var reno=new Car("motor1");
console.log(reno.engine);
console.log(reno.motordegerinial());




// Sınıf Kalıtımı

class Araba{
    motor:number;
    constructor(motor:number){
        this.motor=motor;
    }
}

class Reno extends Araba{
    ver():void{
        console.log(this.motor); // Direkt Özelliğinede erişebiliriz.
    }
}

var objem=new Reno(100);
console.log(objem.motor); 
objem.ver();


// Class Inherştance ve Method oVERRİDİNG iŞLEVİ yAPILDI
class PrinterClass{
    doPrint():void{
        console.log("Üst Class Metodu");
    }
}


class ChildPrinterClass extends PrinterClass{
    // Overriding Yapıyoruz
    doPrint(): void {
        super.doPrint();
        console.log("Yeni metod Oluşturduk Overring Yaptık");
    }
}

var override=new ChildPrinterClass();
override.doPrint();


// Static Nedir: 
// Sınıf Değişkenidir.
// Bir sınıfın veri üyelerine uygulanabilir.
// Program Yürütmeyi bitirene kadar değerlerini korur.

class StaticSınıf{
    static sayi:number;
    static fonk():void{
        console.log("Static Değerimiz" + StaticSınıf.sayi );
    }
}

var staticsayii=StaticSınıf.sayi=10;
StaticSınıf.fonk();
console.log(staticsayii);

// Veri Gizleme
//(PUBLİC PRİVATE PROTECTED)
class Encapsulate{
    str:string="Fatih";
    private str22:string="codemain";
}
var encapsulate=new Encapsulate();
console.log(encapsulate.str);












