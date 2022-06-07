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
        firstName: ['', Validators.required,[Validators.minLength(3)]],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
        Password: ['', Validators.required],
        reenter: ['', Validators.required],
        type:['user']
        });
    }
    find(search:any)
  { 
    this.AppService.Client(search.email).subscribe((data:any)=>{
        console.log("data returned from server",data);
        var totlen = data.docs.length;
       console.log(data.docs[0].email);
        this.array.push(data.docs);
        for(var i=0; i<=totlen; i++)
        {
          console.log(data.docs[i].email);
          var checkmail = data.doc[i].email;
          // if(data.docs.email == search.email )
          if(checkmail == search.email){
            this.toastr.success("Data verified");
          
          }
        }  
    })
  }

    emailvalidation(event:any){
      console.log("event started");
      console.log(event.target.value);
     this.AppService.Client(event.target.value).subscribe((data:any)=>{
       console.log("Email verification data from database",data);
       if(data.docs[0].email == event.target.value) {
          this.toastr.success("Email Already exit enter a vaild email")
       }
     })
   }
  FormSubmit(FormValue:NgForm)
  {
    console.log(FormValue);
    this.AppService.signupform(FormValue).subscribe((res)=>{
      console.log("Form value add sucessfully");
      console.log("getted response",res);
      if (res)
      {
        this.toastr.success("Signup Successfull");
        this.router.navigate([''])
      }
    })
  }
}
