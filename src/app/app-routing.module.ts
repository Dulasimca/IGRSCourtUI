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
import { ZonemasterComponent } from './masters/zonemaster/zonemaster.component';
import { DistrictmasterComponent } from './masters/districtmaster/districtmaster.component';
import { CourttypeComponent } from './masters/courttype/courttype.component';
import { CasetypeComponent } from './masters/casetype/casetype.component';
import { SroComponent } from './masters/sro/sro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'government-respondent-hight-court-cases', component: GovernmentRespondentComponent, canActivate: [AuthGuard] },
  { path: 'pending-enquiry-hight-court-cases', component: PendingEnquiryComponent, canActivate: [AuthGuard]},
  { path: 'supreme-court-case-details', component: SupremecourtCaseDetailsComponent, canActivate: [AuthGuard]},
  { path: 'others-respondent', component: OthersRespondentComponent, canActivate: [AuthGuard]},
  { path: 'igr-respondent',component: IgrRespondentComponent, canActivate: [AuthGuard]},
  { path: 'lawofficers-opinion-register', component: LawofficersOpinionRegisterComponent, canActivate: [AuthGuard]},
  { path: 'writ-appeals-hight-court-cases',component: WritAppealsComponent, canActivate: [AuthGuard]},
  { path: 'time-bound', component: TimeboundJudgementsDirectionsComponent, canActivate: [AuthGuard]},
  {path: 'zonemaster', component: ZonemasterComponent},
  {path: 'districtmaster', component: DistrictmasterComponent},
  {path: 'courttype',component:CourttypeComponent},
  {path: 'Sro',component:SroComponent},
  {path:'casetype',component:CasetypeComponent},
  {path: 'Sro',component:SroComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
