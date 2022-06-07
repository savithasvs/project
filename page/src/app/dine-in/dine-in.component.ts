import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent implements OnInit {

  constructor(private router:Router) { }
  click(){
    this.router.navigate(['restaurant-booking']);
    }


  ngOnInit(): void {
    console.log("dine-in");
  }

}
