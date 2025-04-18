import {Directive, ElementRef} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

@Directive({
  selector: '[usernameValidation]',
  standalone: true
})
export class UsernameValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    let errorMap: ValidationErrors | null = null
    if(control.value.toString().includes("test")) {
      errorMap = {'usernameIncludesForbidden': true}
    }
    return errorMap;
  }
  userNameExists(control: AbstractControl): ValidationErrors | null {
    return this.validate
  }
}


