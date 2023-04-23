import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'manifesto', component: ManifestoComponent},
  {path: 'team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
