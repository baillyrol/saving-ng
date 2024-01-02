import {inject, Injectable, Signal} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {Account, CashFlow, CashFlowDetails} from "./model/saving.model";

@Injectable({providedIn: 'root'})
export class SavingFacade {


  private readonly httpClient = inject(HttpClient);

  getAccounts(): Signal<Account[] | undefined> {
    return toSignal<Account[]>(this.httpClient.get<Account[]>('/api/accounts'));
  }

  getCashFlows(account: string): Signal<CashFlow[] | undefined> {
    return toSignal<CashFlow[]>(this.httpClient.get<CashFlow[]>('/api/accounts/' + account + '/cashFlows'));
  }

  getCashFlowDetails() {
    return toSignal<CashFlowDetails>(this.httpClient.get<CashFlowDetails>('/api/accounts/fc5278fc-7bf5-40da-ba86-ceffb96426dc/cashFlows/01/details'));
  }

}
