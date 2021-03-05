import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { FlightService } from '../services/flight.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  
  userDialog: boolean = false;

  users: User[] = [];

  user!: User;

  selectedUsers: User[] = [];

  submitted: boolean = false;

  constructor(private userService: FlightService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      this.userService.getUsers().then(data => this.users = data);
  }

  openNew() {
      this.user = {};
      this.submitted = false;
      this.userDialog = true;
  }

  deleteSelectedUsers() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected users?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.users = this.users.filter(val => !this.selectedUsers.includes(val));
              this.selectedUsers = [];
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
          }
      });
  }

  editUser(user: User) {
      this.user = {...user};
      this.userDialog = true;
  }

  deleteUser(user: User) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + user.userName + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.users = this.users.filter(val => val.id !== user.id);
              this.user = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
          }
      });
  }

  hideDialog() {
      this.userDialog = false;
      this.submitted = false;
  }
  
  saveUser() {
      this.submitted = true;

      if (this.user.userName) {
          if (this.user.id) {
              this.users[this.findIndexById(this.user.id)] = this.user;                
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
          }
          else {
              this.user.id = this.createId();
              this.users.push(this.user);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Created', life: 3000});
          }

          this.users = [...this.users];
          this.userDialog = false;
          this.user = {};
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

}
