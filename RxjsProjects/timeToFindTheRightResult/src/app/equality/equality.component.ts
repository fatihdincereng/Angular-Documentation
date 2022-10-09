import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import {EqualityValidators } from '../validatorsClass/equality-validators';

@Component({
  selector: 'app-equality',
  templateUrl: './equality.component.html',
  styleUrls: ['./equality.component.css']
})
export class EqualityComponent implements OnInit {

  seconds = 0;
  value:number=0;
  mathForm = new FormGroup(
    {
      firstNumber: new FormControl(this.generateNumber()),
      secondNumber:new FormControl(this.generateNumber()),
      answer:new FormControl('')
    },
    [ EqualityValidators.addition('answer','firstNumber','secondNumber')]
  )

  get firstNumber()
  {
    return this.mathForm.value.firstNumber;
  }

  get secondNumber()
  {
    return this.mathForm.value.secondNumber;
  }

  constructor() { }

  ngOnInit(): void {

    // Rxjs Operations 
    // Catch Change 
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(800),
      scan(
        acc => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          };
        },
        { numberSolved: 0, startTime: new Date() }
      )
    )
    .subscribe(( { numberSolved, startTime })=>{
      this.seconds= (new Date().getTime() - startTime.getTime())/numberSolved / 1000;
      this.mathForm.setValue({
        firstNumber:this.generateNumber(),
        secondNumber:this.generateNumber(),
        answer:''
      });
    })

  }


  // Generate Number Function
  generateNumber(){
    return  Math.floor(Math.random()*10);
  }

}
