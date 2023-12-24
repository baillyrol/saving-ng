import {Component, computed, inject, Signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SavingFacade} from "./saving.facade";
import {MatCardModule} from "@angular/material/card";
import {CashFlowDetails} from "./model/saving.model";
import {MatTableModule} from "@angular/material/table";
import {BarChartComponent} from "./components/bar-chart/bar-chart.component";
import {NgChartsModule} from "ng2-charts";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {LineChartComponent} from "./components/line-chart/line-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, MatTableModule, NgChartsModule, BarChartComponent, MatToolbarModule, MatExpansionModule, LineChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {ngSkipHydration: 'true'},

})
export class AppComponent {

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
