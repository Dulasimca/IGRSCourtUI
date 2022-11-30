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
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { GovernmentRespondentComponent } from './forms/highcourt-cases/government-respondent/government-respondent.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeboundJudgementsDirectionsComponent } from './forms/highcourt-cases/timebound-judgements-directions/timebound-judgements-directions.component';
import { WritAppealsComponent } from './forms/highcourt-cases/writ-appeals/writ-appeals.component';
import { IgrRespondentComponent } from './forms/highcourt-cases/igr-respondent/igr-respondent.component';
import { OthersRespondentComponent } from './forms/highcourt-cases/others-respondent/others-respondent.component';
import { PendingEnquiryComponent } from './forms/highcourt-cases/pending-enquiry/pending-enquiry.component';
import { SupremecourtCaseDetailsComponent } from './forms/highcourt-cases/supremecourt-case-details/supremecourt-case-details.component';
import { LawofficersOpinionRegisterComponent } from './forms/highcourt-cases/lawofficers-opinion-register/lawofficers-opinion-register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ZoneMasterComponent } from './masters/zonemaster/zonemaster.component';
import { DistrictMasterComponent } from './masters/districtmaster/districtmaster.component';
import { CourtTypeComponent } from './masters/courttype/courttype.component';
import { CaseTypeComponent } from './masters/casetype/casetype.component';
import { SroComponent } from './masters/sro/sro.component';

@NgModule({
  declarations: [
    AppComponent,
    GovernmentRespondentComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    TimeboundJudgementsDirectionsComponent,
    WritAppealsComponent,
    PendingEnquiryComponent,
    SupremecourtCaseDetailsComponent,
    IgrRespondentComponent,
    OthersRespondentComponent,
    PendingEnquiryComponent,
    LawofficersOpinionRegisterComponent,
    LoginComponent,
    ZoneMasterComponent,
    DistrictMasterComponent,
    CourtTypeComponent,
    CaseTypeComponent,
    SroComponent,
  
    
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
    CalendarModule,
    SidebarModule,
    PanelMenuModule,
    FlexLayoutModule,
    TableModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
