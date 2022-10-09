namespace DatabaseEntity{
    export class User{
        constructor(public name:string){}
    }
    export const user=new User("Fatih");
}
console.log(typeof(DatabaseEntity));

console.log(DatabaseEntity.user.name);

// Namespaceler özellikler sınıflar türler arabirimler gibi birden çok değeri tutmak için kullanılan bir organizasyon birimidir
// Kodu mantıksal gruplandırmanın bir yoludur.
// Dışarıya aktarılması gereken herşeyin export edilmesi gerekiyor