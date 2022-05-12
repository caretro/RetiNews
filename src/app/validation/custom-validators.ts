import { ValidatorFn, AbstractControl, FormArray, FormControl } from "@angular/forms";

export class CustomValidators {
  static regexValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = regex.test(control.value);
      return forbidden ? { 'forbidden': { value: regex.source } } : null;
    };
  }

  static tagsValidator(): ValidatorFn {
    return (formArray: AbstractControl): { [key: string]: any } | null => {
      if (formArray instanceof FormArray) {
        const vals: string[] = formArray.controls.map(c => c.value);
        const hasDuplicate = vals.some((item, index) => index !== vals.indexOf(item));
        return hasDuplicate ? { 'duplicate': true } : null;
      }
      return null;
    };
  }
}