import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent  {
  clientFormGroup: FormGroup
  empRecord: any={
    firstName: '',
    password: '',
  }

  constructor(private fb: FormBuilder) {
    this.clientFormGroup = this.fb.group({
      firstName: [this.empRecord.firstName,[Validators.required,Validators.minLength(3)]],
      password: [this.empRecord. password],
    });
   }

  
  get firstName() {
    return this.clientFormGroup.get('firstName')!;
  }
  get password() {
    return this.clientFormGroup.get('password')!;
  }

}

