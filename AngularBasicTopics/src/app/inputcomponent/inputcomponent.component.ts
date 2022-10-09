import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent implements OnInit {


  countinput:any=15;


  constructor() { }

  ngOnInit(): void {
  }

  arttir(){
    this.countinput++
  }

  azalt(){
    this.countinput--;
  }

  addPersonel(name:string){
    alert(name)
  }
  


}
