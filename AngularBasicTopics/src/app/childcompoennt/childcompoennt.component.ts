import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcompoennt',
  templateUrl: './childcompoennt.component.html',
  styleUrls: ['./childcompoennt.component.css']
})
export class ChildcompoenntComponent implements OnInit {

  @Input() count:any;
  @Output() PersonelEvent=new EventEmitter();
  name:any="Fatih"
  constructor() { }

  ngOnInit(): void {
  }

  addPersonel(name:string){
   this.PersonelEvent.emit(name);
  }

}
