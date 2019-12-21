import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../model/user';
import { AuthenticationService } from 'src/app/service/authetication/authentication.service';
import { Router } from '@angular/router';
import { AppViewError } from 'src/app/modules/error-view/components/error-view/error-view.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login = new Login();
  public appErrors: AppViewError[] = new Array<AppViewError>();
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {
    if (this.authenticationService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  ngOnInit() {
  }

  onSubmit() {
    this.login = new Login();
    this.login.userId = this.loginForm.get('userId').value;
    this.login.password = this.loginForm.get('password').value;
    this.authenticationService.login(this.login).subscribe(response => {
      this.authenticationService.isLoggedIn = true;
      sessionStorage.setItem('auth', JSON.stringify(response));
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.log(error);
      this.appErrors.push({ type: 'danger', message: 'Invalid Creadientials!Please Retry' });
      this.authenticationService.isLoggedIn = false;
    });
  }

}
