import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
@Injectable()
export class AuthService {

private baseUrl = `${environment.apiUrl}/Account`;

  constructor(private http: HttpClient) { }

  register(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, model);
  }

  login(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, model);
  }

}
