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

const routes: Routes = [
  { path: 'government-respondent-hight-court-cases', component: GovernmentRespondentComponent },
  { path: 'pending-enquiry-hight-court-cases', component: PendingEnquiryComponent},
  { path: 'supreme-court-case-details', component: SupremecourtCaseDetailsComponent},
  { path: 'others-respondent', component:OthersRespondentComponent},
  { path:'igr-respondent',component:IgrRespondentComponent},
  { path: 'lawofficers-opinion-register', component:LawofficersOpinionRegisterComponent},
  { path: 'writ-appeals-hight-court-cases',component:WritAppealsComponent},
  { path: 'time-bound', component: TimeboundJudgementsDirectionsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
