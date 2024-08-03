import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagementComponent } from './modules/customer-management/customer-management.component';
import { CustomerDetailsComponent } from './modules/customer-management/customer-details/customer-details.component';
import { CustomerTableComponent } from './modules/customer-management/customer-table/customer-table.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
