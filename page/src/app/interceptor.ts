import { Injectable, Injector } from '@angular/core';
import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private toastr: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted request' + request.url);
        return next.handle(request)
        .pipe(
            tap(evt => {
                const data:any = evt;
                console.log(data.body);
                if(data && data['body'] && data['body']['name'] === "Error"){
                this.toastr.error(data.body['reason'])

                }  else if(data && data['body']) {
                    // this.toastr.success("Details Entered Successfully")

                }

                // var evt = data.body.firstName
            // }, err => {
            //     console.log(err)
            //     // alert(err.error.reason)
            //     this.toastr.error(err.error.reason);
            },err => {
                console.log(err)
                if(err.error.reason) {
                    this.toastr.error(err.error.reason)
                }
                else if(err.error.message) {
                      this.toastr.error(err.error.error.reason);
                }
                else {
                    this.toastr.error(err.error.message);
                }
             })
        )
    }


}