import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { SortDirective } from 'src/app/signup-form/directive/sort.directive';
import { PasswordPipe } from 'src/app/signup-form/pipe/password.pipe';
import { ButtonModule } from '../../atoms/button/button.module';
import { LabelModule } from '../../atoms/label/label.module';




@NgModule({
  declarations: [TableComponent, SortDirective,PasswordPipe],
  exports: [
    TableComponent,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    ButtonModule,
    LabelModule
  ]
})
export class TableModule { }
