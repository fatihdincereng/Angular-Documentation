import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childlifecycle',
  templateUrl: './childlifecycle.component.html',
  styleUrls: ['./childlifecycle.component.css']
})
export class ChildlifecycleComponent implements OnInit,OnChanges {

  counter=0;
  interval:any;
  @Input() channelName="";
  constructor  () { 
    console.log("Child constructor");
    
   } 

  ngOnInit(): void {
    /* this.interval=setInterval(()=>{
      this.counter=this.counter+1;
      console.log(this.counter);
      
    },1000) */
    console.log("Child NgOnInit");
    
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("Child Component Destroy"); 
  }
  ngOnChanges(changes:SimpleChanges): void {    
    console.log("CHİLD NGONCHANGES");
    
  }
/*   ngDoCheck(): void {
    console.log("Child Do Check");
  }
 */
}
