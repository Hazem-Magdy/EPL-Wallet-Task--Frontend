import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {

private baseUrl = `${environment.apiUrl}/Account`;
  token: any;
  decodedToken: any;
  helper = new JwtHelperService()
  constructor(private http: HttpClient) { }

  register(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, model);
  }

  login(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, model);
  }

  isLoggedIn() {
    return sessionStorage.getItem('token') != null;
  }

  getToken() {
    return this.token = sessionStorage.getItem('token') != null ? sessionStorage.getItem('token')?.toString() : '';
  }
  getRole() {
    this.token = sessionStorage.getItem('token') != null ? sessionStorage.getItem('token')?.toString() : '';
    this.decodedToken = this.helper.decodeToken(this.token);
    return this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

}
