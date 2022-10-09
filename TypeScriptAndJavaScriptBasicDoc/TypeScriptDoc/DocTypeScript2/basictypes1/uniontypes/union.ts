function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log(add(3,4)); // Başarılı
console.log("Fatih","Dincer"); // Başarılı
// console.log(console.log(true,false)); // Error
// console.log(add("Fatih",12)); //    Error



// Type Alias 
// Tipler Oluşturulabilir
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid


// Birleşik tipler Oluşturma.

type yenitip= boolean | number;
let deger:yenitip;
deger=true;
deger=12;
// Son eklenen değer ortaya çıkar
console.log(deger);


function cikarmakz(x:any,y:any){
    if(typeof x ==='number'  && typeof y==='number'){
        return x - y;
    }
    if  (typeof x==="string"   && typeof y==="number"){
        return y;
    }
    else{
        throw new Error('Parameters must be numbers or strings');
    }
}

console.log(cikarmakz(6,4));
console.log(cikarmakz("A",5));




