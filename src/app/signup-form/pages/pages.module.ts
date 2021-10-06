import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './page-routing.module';
import { FormorganismModule } from '../AMO/organism/formorganism/formorganism.module';
import { TableorganismModule } from '../AMO/organism/tableorganism/tableorganism.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormorganismModule,
    TableorganismModule,
    PageRoutingModule
    
  ]
})
export class PagesModule { }
