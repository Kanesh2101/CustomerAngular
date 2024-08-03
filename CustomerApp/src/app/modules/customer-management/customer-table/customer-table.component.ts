import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-customer-table',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss',
})
export class CustomerTableComponent {}
