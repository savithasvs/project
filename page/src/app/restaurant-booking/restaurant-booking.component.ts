import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurant-booking',
  templateUrl: './restaurant-booking.component.html',
  styleUrls: ['./restaurant-booking.component.css'],
})
export class RestaurantBookingComponent {
  [x: string]: any;
  websiteList: any = [
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
  ];
  confirm: any = [];
  restaurantbookingFormGroup: FormGroup;
  empRecord: any = {
    Name: '',
    aadhar: '',
    email: '',
    aadress: '',
    MobileNumber: '',
    GuestCount: '',
    roomtype: '',
    roomnumber: '',
    Price: '',
    type: '',
  };
  data: any;
  logid: any;
  userData: any;
  userId: any;
  id: any;
  useremail: any;
  static find: any;
  array: any = [];
  findroom: any = [];
  assignroom: any = [];
  constructor(
    private fb: FormBuilder,
    private api: AppServiceService,
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.restaurantbookingFormGroup = this.fb.group({
      Name: [
        '',
        Validators.required,
        [Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
      ],
      aadhar: [
        '',
        Validators.required,
        [Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$')],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]*@gmail.com')],
      ],
      address: ['', Validators.required],
      MobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'),
        ],
      ],
      roomtype: ['', Validators.required],
      roomnumber: ['', Validators.required],
      GuestCount: ['', Validators.required],
      Price: ['', Validators.required],
    });
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userId = this.userData;
    this.id = this.userId._id;
    this.useremail = this.userId.email;
    console.log(this.useremail);
    console.log('id', this.id);
    console.log(this.userData, 'UserData');
    console.log('Parent Id', this.id);
    setTimeout(() => {
      this.restaurantbookingFormGroup.controls['email'].setValue(
        this.useremail
      );
    }, 300);

    this.emailId = this.userData;
    this.id = this.emailId._id;
    console.log('id', this.id);
  }

  get Name() {
    return this.restaurantbookingFormGroup.get('Name')!;
  }
  get aadhar() {
    return this.restaurantbookingFormGroup.get('aadhar')!;
  }
  get email() {
    return this.restaurantbookingFormGroup.get('email')!;
  }
  get address() {
    return this.restaurantbookingFormGroup.get('address')!;
  }
  get MobileNumber() {
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
      fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      aadhar: [
        '',
        [
          Validators.required,
          Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$'),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]*@gmail.com')],
      ],
      address: ['', Validators.required],
      MobileNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      roomtype: ['', Validators.required],
      roomnumber: ['', Validators.required],
      GuestCount: ['', Validators.required],
      Price: ['', Validators.required],
      type: ['rest'],
      user: [this.id],
    });
  }

  formSubmit(FormValue: any) {
    console.log(FormValue);
    this.api.resturantBook(FormValue).subscribe(
      (res: any) => {
        console.log('data get reloaded');
        console.log('Form value add sucessfully');
        console.log('get data', this.data);
        console.log('getted response', res.object);

        if (res && res['id']) {
          localStorage.setItem('bookstatus', JSON.stringify(FormValue));
          this.toastr.success('Booking Successfull');
          this.router.navigate(['Booking']);
        }
      },
      (err) => {
        this.toastr.error('Please Register your form');
        console.log(err);
      }
    );
  }
  getValue(event: any) {
    console.log('value change', event.target.value);
    let arr = event.target.value;
    this.api
      .getValue('d593a92581e1728c108945e6051d70ae')
      .subscribe((res: any) => {
        console.log('value getted', res);
        let i = 0;
        for (let value in res) {
          if (arr == value) {
            this.restaurantbookingFormGroup.controls['Price'].setValue(
              res[value]
            );
            console.log(res[value]);
          }
        }
      });
  }

  roomvalue(event: any) {
    console.log('value change', event.target.value);
    this.api.roomNum(event.target.value).subscribe((res: any) => {
      console.log('value getted', res);
      this.findroom.push(res.docs);
      console.log(this.findroom);
      if (res.docs.length > 0) {
        this.toastr.error('Not able to choose this room already bookd');
      }
    });
  }
}
