import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomstring:string="Merhaba Benim Adım Fatih"
  
  inputvalue:string="";


  classbinding:string="incorrect"

  veridegerinial(deger:any){
        this.inputvalue=deger
  }

  compare(randomstring:string,inputvalue:string){
      if(!inputvalue){
        return 'pending';
      } 
      else{
        return randomstring===inputvalue ? 'basarili' : 'incorrect';
      }
      
      
  }


}
