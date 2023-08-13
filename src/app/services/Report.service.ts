import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Injectable()
export class ReportService {
  private baseUrl = `${environment.apiUrl}/admin`;
  constructor(private http: HttpClient) {}

  getBalanceReport() {
    return this.http.get(`${this.baseUrl}/balance-report`);
  }
}
