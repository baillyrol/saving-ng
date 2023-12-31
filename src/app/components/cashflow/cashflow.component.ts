import {AfterViewInit, Component, computed, effect, inject, OnInit, Signal, ViewChild} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {SavingFacade} from "../../saving.facade";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {CashFlowDetails} from "../../model/saving.model";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'app-cashflow',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    NgIf,
    MatTableModule,
    MatSortModule,
    DatePipe
  ],
  templateUrl: './cashflow.component.html',
  styleUrl: './cashflow.component.scss'
})
export class CashflowComponent implements AfterViewInit {

  private savingFacade = inject(SavingFacade);

  protected cashFlows = this.savingFacade.getCashFlows('fc5278fc-7bf5-40da-ba86-ceffb96426dc');

  protected cashFlowDetails: Signal<CashFlowDetails> = this.savingFacade.getCashFlowDetails();

  protected incomeDataSource = new MatTableDataSource();

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    effect(() => {
      const cashFlowDetails = this.cashFlowDetails();
      this.incomeDataSource.data = cashFlowDetails?.income;
    })
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.incomeDataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
