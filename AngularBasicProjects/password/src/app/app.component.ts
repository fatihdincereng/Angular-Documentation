import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  password: string = ""

    deneme:number=0;
  length:number=0;



  alfabekontrol: boolean = false;
  sayikontrol: boolean = false;
  sembolkontrol: boolean = false;

  alfabedegeridegistir() {
    this.alfabekontrol = !this.alfabekontrol

  }
  sayidegeridegistir() {
    this.sayikontrol = !this.sayikontrol

  }


  semboldegeridegistir() {
    this.sembolkontrol = !this.sembolkontrol
  }

  sifreuzunlugual(value:string){
      const parsedValue=parseInt(value);
      if(!isNaN(parsedValue)){
        debugger;
        this.length=parsedValue
      }
  }



  getPassword() {
    return this.password
  }



  butonabas() {

    const alfabeler="abcdefghıijklmnoprstuvwyz";
    const sayilar="1234567890"
    const semboller="$½$£§{[]";
    let toplanandegerler="";

    if(this.alfabekontrol){
      toplanandegerler+=alfabeler;
    }
    if(this.sayikontrol){
      toplanandegerler+=sayilar;
    }
    if(this.sembolkontrol){
      toplanandegerler+=semboller;
    }

    let passwordolusturma="";

    var index=0;
    for(var i=0;i<this.length;i++){
      index=Math.floor(Math.random()*toplanandegerler.length);
      passwordolusturma+=toplanandegerler[index];
    }
    
   this.password=passwordolusturma;
   this.deneme=index;
   
  }
  

}
