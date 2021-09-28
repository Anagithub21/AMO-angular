import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PageRoutingModule } from './page-routing.module';
import { Org1Module } from '../AMO/organism/org1/org1.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  exports:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    Org1Module,
    PageRoutingModule
    
  ]
})
export class PagesModule { }
