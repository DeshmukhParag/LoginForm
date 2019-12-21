import { Component, OnInit } from '@angular/core';
import { User, Page } from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  user: User = new User();
  page: Page = new Page();
  rows: User[] = [];
  usedata: Array<any> = [
    { firstName: 'Maharastra' },
    { firstName: 'Gujrat' },
    { firstName: 'Delhi' }
  ];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUserData().subscribe(res => {
      this.rows = res;
      this.page.count = res.length;
    });
  }

  setPage(pageInfo) {
    this.page.number = pageInfo.offset + 1;
  }

}
