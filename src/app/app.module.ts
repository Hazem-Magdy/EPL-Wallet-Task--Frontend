import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from '../app/services/Auth.service';
import { TransferService } from '../app/services/Transfer.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
   declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
