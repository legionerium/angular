import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shered/user';
import {query} from '@angular/animations';
import {element} from 'protractor';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  usersList: User[] = [];
  username: string;
  name: string;
  role: string;
  selectedList: User[];

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

  // tslint:disable-next-line:typedef
  addUser(){
    // @ts-ignore
    this.userService.addUser({
      id: Math.floor((Math.random() * 20) + 10),
      name: this.name,
      username: this.username,
      email: '',
      role: this.role,
      phone: '',
      website: ''
    });
    this.usersList = this.userService.getUsersList();
  }

  // tslint:disable-next-line:typedef
  deleteUsers(){
    this.userService.deleteUsers(this.selectedList);
    this.usersList = this.userService.getUsersList();
  }

  // tslint:disable-next-line:typedef
  selectItem(users: any){
    this.selectedList = [];
    // tslint:disable-next-line:no-shadowed-variable
    users.forEach(element => {
      this.selectedList.push(element.value);
    });
  }
}
