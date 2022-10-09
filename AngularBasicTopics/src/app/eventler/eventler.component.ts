import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventler',
  templateUrl: './eventler.component.html',
  styleUrls: ['./eventler.component.css']
})
export class EventlerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doubleclick(event:any){
    console.log(event);
    
  }

  focusclick(event:any){
    console.log(event);

  }

}
