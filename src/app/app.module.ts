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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';

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
import { ReportsComponent } from './reports/reports.component';
import { MasterService } from './services/master.service';
import { RestapiService } from './services/restapi.service';
import { DatePipe } from '@angular/common';
import { CaNotFiledReportComponent } from './reports/ca-not-filed-report/ca-not-filed-report.component';
import { DroSdcReportComponent } from './reports/dro-sdc-report/dro-sdc-report.component';
import { CasestatusComponent } from './masters/casestatus/casestatus.component';
import { MenumasterComponent } from './masters/menumaster/menumaster.component';
import { UsermasterComponent } from './masters/usermaster/usermaster.component';
import { DIGReportComponent } from './reports/dig-report/dig-report.component';
import { AeeReportComponent } from './reports/aee-report/aee-report.component';
import { SupremeCourtCasesReportComponent } from './reports/supreme-court-cases-report/supreme-court-cases-report.component';
import { ScCaNotFiledComponent } from './reports/sc-ca-not-filed/sc-ca-not-filed.component';
import { ContemptCasesHcReportComponent } from './reports/contempt-cases-hc-report/contempt-cases-hc-report.component';
import { DateConverter } from './helper/date-converter';
import { RolemasterComponent } from './masters/rolemaster/rolemaster.component';
import { SlpMasterComponent } from './masters/slp-master/slp-master.component';
import { JudgementMasterComponent } from './masters/judgement-master/judgement-master.component';
import { RespondantMasterComponent } from './masters/respondant-master/respondant-master.component';
import { PaginatorModule } from 'primeng/paginator';


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
    ReportsComponent,
    CaNotFiledReportComponent,
    DroSdcReportComponent,
    CasestatusComponent,
    MenumasterComponent,
    UsermasterComponent,
    DIGReportComponent,
    AeeReportComponent,
    SupremeCourtCasesReportComponent,
    ScCaNotFiledComponent,
    ContemptCasesHcReportComponent,
    RolemasterComponent,
    SlpMasterComponent,
    JudgementMasterComponent,
    RespondantMasterComponent,
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
    TableModule,
    MessagesModule,
    MessageModule,
    PaginatorModule,
    TooltipModule
  ],
  providers: [AuthService, AuthGuard, MasterService, RestapiService, DatePipe, DateConverter],
  bootstrap: [AppComponent]
})
export class AppModule { }
