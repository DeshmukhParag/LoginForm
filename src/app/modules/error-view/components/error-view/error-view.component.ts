import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.css']
})
export class ErrorViewComponent implements OnInit {

  @Input('appErrors')
  appErrors: AppViewError[];

  public getErrorClass(errorType: string): string {

    switch (errorType) {
      case 'success':
        return 'alert-success';
      case 'danger':
        return 'alert-danger';
      case 'warning':
        return 'alert-warning';
      default:
        return 'alert-info';
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
export interface AppViewError {
  message: string;
  type: string;
}
