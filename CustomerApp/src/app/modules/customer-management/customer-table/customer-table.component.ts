import { Component, inject, Input, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../types/customer.type';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-customer-table',
  standalone: true,
  imports: [
    SharedModule,
    RouterModule,
    MatFormFieldModule,
    MatButton,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss',
})
export class CustomerTableComponent {
  customerService = inject(CustomerService);
  router = inject(Router);

  customerData: MatTableDataSource<Customer> = new MatTableDataSource();

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  ngAfterViewInit() {
    this.customerData.paginator = this.paginator;
    this.customerData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customerData.filter = filterValue.trim().toLowerCase();

    if (this.customerData.paginator) {
      this.customerData.paginator.firstPage();
    }
  }

  loadCustomers() {
    this.customerService
      .getCustomers()
      .subscribe((res: any) => (this.customerData = res.value));
  }

  deleteCustomer(customer: Customer) {
    this.customerService
      .deleteCustomer(customer.email)
      .subscribe((res: any) => {
        if (res.result) {
          alert('User Deleted Successfully');
          this.loadCustomers();
        }
      });
  }

  viewCustomer(customer: Customer) {
    this.router.navigate(['customer/customer-details'], {
      state: { customerValue: customer },
    });
  }
}
