import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.component';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private Url = 'http://localhost:9092/flight';
  
  constructor(private http: HttpClient) { }
  viewFlight(flightNo: number): Observable<any> {
    return this.http.get(`${this.Url}/viewFlight/${flightNo}`);
  }

  addFlight(flight: Object): Observable<Object> {
    return this.http.post(`${this.Url}/addFlight`, flight);
  }

  modifyFlight(flightNo: number,value:any): Observable<Object> {
    return this.http.put(`${this.Url}/updateFlight`, value);
  }

  removeFlight(flightNo: number): Observable<any> {
    return this.http.delete(`${this.Url}/deleteFlight/${flightNo}`, { responseType: 'text' });
  }

  viewAllFlight(): Observable<any> {
    return this.http.get(`${this.Url}/allFlight`);
  }

  

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
      "Bamboo Watch", 
      "Black Watch", 
      "Blue Band", 
      "Blue T-Shirt", 
      "Bracelet", 
      "Brown Purse", 
      "Chakra Bracelet",
      "Galaxy Earrings",
      "Game Controller",
      "Gaming Set",
      "Gold Phone Case",
      "Green Earbuds",
      "Green T-Shirt",
      "Grey T-Shirt",
      "Headphones",
      "Light Green T-Shirt",
      "Lime Band",
      "Mini Speakers",
      "Painted Phone Case",
      "Pink Band",
      "Pink Purse",
      "Purple Band",
      "Purple Gemstone Necklace",
      "Purple T-Shirt",
      "Shoes",
      "Sneakers",
      "Teal T-Shirt",
      "Yellow Earbuds",
      "Yoga Mat",
      "Yoga Set",
  ];

  getUsers() {
      return this.http.get<any>('assets/users.json')
      .toPromise()
      .then(res => <User[]>res.data)
      .then(data => { return data; });
  }

  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    .then(res => <Flight[]>res.data)
    .then(data => { return data; });
}

  generatePrduct(): User {
      const product: User =  {
          id: this.generateId(),
          firstName: '',
          lastName: '',
          userName: '',
          email: '',
          phone: 0
      };

      // product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
      return product;
  }

  generateId() {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
      for (var i = 0; i < 5; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      
      return text;
  }

  generateName() {
      return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }

}
