import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  restaurantbookingFormGroup(FormValue: NgForm) {
    throw new Error('Method not implemented.');
  }


  constructor(private http : HttpClient) { }

  Client(clientobject:any)
{
  return this.http.get<any>('http://localhost:8000/client/'+clientobject);
}
signupform(signupobject:any)
{
  return this.http.post<any>('http://localhost:8000/sign-up',signupobject);
}
getdata(id: any) {
  return this.http.get(`http://localhost:8000/get_all_query/${id}`);
}
resturantbook(resturantbookobject: any)
 {
  return this.http.post<any>('http://localhost:8000/resturantbook', resturantbookobject );
}
getadmin()
{
  return this.http.get<any>('http://localhost:8000/getadmin');
}
getadminId(id:any)
{
  return this.http.get<any>(`http://localhost:8000/getadminId/${id}`);
}
productbook(productbookobject: any)
 {
  return this.http.post<any>('http://localhost:8000/productbook', productbookobject );
}
userbook(objectu: any)
 {
  return this.http.post<any>('http://localhost:8000/userbook', objectu );
}
getvalue(id: any) {
  return this.http.get(`http://localhost:8000/get_query/${id}`);
}
Roomnum(roomobject:any)
{
  return this.http.get<any>('http://localhost:8000/roomnumber/'+roomobject);
}
remove(id: any, id1: any) {
   return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
   }
  
}
