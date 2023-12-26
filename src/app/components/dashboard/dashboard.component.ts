import {Component, computed, inject, Signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {BarChartComponent} from "../bar-chart/bar-chart.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {LineChartComponent} from "../line-chart/line-chart.component";
import {SavingFacade} from "../../saving.facade";
import {CashFlowDetails} from "../../model/saving.model";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, BarChartComponent, MatToolbarModule, MatExpansionModule, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class DashboardComponent {

  protected savingFacade = inject(SavingFacade);
  protected accounts = this.savingFacade.getAccounts();

  protected totalAccount: Signal<number | undefined> = computed(() => {
    const accounts = this.accounts();
    return accounts?.map(account => account.comingBalance)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  });

  protected cashFlows = this.savingFacade.getCashFlows(13);

  protected cashFlowDetails: Signal<CashFlowDetails |undefined> = this.savingFacade.getCashFlowDetails();
}
