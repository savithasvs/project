import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurant-booking',
  templateUrl: './restaurant-booking.component.html',
  styleUrls: ['./restaurant-booking.component.css']
})
export class RestaurantBookingComponent  {
  [x: string]: any;
  websiteList: any = ['25','26','27','28','29','30','31','32','33','34','35']
    
    restaurantbookingFormGroup: FormGroup; 
    empRecord: any={
      Name: '',
      aadhar: '',
      email: '',
      aadress: '',
      MobileNumber: '',
      GuestCount: '',
      roomtype:'',
      roomnumber: '',
      Price:'',
      type:'',
  

    }
  data: any;
  logid:any;
  userData: any;
  userId: any;
  id: any;
  useremail:any;
  static find: any;
  array:any = [];
  findroom:any = [];
  assignroom:any = [];
  constructor(private fb: FormBuilder,private api:AppServiceService,private router:Router,private http:HttpClient,private toastr:ToastrService) {

    this.restaurantbookingFormGroup = this.fb.group({
      Name: ['', Validators.required,[Validators.minLength(3)]],
      aadhar: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      address: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      roomtype: ['', Validators.required],
      roomnumber: ['', Validators.required],
      GuestCount: ['', Validators.required],
      Price: ['', Validators.required],
      
      });
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}')
    this.userId = this.userData;
    this.id = this.userId._id;
    this.useremail = this.userId.email;
    console.log(this.useremail);
 console.log("id",this.id);
    console.log(this.userData,"UserData")
    console.log("Parent Id", this.id)
    setTimeout(()=>{
 this.restaurantbookingFormGroup.controls['email'].setValue(this.useremail);
},300);

 this.emailId = this.userData;
    this.id = this.emailId._id;
    console.log("id",this.id);

  }

  get Name() {
    return this.restaurantbookingFormGroup.get('Name')!;
  }
  get  aadhar(){
    return this.restaurantbookingFormGroup.get('aadhar')!;
  }
  get email() {
    return this.restaurantbookingFormGroup.get('email')!;
  }
  get address(){
    return this.restaurantbookingFormGroup.get('address')!;
  }
  get MobileNumber(){
    return this.restaurantbookingFormGroup.get('MobileNumber')!;
  }
  get GuestCount() {
    return this.restaurantbookingFormGroup.get('GuestCount')!;
  }
  get roomtype() {
    return this.restaurantbookingFormGroup.get('roomtype')!;
  }
  get roomnumber() {
    return this.restaurantbookingFormGroup.get('website')!;
  }
  get Price() {
    return this.restaurantbookingFormGroup.get('Price')!;
  }
  ngOnInit(): void {
    this.restaurantbookingFormGroup = this.fb.group({
      fname: ['', Validators.required],
      aadhar: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      address: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      roomtype: ['', Validators.required],
      roomnumber: ['', Validators.required],
      GuestCount: ['', Validators.required],
      Price: ['', Validators.required],
      type: ['rest'],
      user: [this.id]
      });

         
  }
 

FormSubmit(FormValue:NgForm)
{
  console.log(FormValue);
  this.api.resturantbook(FormValue).subscribe((res:any)=>{
    // this.restaurantbookingFormGroup.reset()
      console.log("data get reloaded");
      // window.location.reload();
      console.log("Form value add sucessfully");
      console.log("getted response",res);
      if(res['name'] === 'Error'){  
      this.toastr.error(res['message']) 
      }
    },err=>{
      this.toastr.error("Please Register your form");
      console.log(err)
    })

  }
  getvalue(event:any) {
  console.log("value change",event.target.value)
  var arr = event.target.value;
  this.api.getvalue("3d3a0153d795fa6b6ace65b522bc90ad").subscribe((res:any)=>{
    console.log("value getted",res)
    var i=0;
    for(var value in res){
  if(arr == value){
    this.restaurantbookingFormGroup.controls['Price'].setValue(res[value]);
        console.log(res[value])
      }
    }
  
  })
}

roomvalue(event:any) {
  console.log("value change",event.target.value)
  this.api.Roomnum(event.target.value).subscribe((res:any)=>{
    console.log("value getted",res)
    this.findroom.push(res.docs);
    console.log(this.findroom);
    if(res.docs.length >0 ){
      alert("Not able to choose this room already bookd");
    }
  
          
  })
}


}

