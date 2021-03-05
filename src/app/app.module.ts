import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ConfirmationService, MessageService } from 'primeng/api';


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { ReactiveFormsModule } from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ListUserComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    ReactiveFormsModule,
    MenubarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
