import { Component } from '@angular/core';
import { TransferService } from '../services/Transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  model: any = {};

  constructor(private transferService: TransferService) { }

  transfer(): void {
    this.transferService.transfer(this.model).subscribe(
      (response) => {
        console.log('Transfer successful', response);
      },
      (error) => {
        console.error('Transfer failed', error);
      }
    );
  }
}
