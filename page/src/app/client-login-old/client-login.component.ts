// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-client-login',
//   templateUrl: './client-login.component.html',
//   styleUrls: ['./client-login.component.css']
// })
// export class ClientLoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
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

  ngOnInit(): void {
  }
  get firstName() {
    return this.clientFormGroup.get('firstName')!;
  }
  get password() {
    return this.clientFormGroup.get('password')!;
  }
  // loadEmployee() {
  //   let data = {
  //     firstName: 'savi',
  //     lastName: 'venkat',
  //   };
  //   this.clientFormGroup.patchValue(data);
  // }

}

