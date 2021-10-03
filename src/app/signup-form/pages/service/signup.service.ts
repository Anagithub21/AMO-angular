import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private dataSource = new BehaviorSubject([]);
  currentData = this.dataSource.asObservable();
  constructor() { }

  savedata(data: []) {
    this.dataSource.next(data)
  }
}
