import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorServiceService {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      
    request = request.clone({
    setHeaders: {
    Authorization: `Bearer ${token}`
    }
    });
    }
    return next.handle(request);
    }
    
  }