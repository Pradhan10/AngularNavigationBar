import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  private _USERS: BehaviorSubject<User[]>;
  public dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._USERS = new BehaviorSubject<User[]>([]);
  }

  users(): Observable<User[]> {
    return this._USERS.asObservable();
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._USERS.next(Object.assign({}, this.dataStore).users);
      resolver(user);
    });
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._USERS.next(Object.assign({}, this.dataStore).users);
      }, error => {
        console.log('Failed to fetch users');
      });
  }

}
