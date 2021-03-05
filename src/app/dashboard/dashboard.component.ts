import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.component';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products!: Flight[];

  constructor(private productService: FlightService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }

}
