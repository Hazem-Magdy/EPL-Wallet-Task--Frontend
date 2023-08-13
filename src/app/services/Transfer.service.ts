import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable()
export class TransferService {
  private baseUrl = `${environment.apiUrl}/Wallet`;

  constructor(private http: HttpClient) {}

  transfer(model: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transfer`, model);
    
  }
}
