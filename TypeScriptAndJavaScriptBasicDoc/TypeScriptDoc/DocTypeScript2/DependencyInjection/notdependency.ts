class Motor{
    gazver(){
        return 80;
    }
}

class Ford{
    fordmotor:Motor=new Motor();

    motorGazi(){
        console.log(this.fordmotor.gazver())
    }
    
}

class Reno{
    renomotor:Motor=new Motor();
    motorGazi(){
        console.log(this.renomotor.gazver())
    }
}

var ford=new Ford();
ford.motorGazi();

var reno=new Reno();
reno.motorGazi();

