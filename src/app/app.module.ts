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
<<<<<<< HEAD
import {CalendarModule} from 'primeng/calendar';

=======
>>>>>>> d8be53987de3b5f7052a6fa50cadf24875006937
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { GovernmentRespondentComponent } from './forms/highcourt-cases/government-respondent/government-respondent.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { TimeboundJudgementsDirectionsComponent } from './forms/highcourt-cases/timebound-judgements-directions/timebound-judgements-directions.component';
=======
import { WritAppealsComponent } from './forms/highcourt-cases/writ-appeals/writ-appeals.component';
import { IgrRespondentComponent } from './forms/highcourt-cases/igr-respondent/igr-respondent.component';
import { OthersRespondentComponent } from './forms/highcourt-cases/others-respondent/others-respondent.component';
import { PendingEnquiryComponent } from './forms/highcourt-cases/pending-enquiry/pending-enquiry.component';
import { SupremecourtCaseDetailsComponent } from './forms/highcourt-cases/supremecourt-case-details/supremecourt-case-details.component';
import { LawofficersOpinionRegisterComponent } from './forms/highcourt-cases/lawofficers-opinion-register/lawofficers-opinion-register.component';
>>>>>>> d8be53987de3b5f7052a6fa50cadf24875006937

@NgModule({
  declarations: [
    AppComponent,
    GovernmentRespondentComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
<<<<<<< HEAD
    TimeboundJudgementsDirectionsComponent,
   
=======
    WritAppealsComponent,
    PendingEnquiryComponent,
    SupremecourtCaseDetailsComponent,
    IgrRespondentComponent,
    OthersRespondentComponent,
    PendingEnquiryComponent,
    LawofficersOpinionRegisterComponent,
  
    
>>>>>>> d8be53987de3b5f7052a6fa50cadf24875006937
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
    RadioButtonModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
