import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ank-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() name: string
  @Input() buttonlabel: string
  text: string = 'text'
  number: string = 'number'
  email: string = 'email'
  password: string = 'password'
  numberplaceholder: string = 'Enter Age'
  form: FormGroup;
  country=['India']
  @Output() messageEvent = new EventEmitter<any>();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      mobilenumber: ['', [Validators.required]],
      country:['',[Validators.required]],
      email: ['', [Validators.required]],
      password:['',Validators.required]
    });
  }

  onSubmit() { 
    this.messageEvent.emit(this.form.value)
  }
  
}
