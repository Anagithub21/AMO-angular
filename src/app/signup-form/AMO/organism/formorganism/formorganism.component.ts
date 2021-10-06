import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ank-formorganism',
  templateUrl: './formorganism.component.html',
  styleUrls: ['./formorganism.component.scss']
})
export class FormorganismComponent {
  headerlabel = "Sign up form"
  subheaderlabel = "Please fill in the form to create an Account"
  namelabel = "first_name"
  buttonlabel = "click me"
  message: any
  @Input() showtable: boolean
  @Input() tabledata: []
  @Input() header: []
  @Output() messageEvent = new EventEmitter<string>();

  receiveMessage($event) {
    this.messageEvent.emit($event)
  }
}
