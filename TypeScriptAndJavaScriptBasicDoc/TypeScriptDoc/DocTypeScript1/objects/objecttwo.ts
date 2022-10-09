var fatihdincer={
    ad:"Fatih",
    soyad:"Dinçer"
};
var functionobjem=(obje:{ad:string,soyad:string})=>{
    console.log(obje.ad);
    console.log(obje.soyad);
}
functionobjem(fatihdincer);


var functionanonim=(obje:{ad:string,soyad:string})=>{
    console.log(obje.ad);
    console.log(obje.soyad);
}

functionanonim({ad:"Fatih",soyad:"Dinçer"});

