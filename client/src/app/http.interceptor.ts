import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenAuthorization;

    tokenAuthorization = request.clone({

      setHeaders: {
        Authorization: 'Bearer ' + (localStorage.getItem('token') || 'falseToken')
      }
    });
    return next.handle(tokenAuthorization);
  }
}
