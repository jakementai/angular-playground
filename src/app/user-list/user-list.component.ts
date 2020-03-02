import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList;

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.userList = this.user.getUserList().subscribe();

  }

}
