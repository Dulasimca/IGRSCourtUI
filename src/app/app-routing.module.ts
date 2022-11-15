import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovernmentRespondentComponent } from './forms/highcourt-cases/government-respondent/government-respondent.component';

const routes: Routes = [
  { path: 'government-respondent-hight-court-cases', component: GovernmentRespondentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
