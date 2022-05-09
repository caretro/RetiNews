import { ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators {
    static regexValidator(regex: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
          const forbidden = regex.test(control.value);
          return forbidden ? {'forbidden': {value: regex.source}} : null;
        };
      }
}