import {Routes} from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CashflowComponent} from "./components/cashflow/cashflow.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'cashflow',
    component: CashflowComponent
  }
];
