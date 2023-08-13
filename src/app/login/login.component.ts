import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginForm!: FormGroup;
  token: any;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^(\+20|0)?1\d{9}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
      ]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((response) => {
        if (response.data.hasOwnProperty('token')) {
          this.token = response.data.token;
          sessionStorage.setItem('token', this.token);
          this.snackBar.open('Login to system successfully.', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['transfer']);
        } else {
          this.snackBar.open('Invalid credentials.', 'Close', {
            duration: 3000,
          });
        }
      });
    } else {
      this.snackBar.open('Please enter valid data.', 'Close', {
        duration: 3000,
      });
    }
  }
}
