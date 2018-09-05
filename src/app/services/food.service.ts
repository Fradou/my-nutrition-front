import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Food} from '../entity/food';
import { environment } from '../../environments/environment';

@Injectable()
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(): Observable<Food[]> {
    return this.http.get<Food[]>(environment.apiUrl + 'food');
  }

  searchFood(name: string): Observable<Food[]> {
    return this.http.get<Food[]>(environment.apiUrl + 'food');
  }
}
