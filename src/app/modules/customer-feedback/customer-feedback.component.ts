import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private route: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comments: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    this.messageService.add({severity:'success', summary: 'Feedback Submitted Sucessfully.', detail: 'Feedback Submitted', life: 3000});
    // this.route.navigate(["/dashboard"]);
    this.registerForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
