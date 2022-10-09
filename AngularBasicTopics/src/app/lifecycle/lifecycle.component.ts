import { AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit ,AfterViewInit{

  isChild:boolean=false;
  channelName='';
  constructor() { 
  }

  ngOnInit(): void {
  }
  


  toggleChild(){
    this.isChild=!this.isChild;
  }

  ngDoCheck(): void {
  }

  ngAfterViewInit(): void {
  }

 



}
