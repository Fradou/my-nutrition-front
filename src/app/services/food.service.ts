import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Food} from '../entity/food';

@Injectable()
export class FoodService {

  private baseUrl = 'http://localhost:8080/nutrition/api/';

  constructor(private http: HttpClient) { }

  getFood(): Observable<Food[]> {
    console.log('calling url : ' + this.baseUrl + 'food');
    return this.http.get<Food[]>(this.baseUrl + 'food');
  }
}
