import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginRequest, LoginResponse } from '../model/login.model';
import { Observable, Subject } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.apiUrl +"/api/auth"

  constructor(private http:HttpClient, private _localstorage: LocalstorageService) { }

  login(request:LoginRequest):Observable<LoginResponse>{
    this._localstorage.clear()
    const loginResponseSubject: Subject<LoginResponse> = new Subject();
    
    this.http.post<LoginResponse>(this.url +'/login', request).subscribe(res => {
      loginResponseSubject.next(res);
      this._localstorage.set('access_token', res.accessToken);
    });

   return loginResponseSubject.asObservable();
  }
}
