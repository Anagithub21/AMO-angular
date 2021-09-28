import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form.component';

const routes: Routes = [
  { path: '',loadChildren:()=>import('./pages/pages.module').then(m=>(m.PagesModule))}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupFormRoutingModule { }
