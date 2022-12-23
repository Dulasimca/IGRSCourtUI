import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovernmentRespondentComponent } from './forms/highcourt-cases/government-respondent/government-respondent.component';
import { TimeboundJudgementsDirectionsComponent } from './forms/highcourt-cases/timebound-judgements-directions/timebound-judgements-directions.component';
import { WritAppealsComponent } from './forms/highcourt-cases/writ-appeals/writ-appeals.component';
import { IgrRespondentComponent } from './forms/highcourt-cases/igr-respondent/igr-respondent.component';
import { LawofficersOpinionRegisterComponent } from './forms/highcourt-cases/lawofficers-opinion-register/lawofficers-opinion-register.component';
import { OthersRespondentComponent } from './forms/highcourt-cases/others-respondent/others-respondent.component';
import { PendingEnquiryComponent } from './forms/highcourt-cases/pending-enquiry/pending-enquiry.component';
import { SupremecourtCaseDetailsComponent } from './forms/highcourt-cases/supremecourt-case-details/supremecourt-case-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ZoneMasterComponent } from './masters/zonemaster/zonemaster.component';
import { DistrictMasterComponent } from './masters/districtmaster/districtmaster.component';
import { CourtTypeComponent } from './masters/courttype/courttype.component';
import { CaseTypeComponent } from './masters/casetype/casetype.component';
import { SroComponent } from './masters/sro/sro.component';
import { ReportsComponent } from './reports/reports.component';
import { CaNotFiledReportComponent } from './reports/ca-not-filed-report/ca-not-filed-report.component';
import { DroSdcReportComponent } from './reports/dro-sdc-report/dro-sdc-report.component';
import { DIGReportComponent } from './reports/dig-report/dig-report.component';
import { AeeReportComponent } from './reports/aee-report/aee-report.component';
import { SupremeCourtCasesReportComponent } from './reports/supreme-court-cases-report/supreme-court-cases-report.component';
import { CasestatusComponent } from './masters/casestatus/casestatus.component';
import { UsermasterComponent } from './masters/usermaster/usermaster.component';
import { ScCaNotFiledComponent } from './reports/sc-ca-not-filed/sc-ca-not-filed.component';
import { ContemptCasesHcReportComponent } from './reports/contempt-cases-hc-report/contempt-cases-hc-report.component';
import { RolemasterComponent } from './masters/rolemaster/rolemaster.component';
import { SlpMasterComponent } from './masters/slp-master/slp-master.component';
import { JudgementMasterComponent } from './masters/judgement-master/judgement-master.component';
import { RespondantMasterComponent } from './masters/respondant-master/respondant-master.component';
import { MenumasterComponent } from './masters/menumaster/menumaster.component';
import { ChangePasswordComponent } from './masters/change-password/change-password.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { WritappealstatusMasterComponent } from './masters/writappealstatus-master/writappealstatus-master.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainDashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'government-respondent-hight-court-cases', component: GovernmentRespondentComponent, canActivate: [AuthGuard] },
  { path: 'pending-enquiry-hight-court-cases', component: PendingEnquiryComponent, canActivate: [AuthGuard] },
  { path: 'supreme-court-case-details', component: SupremecourtCaseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'others-respondent', component: OthersRespondentComponent, canActivate: [AuthGuard] },
  { path: 'igr-respondent', component: IgrRespondentComponent, canActivate: [AuthGuard] },
  { path: 'lawofficers-opinion-register', component: LawofficersOpinionRegisterComponent, canActivate: [AuthGuard] },
  { path: 'writ-appeals-hight-court-cases', component: WritAppealsComponent, canActivate: [AuthGuard] },
  { path: 'time-bound', component: TimeboundJudgementsDirectionsComponent, canActivate: [AuthGuard] },
  { path: 'zone-master', component: ZoneMasterComponent, canActivate: [AuthGuard] },
  { path: 'district-master', component: DistrictMasterComponent, canActivate: [AuthGuard] },
  { path: 'court-type', component: CourtTypeComponent, canActivate: [AuthGuard] },
  { path: 'sro', component: SroComponent, canActivate: [AuthGuard] },
  { path: 'case-type', component: CaseTypeComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'aee-report', component: AeeReportComponent },
  { path: 'supreme-court-cases-report', component: SupremeCourtCasesReportComponent },
  { path: 'ca-not-filed-report', component: CaNotFiledReportComponent },
  { path: 'dro-sdc-report', component: DroSdcReportComponent },
  { path: 'dig-report', component: DIGReportComponent },
  { path: 'casestatus', component: CasestatusComponent },
  { path: 'usermaster', component: UsermasterComponent, canActivate: [AuthGuard] },
  { path: 'sc-ca-not-filed', component: ScCaNotFiledComponent },
  { path: 'contempt-cases-hc-report', component: ContemptCasesHcReportComponent },
  { path: 'judgement-master', component: JudgementMasterComponent },
  {path: 'menumaster',component:MenumasterComponent},
  {path:'rolemaster',component:RolemasterComponent},
  {path:'slp-master',component:SlpMasterComponent},
  {path:'respondant-master',component:RespondantMasterComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'writappealstatus-master',component: WritappealstatusMasterComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
