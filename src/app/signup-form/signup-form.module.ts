import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';
import { SignupFormRoutingModule } from './signup-form-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SignupFormComponent
  
    
  ],
  exports: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    SignupFormRoutingModule,
    HttpClientModule
  ]
})
export class SignupFormModule { }
