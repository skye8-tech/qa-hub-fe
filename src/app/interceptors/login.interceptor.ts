import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private localstorage:LocalstorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localstorage.get("accesstoken")
    if (token != null) {
      request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
      });
  }

    return next.handle(request);
  }
}
