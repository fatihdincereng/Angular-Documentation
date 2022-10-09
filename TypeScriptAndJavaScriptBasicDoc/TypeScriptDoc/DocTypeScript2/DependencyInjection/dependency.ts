class MotorDependency{
 
    gazver(){
        return 80;
    }
}
class FordDependency{
    fordmotor:MotorDependency
    constructor(fordmotor:MotorDependency){
        this.fordmotor=fordmotor;
    }
    motorGazi(){
        console.log(this.fordmotor.gazver())
    }
    
}
class RenoDependency{
    renomotor:MotorDependency
    constructor(renomotor:MotorDependency){
        this.renomotor=renomotor;
    }
    motorGazi(){
        console.log(this.renomotor.gazver())
    }
}

var fordmotordependency:MotorDependency=new MotorDependency();
var renomotordependency:MotorDependency=new MotorDependency();
var forddependency=new FordDependency(fordmotordependency);
forddependency.motorGazi();
var renodependency=new RenoDependency(renomotordependency);
renodependency.motorGazi();
