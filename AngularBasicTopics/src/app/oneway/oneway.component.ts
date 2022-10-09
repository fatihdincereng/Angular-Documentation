import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {

  inputvalueone:any;
  inputvaluetwo:any;
  inputvaluethree:any;

  constructor() { }

  ngOnInit(): void {
  }

  inputone(e:any){
    console.log(e.target.value);
    this.inputvalueone=parseInt(e.target.value);
  }
  inputtwo(e:any){
    console.log(e.target.value);
    this.inputvaluetwo=parseInt(e.target.value);
  }

  topla(){
    alert(this.inputvalueone+this.inputvaluetwo);
  }

  ngmodeltopla(){
    var a=parseInt(this.inputvalueone);
    var b=parseInt(this.inputvaluetwo);
    alert(a+b)
  }


}
