import { Component } from '@angular/core';
import { AuthService } from '../services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model: any = {};
  registerForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/),
        Validators.minLength(6)
      ]],
      role: ['', Validators.required]
    });
  }

  register(): void {
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(() => {
        this.snackBar.open('Register to system successfully.', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['login']);
      });
    } else {
    }
  }
}
