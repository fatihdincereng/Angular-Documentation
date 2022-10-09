/// Dinlenme Parametreleri: Birden çok veri için yer tutucu paremetrelerdir özet olarak dizi göndrebiliriz paremetre olarak 
function sayilaritopla(...sayilar:number[]){
    var i:number;
    var sum:number=0;
    for(i=0;i<sayilar.length;i++){
        sum+=sayilar[i];
    }
    console.log(sum);
}
sayilaritopla(1,2,3);

//Varsayılan Paremetreler:  Varsayılan Değerler atanabilir veya vrsayılan değer değiştirilebilir.
function topla(a:number,b:number=5){
    const toplamdegerim=a+b;
    return toplamdegerim;
}
console.log(topla(3));
console.log(topla(5,6));


/// İşlev Oluşturucular new ile oluşturulur ve kullanılır
var toplamaislevi=new Function("a","b","return a+b");
console.log(toplamaislevi(3,4));

function ozyineleme(sayi:number): any{
    if(sayi<=0) {
        return 1;
    }
    else{
        return (sayi*ozyineleme(sayi-1));
    }
}
console.log(ozyineleme(5));


// Lambda Function: Return e gerek yok .
var toplalamda= (a:number,b:number)=> a+b;
console.log(toplalamda(55,43));
