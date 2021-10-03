import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from '../service/signup.service';
@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.scss']
})
export class DatapageComponent implements OnInit {

  data: any = [];
  subscription: Subscription;
  constructor(private dataservice: SignupService) { }

  ngOnInit(): void {
    this.subscription = this.dataservice.currentData.subscribe(data => this.data = data)
  }

}
