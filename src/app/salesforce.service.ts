import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SalesforceService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<any> {
    let headers = {
      Authorization:
        'Bearer 00D5j0000036d6I!AQ4AQPAchqx_Ehp5cfDrJCQRNouw0IHNj7wQlUDBa_3zN99ixWE02Fg3UpT4G_5xkYDc96HDcv_F5Q0Y1j7mPkXxEmBbm_T9',
    };
    return this.http.get(
      'https://sharingtest-dev-ed.my.salesforce.com/services/data/v53.0/queryAll/?q=Select Id,Name,Type,Phone,Industry from Account',
      {
        headers,
      }
    );
  }

  getContacts(AccountId: any): Observable<any> {
    let headers = {
      Authorization:
        'Bearer 00D5j0000036d6I!AQ4AQPAchqx_Ehp5cfDrJCQRNouw0IHNj7wQlUDBa_3zN99ixWE02Fg3UpT4G_5xkYDc96HDcv_F5Q0Y1j7mPkXxEmBbm_T9',
    };
    return this.http.get(
      "https://sharingtest-dev-ed.my.salesforce.com/services/data/v53.0/queryAll/?q=Select Id,Name,AccountId,Phone,Email from Contact where AccountId = '" +
        AccountId +
        "'",
      {
        headers,
      }
    );
  }
}
