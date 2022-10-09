var union:string|number;
union=12;
console.log(union);


function uniondegerler(degeri:string|string[]){
    if(typeof(deger)=="string"){
        console.log(deger);
    }
    else{
        var i:number;
        for(i=0;i<degeri.length;i++){
            console.log(degeri[i]);
        }
    }
}

uniondegerler("Fatih");
uniondegerler(["a","b","c"]);