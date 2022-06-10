import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css'],
})
export class CafeComponent implements OnInit {
  ngOnInit(): void {
    console.log('cafe');
  }
}
