function toplamlarinialama(...numbers:number[]){
        let total=0;
        numbers.forEach((num) => total+=num);
        return total;
}


console.log(toplamlarinialama());
console.log(toplamlarinialama(10,20));
console.log(toplamlarinialama(10,20,30));

function carpimlarinial(...sayilars:number[]){
        let deger=1;
        sayilars.forEach((sayi)=>deger*=sayi)
        return deger;
}

console.log(carpimlarinial(5,4));

