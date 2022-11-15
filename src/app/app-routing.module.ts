import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovernmentRespondentComponent } from './forms/highcourt-cases/government-respondent/government-respondent.component';
import { PendingEnquiryComponent } from './forms/highcourt-cases/pending-enquiry/pending-enquiry.component';

const routes: Routes = [
  { path: 'government-respondent-hight-court-cases', component: GovernmentRespondentComponent },
  { path: 'pending-enquiry-hight-court-cases', component: PendingEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
