import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'list-user', component: ListUserComponent},
  {path: 'register-user', component: CustomerComponent},
  {path: 'feedback', loadChildren: () => import('./modules/feedback/feedback.module').then(m => m.FeedbackModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
