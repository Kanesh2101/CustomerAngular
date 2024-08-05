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
  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras) {
      const state = navigation.extras.state as { customerValue: Customer };
      if (state) {
        this.customerObj = state.customerValue;
        this.isEditForm = true;
      }
    }
  }

  isEditForm: boolean = false;
  customerForm!: FormGroup;
  customerObj: Customer = {
    email: '',
    firstName: '',
    lastName: '',
    contactNo: 0,
    address: '',
  };

  get buttonLabel() {
    if (this.isEditForm) {
      return 'Update';
    }
    return 'Register';
  }

  get titleLable() {
    if (this.isEditForm) {
      return 'Update Customer';
    }
    return 'Customer Register';
  }

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
      address: new FormControl('', [Validators.required]),
    });

    if (this.customerObj) {
      this.populateForm();
    }
  }

  populateForm() {
    this.customerForm.setValue({
      firstName: this.customerObj.firstName,
      lastName: this.customerObj.lastName,
      email: this.customerObj.email,
      contactNo: this.customerObj.contactNo,
      address: this.customerObj.address,
    });
  }

  onSubmit() {
    this.customerForm.markAllAsTouched();
    if (this.isEditForm) {
      this.customerService
        .updateCustomer(this.customerForm.value)
        .subscribe((res: any) => {
          if (res.result) {
            alert('User Updated Successfully');
            this.router.navigate(['customer/customer-table']);
          }
        });
    } else {
      this.customerService
        .createCustomer(this.customerForm.value)
        .subscribe((res: any) => {
          if (res.result) {
            alert('User Created Successfully');
            this.router.navigate(['customer/customer-table']);
          }
        });
    }
  }
}
