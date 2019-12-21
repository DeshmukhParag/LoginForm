import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _allUserData: BehaviorSubject<User[]>;

  constructor() {
    this._allUserData = <BehaviorSubject<User[]>>new BehaviorSubject([]);
  }

  getAllUserData() {
    return this._allUserData.asObservable();
  }

  updateUserData(user: User[]) {
    this._allUserData.next(user);
  }
}
