// 1 den 10 a kadar olan sayıları döndürme
var i:number;

for(i=0;i<10;i++){
    //console.log(i);
}

// Verilen değişkendeki değerleri döndürme

var j:any;
var degerler:any="a b c";
for (j in degerler){
    console.log(degerler[j]);
}

// Toplam Fonksiyonu Yazdırma
var toplam:number=0;
var i:number;
for(i=1;i<10;i++){
    toplam+=i;

}

console.log(toplam);

// Faktoriyel Bulma

var faktoriyel:number=1;
var i:number;
for(i=1;i<5;i++){
    faktoriyel*=i;
}
console.log(faktoriyel);


// Sonsuz Döngüler
for(;;){
    //console.log("Sonsuz");
}





