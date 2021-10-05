import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';
import { SignupFormRoutingModule } from './signup-form-routing.module';



@NgModule({
  declarations: [
    SignupFormComponent
  
    
  ],
  exports: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    SignupFormRoutingModule
  ]
})
export class SignupFormModule { }
