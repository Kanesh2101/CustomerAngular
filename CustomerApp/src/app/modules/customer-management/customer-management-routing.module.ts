import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagementComponent } from './customer-management.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerManagementComponent,
    children: [
      {
        path: 'customer-details',
        component: CustomerDetailsComponent,
      },
      { path: 'customer-table', component: CustomerTableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerManagementRoutingModule {}
