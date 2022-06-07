
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  clientFormGroup: FormGroup
 
    AppService: any;
    static find: any;
  array:any = [];
  constructor(private fb: FormBuilder,private api:AppServiceService,private router:Router,private toastr:ToastrService) {
    this.clientFormGroup = this.fb.group({
      email: ['',[Validators.required,Validators.minLength(3)]],
      pass: ['',[Validators.required]],
    });
   }
  ngOnInit(): void {
    console.log("client-login");
  }
  get email() {
    return this.clientFormGroup.get('email')!;
  }
  get pass() {
    return this.clientFormGroup.get('pass');
  }

  find(search:any)
{ 
  this.api.Client(search.email).subscribe((data)=>{
      console.log("data returned from server",data);
      let totlen = data.docs.length
     console.log(data.docs[0].email);
      this.array.push(data.docs);
      for(let i=0; i<=totlen; i++)
      {
        this.array.push(data.docs[0]);
        console.log("fetch from database",this.array);
            if(this.array[i].email == search.email  ){
              localStorage.setItem('userData', JSON.stringify(data.docs[0]))
              this.toastr.success("login successfull");
              this.router.navigate(['restaurant-types']);
        }
      }   
  })
}


  FormSubmit(FormValue:NgForm)
  {
    console.log(FormValue);
    this.AppService.Client(FormValue).subscribe((res: any)=>{
      console.log("Form value add sucessfully");
      console.log("getted response",res);
    })
  }
}



