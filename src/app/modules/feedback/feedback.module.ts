import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { CustomerFeedbackComponent } from '../customer-feedback/customer-feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CustomerFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [CustomerFeedbackComponent]
})
export class FeedbackModule { }
