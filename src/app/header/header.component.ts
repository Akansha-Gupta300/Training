import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // buttonFlag!: boolean;
  // username: string | null = '';
  // user!: boolean;
  // admin!: boolean;

  // constructor() { }

  // ngOnInit() {
  //   this.user = false;
  //   this.admin = false;
  //   if (sessionStorage.getItem('role') === 'user') {
  //     this.user = true;
  //   } else if (sessionStorage.getItem('role') === 'admin') {
  //     this.admin = true;
  //   }
  //   // this.buttonFlag=this.authenticationService.isUserLoggedIn();
  //   this.username = sessionStorage.getItem('username');
  //   if (this.username != null)
  //     this.username = this.username.toUpperCase();
  // }

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label:'Home',
              icon:'pi pi-fw pi-home',
              routerLink:'/dashboard'
          },
          {
              label:'List User',
              icon:'pi pi-fw pi-users',
              routerLink:'/list-user'
          },
          {
              label:'Login',
              icon:'pi pi-fw pi-user',
              routerLink: '/login'
          },
          {
              label:'Feedback',
              icon:'pi pi-fw pi-comment',
              routerLink:'/feedback'
          },
          {
              label:'Log Out',
              icon:'pi pi-fw pi-power-off',
              routerLink: '/dashboard'
              
          }
      ];
  }    

}
