function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomElement(numbers));
console.log(getRandomElement(colors));
 function toplamlar<T>(diziler:T[]):T {
        return diziler[0];
 }

 let sayilar=[1,3,5];
 let stringler=["A","B","C"];
 console.log(toplamlar(sayilar));
 console.log(toplamlar(stringler));
 
 

