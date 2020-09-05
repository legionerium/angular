import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shered/user';
import {query} from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  usersList: User[] = [];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();

  }

  // tslint:disable-next-line:no-shadowed-variable typedef
  search(query: string){
    this.usersList = this.userService.findUser(query);
  }

  // tslint:disable-next-line:typedef
  sort(direction: string) {
    console.log(direction);
    this.usersList = this.userService.sortUsers(direction);
  }
}
