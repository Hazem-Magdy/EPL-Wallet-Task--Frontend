import { Component } from '@angular/core';
import { AuthService } from './services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wallet-Task';
  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  getRole(): string {
    return this.authService.getRole();
  }

}
