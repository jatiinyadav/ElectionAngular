import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'manifesto', component: ManifestoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
