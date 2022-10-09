var degerler:number[]=[1,2,3,4];
var stringler:string[]=["a","b","c"];
console.log(degerler);
console.log(stringler);


// Array nesnesi yapısında kullanma
var arrays=new Array(4);
var i:number;
for(i=0;i<5;i++){
    arrays[i]=i;
}

var names:string[]=["a","b","c"];
for(var i=0;i<names.length;i++){
    console.log(names[i]);
}


// concat
var x=["a","b","c"];
var y=[1,2,3,4];
var c=x.concat(y.toString());
console.log(c);

// Filter Method verilen fonksiyona göre dönüş yapar.
var dizim:number[]=[1,2,3,4,5,12,12,123];
function ondanbuyuklerial(element:any){
    return(element>=10);
}
// Filter metodu içine fonksşyon oluşturarak döner dizi içindeki her öğe element olmuş olur.
var filtrelenendizim=dizim.filter(ondanbuyuklerial);
console.log(filtrelenendizim);


// ForEach dizinin içerisindeki elemanları otomatik olarak döner ve verilen fonksiyona göre iş yapar
var sayilar:any[]=[7,8,9];
sayilar.forEach(function(value){
    console.log(value);
});

// Map Fonksiyonu: Değişkenleri tek tek ayırarak üzerinde işlemler yapar.
var dizidegerleri:number[]=[4,9,16,25];
var degerrr=dizidegerleri.map(Math.sqrt);
console.log(degerrr);




