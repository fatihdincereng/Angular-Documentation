import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  userForm=new FormGroup({
    userName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

  getLoginUser(){
    console.log(this.userForm.value);
    
  }


}
