function toplama(a:number,b:number){
    return a+b;
}
const cikarma=function(a:number,b:number){
    return a-b;
}

function ekranabastir(){
    console.log("Ekrana Değer bastık");
}

toplama(3,4);
cikarma(5,2);
ekranabastir();

////////////////////////////////


//// İsteğe Bağlı Fonksyionlar
function degeryaz(a:number,b:number,c?:number){
    console.log(a);
    console.log(b);
    if(c!=undefined){
        console.log(c);
    }
}
degeryaz(7,9);
degeryaz(1,3,5);