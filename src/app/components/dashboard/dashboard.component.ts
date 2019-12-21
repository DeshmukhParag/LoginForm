import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  UserName: string = '';
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let username = sessionStorage.getItem('userName');

    // tslint:disable-next-line:triple-equals
    if (username == undefined || username == null) {

    } else {
      this.UserName = username;
    }
  }

}
