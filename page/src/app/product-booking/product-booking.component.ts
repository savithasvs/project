import { Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-booking',
  templateUrl: './product-booking.component.html',
  styleUrls: ['./product-booking.component.css']
})
export class ProductBookingComponent  {
  productbookingFormGroup: FormGroup; 
  empRecord: any={
    Name: '',
    roomtype: '',
    roomnumber: '',
    Food:'',
    Price:''
  }

  constructor(private fb: FormBuilder,private api:AppServiceService,private router:Router) { 

    this.productbookingFormGroup = this.fb.group({
      Name: [this.empRecord.Name],
      roomtype: [this.empRecord.roomtype],
      roomnumber:[this.empRecord.roomnumber],
      Food: [this.empRecord.Food],
      Price:[this.empRecord.Price], 
   });
  }

  get Name() {
    return this.productbookingFormGroup.get('Name')!;
  }
  get  roomtype(){
    return this.productbookingFormGroup.get('roomtype')!;
  }
  get roomnumber() {
    return this.productbookingFormGroup.get('email')!;
  }
  get  Food(){
    return this.productbookingFormGroup.get('address')!;
  }
  get Price(){
    return this.productbookingFormGroup.get('MobileNumber')!;
  }
  FormSubmit(Formvalue:any)
  {
    this.api.productbook(Formvalue).subscribe((res:any)=>{
      console.log("Form value add sucessfully");
      console.log("getted response",res);
    })
  }
}






