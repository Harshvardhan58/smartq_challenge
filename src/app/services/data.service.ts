import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {
  private url = 'https://thesmartq.firebaseio.com/menu.json';
  constructor(private http: Http) {

  }
  getMenuList() {
    return this.http.get(this.url);
  }
}
