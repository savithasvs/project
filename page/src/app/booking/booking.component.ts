import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  confirmation:any;
  data:any;
  Email:any;
  RoomNumber:any;
  Roomtype:any;

  ngOnInit(): void {
   this.confirmation = localStorage.getItem('bookstatus');
   this.data = JSON.parse(this.confirmation);

    console.log("bookstatus",this.data.email);
    console.log("bookstatus1",this.data.roomnumber);
    console.log("bookstatus2",this.data.roomtype);

  this.Email = this.data.email;
  this.RoomNumber = this.data.roomnumber;
  this.Roomtype = this.data.roomtype;

  
   
  }


}
