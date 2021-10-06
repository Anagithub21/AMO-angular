import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from '../service/signup.service';
import {Data} from '../model/data'
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  data: Data[] = [];
  tabledata:Data[]
  subscription: Subscription;
  showtable:boolean=false
  header:any=[]
  constructor(private dataservice: SignupService) { }
  ngOnInit(): void {
    // this.subscription = this.dataservice.currentData.subscribe(data => this.tabledata = data)
    this.dataservice.getDataObservable().subscribe((res)=>{
      this.data=res
      this.header = Object.keys(this.data[0])
    })
  }
  receiveData($event) {
    console.log($event)
    this.data.push($event)   
  }

  
    
}
