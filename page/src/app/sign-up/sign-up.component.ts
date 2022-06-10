import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
    SignFormGroup: FormGroup
    empRecord: any={
      firstName: '',
      lastName: '',
      email: '',
      Password: '',
      reenter:'',
      type:'user'
    }
  api: any;
  static find: any;
  array:any = [];
  constructor(private fb: FormBuilder,private AppService:AppServiceService,private router:Router,private toastr:ToastrService) { 
    this.SignFormGroup = this.fb.group({
      firstName: [this.empRecord.firstName],
      lastName: [this.empRecord.lastName],
      email: [this.empRecord.email],
      Password: [this.empRecord.Password],
      reenter:[this.empRecord.reenter],
      type:['user']
   });
  }
  get email() {
    return this.SignFormGroup.get('email')!;
  }
  get password() {
    return this.SignFormGroup.get('password')!;
  }
  
  click(){
    this.router.navigate(['client-login']);
    }
    ngOnInit(): void {
      this.SignFormGroup = this.fb.group({
        firstName:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
        lastName: ['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
        email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
        Password: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*")]],
        reenter: ['', [Validators.required,Validators.pattern("[A-Za-z0-9]*")]],
        type:['user']
        });
    }
    emailvalidation(event:any){
      console.log("event started");
      console.log(event.target.value);
     this.AppService.Client(event.target.value).subscribe((data:any)=>{
       console.log("Email verification data from database",data);
       if(data.docs[0].email == event.target.value) {
          this.toastr.error("Email Already exit enter a vaild email")
       }
     })
   }
  formSubmit(FormValue:NgForm)
  {
    console.log(FormValue);
    this.AppService.signForm(FormValue).subscribe((res)=>{
      console.log("Form value add sucessfully");
      console.log("getted response",res);
      if (res && res['id'])
      {
        this.toastr.success("Signup Successfull");
        this.router.navigate(['client-login'])
      }
    })
  }
}
