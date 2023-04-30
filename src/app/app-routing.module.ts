import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'manifesto', component: ManifestoComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: DropdownComponent },
  { path: 'budget', component: BudgetComponent },
  { path: 'complaints', component: ComplaintsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
