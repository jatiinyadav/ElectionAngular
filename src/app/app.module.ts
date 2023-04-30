import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Chart } from 'chart.js';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'

import {MatListModule} from '@angular/material/list'

import { registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
Chart.register(...registerables);
Chart.register(ChartDataLabels)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManifestoComponent,
    DashboardComponent,
    DropdownComponent,
    TeamComponent,
    TeamsListComponent,
    BudgetComponent,
    ComplaintsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
