import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Customer, CustomerDTO } from '../types/customer.type';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get('https://localhost:7064/api/Customers');
  }

  createCustomer(customer: Customer) {
    const customerDTO: CustomerDTO = {
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      contactNo: customer.contactNo.toString(),
      address: customer.address,
    };
    return this.http.post('https://localhost:7064/api/Customers', customerDTO);
  }

  updateCustomer(customer: Customer) {
    const customerDTO: CustomerDTO = {
      email: customer.email,
      firstName: customer.firstName,
      lastName: customer.lastName,
      contactNo: customer.contactNo.toString(),
      address: customer.address,
    };
    return this.http.put('https://localhost:7064/api/Customers', customerDTO);
  }

  deleteCustomer(email: string) {
    return this.http.delete('https://localhost:7064/api/Customers/' + email);
  }
}
