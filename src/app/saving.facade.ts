import {inject, Injectable, Signal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {Account, CashFlow, CashFlowDetails} from "./model/saving.model";

@Injectable({providedIn: 'root'})
export class SavingFacade {


  private readonly httpClient = inject(HttpClient);

  getAccounts(): Signal<Account[] | undefined> {
    return toSignal<Account[]>(this.httpClient.get<Account[]>('http://localhost:8080/accounts'));
  }

  getCashFlows(account: number): Signal<CashFlow[] | undefined> {
    return toSignal<CashFlow[]>(this.httpClient.get<CashFlow[]>('http://localhost:8080/accounts/' + account + '/cashFlows'));
  }

  getCashFlowDetails() {
    return toSignal<CashFlowDetails>(this.httpClient.get<CashFlowDetails>('http://localhost:8080/accounts/13/cashFlows/11/details'));
  }

}
