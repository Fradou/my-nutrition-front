import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../entity/user';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {

  private userSelected: User;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + 'user/shortlist');
  }

  selectUser(user: User): void {
    this.userSelected = user;
  }

  getCurrentUser(): User {
    return this.userSelected;
  }
}
