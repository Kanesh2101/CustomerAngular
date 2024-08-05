import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Customer, CustomerDTO } from '../types/customer.type';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  url = 'https://localhost:7064/api/Customers';

  getCustomers() {
    return this.http.get(this.url);
  }

  createCustomer(customer: Customer) {
    const customerDTO: CustomerDTO = {
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      contactNo: customer.contactNo.toString(),
      address: customer.address,
    };
    return this.http.post(this.url, customerDTO);
  }

  updateCustomer(customer: Customer) {
    const customerDTO: CustomerDTO = {
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      contactNo: customer.contactNo.toString(),
      address: customer.address,
    };
    return this.http.put(this.url, customerDTO);
  }

  deleteCustomer(email: string) {
    return this.http.delete(this.url + '/' + email);
  }
}
