var nesneornegi={
    ad:"Fatih",
    soyad:"dincer"
}

console.log(typeof(nesneornegi)); // Object Değeri Döner tipi objedir. Class taki obje ile ne farkı var araştır.
var degerlerim={
    ad:"Fatih",
    soyad:"Dinçer",
    kosar:()=>{
        console.log("Kos"+degerlerim.ad);
    },
    dizimiz:[1,2,3,4],
}
console.log(degerlerim.kosar());



const govdeliobje={
    ad:"Fatih",
    soyad:"Mert",
    govdem:()=>{}, // Boş gövde oluşturduk.
}
govdeliobje.govdem=()=>{ console.log("Merhaba Gövdem"+ govdeliobje.ad);}
govdeliobje.govdem();