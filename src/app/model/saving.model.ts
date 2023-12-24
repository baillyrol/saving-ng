export interface Account {
  id: number;
  idConnection: string;
  idUser: string;
  iban: string;
  name: string;
  comingBalance: number;
  formattedBalance: string;
  createdOn: string; // Assuming you store timestamps as strings for simplicity
  lastUpdatedOn: string; // Assuming you store timestamps as strings for simplicity
}

export interface CashFlow {

  id: number;
  accountId: number;
  firstDate: string; // Assuming you store dates as strings for simplicity
  lastDate: string; // Assuming you store dates as strings for simplicity
  month: number;
  year: number;
  income: number;
  expense: number;
  cashFlow: number;
  totalTransaction: number;

}

export interface Transaction {
  id: number;
  accountId: number;
  date: string; // Assuming you store dates as strings for simplicity
  originalWording: string;
  value: number;
  formattedValue: string;
}

export interface CashFlowDetails {
  accountEntity: Account,
  cashFlow: CashFlow,
  income: Transaction[],
  expense: Transaction[]
}
