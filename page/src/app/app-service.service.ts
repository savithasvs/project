import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  restaurantbookingFormGroup() {
    throw new Error('Method not implemented.');
  }


  constructor(private http : HttpClient) { }

  Client(clientobject:any)
{
  return this.http.get<any>('http://localhost:8000/client/'+clientobject);
}
signForm(signupobject:any)
{
  return this.http.post<any>('http://localhost:8000/signUp',signupobject);
}
getdata(id: any) {
  return this.http.get(`http://localhost:8000/get_all_query/${id}`);
}
resturantBook(resturantbookobject: any)
 {
  return this.http.post<any>('http://localhost:8000/resturantBook', resturantbookobject );
}
getadmin()
{
  return this.http.get<any>('http://localhost:8000/getadmin');
}
getadminId(id:any)
{
  return this.http.get<any>(`http://localhost:8000/getAdminId/${id}`);
}
productbook(productbookobject: any)
 {
  return this.http.post<any>('http://localhost:8000/productbook', productbookobject );
}

getValue(id: any) {
  return this.http.get(`http://localhost:8000/getQuery/${id}`);
}
roomNum(roomobject:any)
{
  return this.http.get<any>('http://localhost:8000/roomNumber/'+roomobject);
}
remove(id: any, id1: any) {
   return this.http.delete(`http://localhost:8000/delete/${id}/${id1}`);
   }
  
}
