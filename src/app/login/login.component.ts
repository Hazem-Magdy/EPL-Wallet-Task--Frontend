import { Component } from '@angular/core';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.model).subscribe(
      (response) => {
        console.log('Login successful', response);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
