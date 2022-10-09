class Insan{
   private ad:string;
   private  soyad:string;

    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }

    verilerigetir(){
      return  this.ad+this.soyad;
    }


}

const fatih=new Insan("Fatih","Dincer");
console.log(fatih.verilerigetir());

class Ogrenciler{
    constructor(private adi:string,private soyadi:string){
        this.adi=adi;
        this.soyadi=soyadi;
    }

    // Fonksiyon yardımı ile veriler gosterilebilir. 
    getFullName(abc:string): string {
        return `${this.adi} ${this.soyadi} ` + abc;
    }

}
const mert=new Ogrenciler("Mert","Asilturk");
console.log(mert.getFullName("T"));

