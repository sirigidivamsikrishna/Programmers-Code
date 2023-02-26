import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { ServiceService } from './service/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { WriteCodeComponent } from './write-code/write-code.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent, WriteCodeComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
