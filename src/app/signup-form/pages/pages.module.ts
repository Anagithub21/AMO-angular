import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './page-routing.module';
import { FormModule } from '../AMO/molecules/form/form.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    PageRoutingModule
  ]
})
export class PagesModule { }
