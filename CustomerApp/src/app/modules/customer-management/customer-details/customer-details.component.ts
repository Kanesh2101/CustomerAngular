import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Customer } from '../../types/customer.type';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss',
  providers: [CustomerService],
})
export class CustomerDetailsComponent implements OnInit {
  customerService = inject(CustomerService);
  router = inject(Router);
  customerForm!: FormGroup;
  customer: Customer = {
    email: '',
    firstName: '',
    lastName: '',
    contactNo: 0,
    address: '',
  };

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]),
      contactNo: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.pattern(/^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    this.customerForm.markAllAsTouched();
    this.customerService
      .createCustomer(this.customerForm.value)
      .subscribe((res) => {});
    this.router.navigate(['customer/customer-table']);
  }
}
