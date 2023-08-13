import { Component } from '@angular/core';
import { ReportService } from '../services/Report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  balanceReport: any;
  constructor(private reportService: ReportService) {}
  getBalanceReport() {
      this.reportService.getBalanceReport().subscribe(
        (report: any) => {
          this.balanceReport = report;
        },
        error => {
          console.error(error);
        }
      );
  }
}
