class Insanimx{
   constructor(private names:string,private boys:number){
    this.names=names;
    this.boys=boys;
   }
     tumadlarigetir(){
         return this.names + this.boys;
     }
 
     sadeceboyugetir(){
         return this.boys;
     }
 }
 

class Employee extends Insanimx{
    constructor(names:string,boys:number,public maas:number){
        super(names,boys);
    }
    sadeceboyugetir(): number {
        return super.sadeceboyugetir()  + 10 
    }
}

let employee=new Employee("Fatih",190,6500);
console.log(employee.sadeceboyugetir());
const nameim=employee.maas=10
console.log(nameim);
console.log(employee.sadeceboyugetir());

