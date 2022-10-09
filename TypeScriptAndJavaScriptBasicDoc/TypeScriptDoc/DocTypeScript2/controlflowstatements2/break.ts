var products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}

console.log(products[i]);
console.log(typeof(products));

var diziis=[1,2,3,4];
console.log(typeof(diziis));

class Mert{
    name:string;
}
let fatihs=new Mert();
console.log(typeof(Mert));
console.log(typeof(fatihs));

for (let index = 0; index < 9; index++) {
    if (index % 2)
        continue
    console.log(index);
}
