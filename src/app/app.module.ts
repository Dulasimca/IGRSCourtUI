import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GovernmentRespondentComponent } from './forms/highcourt-cases/government-respondent/government-respondent.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IgrRespondentComponent } from './forms/highcourt-cases/igr-respondent/igr-respondent.component';
import { OthersRespondentComponent } from './forms/highcourt-cases/others-respondent/others-respondent.component';
import { PendingEnquiryComponent } from './forms/highcourt-cases/pending-enquiry/pending-enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    GovernmentRespondentComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    IgrRespondentComponent,
    OthersRespondentComponent,
    PendingEnquiryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PanelModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
