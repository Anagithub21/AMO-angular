import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ank-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent  {
  @Input() inputtype: string
  @Input() inputplaceholder:string
  @Input() label:string
  @Input() name:string
  @Input() set control(value: FormControl) {
    if (this.formControl !== value) {
      this.formControl = value;
    }
  }

  formControl: FormControl;
 abcd(e){
  console.log(e.target.value)
 }

}
