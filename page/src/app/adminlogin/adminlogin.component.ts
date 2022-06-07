
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent implements OnInit {
  successMessage: string = '';
  adminform!: FormGroup;

  constructor(private formbuilder: FormBuilder,private api: AppServiceService,private router: Router) {
    this.adminform = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
   
  }

  alogin(FormValue: any) {
    console.log(FormValue.username);
    this.api.getdata(FormValue.username).subscribe((data: any) => {
      console.log(data);
      if (
        data.id == FormValue.username &&
        data.password == FormValue.password
      ) {
        alert('Verified');
        this.router.navigate(['database-display']);
      } else {
        alert('login');
        this.router.navigate(['dashboardfront']);
      }
    });
    console.log(FormValue);
  }

  get username() {
    return this.adminform.get('username');
  }
  get password() {
    return this.adminform.get('password');
  }
}
