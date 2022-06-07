import {AbstractControl} from '@angular/forms'
export function rangeValidator(min: any,max:any){
    return function(c:AbstractControl): {[key:string]: boolean} | null{
       if(c.value<min || c.value>max) {
           return {'range':true};
       }
       return null;
    }
}
export function PasswordMatchValidator(c:AbstractControl): {[key:string]: boolean} | null {
    let emailControlvalue = c.get('Password')?.value;
    // console.log(emailControlvalue);
    let confirmEmailControlValue = c.get('ConfirmPassword')?.value;
    if (emailControlvalue !== confirmEmailControlValue ){

        return ({'match':true});
    }
    return null;
}