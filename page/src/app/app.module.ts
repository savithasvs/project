import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { RestaurantTypesComponent } from './restaurant-types/restaurant-types.component';
import { HomeComponent } from './home/home.component';
import { DatabaseDisplayComponent } from './database-display/database-display.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RestaurantBookingComponent } from './restaurant-booking/restaurant-booking.component';
import { BarComponent } from './bar/bar.component';
import { CafeComponent } from './cafe/cafe.component';
import { CloudKitchenComponent } from './cloud-kitchen/cloud-kitchen.component';
import { DineInComponent } from './dine-in/dine-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardfrontComponent } from './dashboardfront/dashboardfront.component';
import {HttpCallInterceptor} from './interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminnavComponent } from './adminnav/adminnav.component';

const routes: Routes = [
  
   {path: 'discovery',component:DiscoveryComponent},
  {path: 'signup',component: SignUpComponent},
  {path: '',component: HomeComponent},
   {path: 'restaurant-types',component: RestaurantTypesComponent},
 {path:'client-login',component:ClientLoginComponent},
 {path:'client-login/:id',component:ClientLoginComponent},
  {path:'database-display',component:DatabaseDisplayComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'restaurant-booking',component:RestaurantBookingComponent},
  {path:'bar',component:BarComponent},
  {path:'database-display',component:DatabaseDisplayComponent},
  {path:'dashboardfront',component:DashboardfrontComponent},
  {path:'cafe',component:CafeComponent},
  {path:'cloud-kitchen',component:CloudKitchenComponent},
  {path:'dine-in',component:DineInComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Booking',component:BookingComponent},
  {path:'logout',component:LogoutComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  

  
   
];
@NgModule({
  declarations: [
    AppComponent,
     ClientLoginComponent,
    MainPageComponent,
    SignUpComponent,
    DiscoveryComponent,
    RestaurantTypesComponent,
    HomeComponent,
    DatabaseDisplayComponent,
    AdminloginComponent,
    RestaurantBookingComponent,
    BarComponent,
    CafeComponent,
    CloudKitchenComponent,
    DineInComponent,
    DashboardComponent,
    DashboardfrontComponent,
    BookingComponent,
    NavheaderComponent,
    LogoutComponent,
    AboutComponent,
    ContactComponent,
    AdminnavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpCallInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
