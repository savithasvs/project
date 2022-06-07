import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-types',
  templateUrl: './restaurant-types.component.html',
  styleUrls: ['./restaurant-types.component.css']
})
export class RestaurantTypesComponent implements OnInit {


  ngOnInit(): void {
    console.log("rest-type")
  }

}
