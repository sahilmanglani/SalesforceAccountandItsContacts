import { Component, VERSION } from '@angular/core';

import { SalesforceService } from './salesforce.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private sfservice: SalesforceService) {}

  Accounts: any = [];
  Contacts: any = [];
  curIndex: number = undefined;
  ngOnInit() {
    this.sfservice.getAccounts().subscribe((data) => {
      console.log(data);
      this.Accounts = data.records;
      for (let i = 0; i < this.Accounts.length; i++) {
        this.Accounts[i].index = i;
      }
    });
  }
  handleContact(each: any) {
    this.curIndex = each.index;
    this.sfservice.getContacts(each.Id).subscribe((data) => {
      console.log('contacts', data);
      this.Contacts = data.records;
    });
  }
}
