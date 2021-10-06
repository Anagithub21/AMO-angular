import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private dataurl: string = 'assets/data.json'
  private dataSource = new BehaviorSubject([]);
  currentData = this.dataSource.asObservable();
  constructor(private readonly http: HttpClient) { }

  savedata(data: []) {
    this.dataSource.next(data)
  }
  getDataObservable(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dataurl)
  }
}
