import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementComponent } from './customer-management.component';
import { RouterModule } from '@angular/router';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomerService } from '../services/customer.service';

@NgModule({
  declarations: [CustomerManagementComponent],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule,
    RouterModule,
    CustomerTableComponent,
    CustomerDetailsComponent,
    SharedModule,
  ],
  providers: [CustomerService],
})
export class CustomerManagementModule {}
