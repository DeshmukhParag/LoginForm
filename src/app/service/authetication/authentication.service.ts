import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams, QueryEncoder } from '@angular/http';
import { Login, User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

export class CustomQueryEncoderHelper extends QueryEncoder {
  encodeKey(k: string): string {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v: string): string {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // tslint:disable-next-line:no-inferrable-types
  // loginEndPointURL: string = '';
  // tslint:disable-next-line:no-inferrable-types
  isLoggedIn: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  loginSucess: boolean = false;
  userData: User[] = [];

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
    this.userService.getAllUserData().subscribe(res => {
      this.userData = res;
    });
  }

  login(login: Login) {
    this.loginSucess = true;
    // tslint:disable-next-line:prefer-const
    let user = this.userData.find(x => x.password === login.password && x.email === login.userId);

    // tslint:disable-next-line:triple-equals
    if (user == null || user == undefined) {
      return throwError('Invalid Creadientials!Please Retry');

    } else {
      // tslint:disable-next-line:prefer-const
      // let params: URLSearchParams = new URLSearchParams('', new CustomQueryEncoderHelper());
      // params.append('username', '');
      // params.append('password', login.password);
      // params.append('grant_type', '');
      // params.append('display', '');
       sessionStorage.setItem('userName', login.userId);
      // return this.httpClient.post(this.loginEndPointURL, params.toString(), httpOptions);
      // const data = { 'email': login.userId, 'password': login.password };
      const data = { 'email': 'eve.holt@reqres.in', 'password': 'cityslicka' };
      return this.httpClient.post('https://reqres.in/api/login', data);
    }


  }
  logout() {
    this.isLoggedIn = false;
    // sessionStorage.removeItem('auth');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
