import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cloud-kitchen',
  templateUrl: './cloud-kitchen.component.html',
  styleUrls: ['./cloud-kitchen.component.css']
})
export class CloudKitchenComponent implements OnInit {

  constructor(private router:Router) { }

  click(){
    this.router.navigate(['restaurant-booking']);
    }
  ngOnInit(): void {
  }

}
