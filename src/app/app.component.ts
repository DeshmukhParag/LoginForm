import { Component } from '@angular/core';
import { AuthenticationService } from './service/authetication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public authenticationService: AuthenticationService) {
    this.logout();
  }

  logout() {
    this.authenticationService.logout();
  }
}
