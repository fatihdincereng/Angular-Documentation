function opsiyonelfonksiyonlar(a:number,b?:number){
    if(typeof b !=='undefined'){
            return a +b;
    }
    else{
        return a;
    }
}

console.log(opsiyonelfonksiyonlar(5,6));
console.log(opsiyonelfonksiyonlar(5));


