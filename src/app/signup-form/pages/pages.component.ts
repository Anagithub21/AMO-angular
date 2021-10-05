import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from './service/signup.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  data: any = [];
  tabledata:any=[]
  subscription: Subscription;
  showtable:boolean=false
  header:any=[]
  constructor(private dataservice: SignupService) { }
  ngOnInit(): void {
    this.subscription = this.dataservice.currentData.subscribe(data => this.tabledata = data)
  }
  receiveData($event) {
    console.log($event)
    this.data.push($event)
    this.header = Object.keys(this.data[0])
    console.log(this.data.length)
    this.dataservice.savedata(this.data)    
  }

  
    
}
