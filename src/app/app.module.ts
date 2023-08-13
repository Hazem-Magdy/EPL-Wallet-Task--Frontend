import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from '../app/services/Auth.service';
import { TransferService } from '../app/services/Transfer.service';
import { ReportService } from '../app/services/Report.service'
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TransferComponent } from './transfer/transfer.component';
import { MaterialModule } from '../app/shared/material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from '../app/token-interceptor/token-interceptor.service';
import { ReportComponent } from './report/report.component'

@NgModule({
   declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TransferComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[MaterialModule],
  providers: [AuthService,TransferService,ReportService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
