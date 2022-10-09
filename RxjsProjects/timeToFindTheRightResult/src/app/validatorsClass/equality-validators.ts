import {AbstractControl} from '@angular/forms';



export class EqualityValidators {
  // Eşitlik Kontrolünü Sağlayan Kod Parçası
  static addition(target : string, first : string, second: string)
  {
    return (form : AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[first];
      const secondNumber = form.value[second];
      if(firstNumber + secondNumber === parseInt(sum) )
      {
        return null;
      }
      return { addition : true};
    }
  }
}

