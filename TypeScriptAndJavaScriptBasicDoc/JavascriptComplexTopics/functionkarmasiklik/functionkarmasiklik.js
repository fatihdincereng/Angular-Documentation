var person = {
    name: "Fatih",
    age: 24,
    metod: function metod() {
        return 50;
    }
};
console.log(person);
function persontwo(name2, age2) {
    this.name = name2;
    this.age = age2;
    this.getName = function () {
        return this.name;
    };
}
var obje = new persontwo("Mert", 16);
console.log(persontwo);
console.log(obje);
console.log(obje.getName());
var PersonThree = /** @class */ (function () {
    function PersonThree(name3, age3) {
        this.name = name3;
        this.age = age3;
    }
    PersonThree.prototype.getName = function () {
        return this.name;
    };
    PersonThree.prototype.setName = function (namevalue) {
        this.name = namevalue;
    };
    return PersonThree;
}());
var objem = new PersonThree("Fatih", 12);
console.log(objem.age);
console.log(objem);
console.log(typeof(PersonThree))


