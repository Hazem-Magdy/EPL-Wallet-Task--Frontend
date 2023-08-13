import { Component } from '@angular/core';
import { TransferService } from '../services/Transfer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  model: any = {};
  transferForm!: FormGroup;

  constructor(private transferService: TransferService,private fb: FormBuilder,private snackBar: MatSnackBar) { 
    this.transferForm = this.fb.group({
      senderMobile: ['', [Validators.required, Validators.pattern(/^(\+20|0)?1\d{9}$/)]],
      receiverMobile: ['', [Validators.required, Validators.pattern(/^(\+20|0)?1\d{9}$/)]],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  transfer(): void {
    console.log(this.transferForm.value)
    this.transferService.transfer(this.transferForm.value).subscribe(()=>{
      this.snackBar.open('Transfer done successfully.', 'Close', {
        duration: 3000,
      });
    },(error)=>{
      this.snackBar.open(`Transfer failed. ${error.message}`, 'Close', {
        duration: 3000,
      });
    }
      
    );
  }
}
