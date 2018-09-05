import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Food} from '../entity/food';
import {Observable} from 'rxjs/Observable';
import {User} from '../entity/user';

@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:8080/nutrition/api/';
  private userSelected;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'user/shortlist');
  }

  selectUser(user: User): void {
    this.userSelected = user;
  }

  getCurrentUser(): User {
    return this.userSelected;
  }
}
