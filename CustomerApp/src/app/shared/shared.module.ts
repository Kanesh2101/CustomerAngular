import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  exports: [TableViewComponent],
})
export class SharedModule {}
