import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router:Router) {
  }
  click(){
    this.router.navigate(['signup']);
    }
    change(){
      this.router.navigate(['client-login']);
      }
      rest(){
        this.router.navigate(['adminlogin']);
        }

  ngOnInit(): void {
    console.log("home");
  }

}
