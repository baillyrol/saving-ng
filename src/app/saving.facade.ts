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

  getCashFlows(account: string): Signal<CashFlow[] | undefined> {
    return toSignal<CashFlow[]>(this.httpClient.get<CashFlow[]>('http://localhost:8080/accounts/' + account + '/cashFlows'));
  }

  getCashFlowDetails() {
    return toSignal<CashFlowDetails>(this.httpClient.get<CashFlowDetails>('http://localhost:8080/accounts/476b1f92-0fc9-4939-9467-686f0d29c95a/cashFlows/11/details'));
  }

}
