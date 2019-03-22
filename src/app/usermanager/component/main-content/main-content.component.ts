import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private service: UserService
  ) {}

  subscribeToParam(): any {
    let id;
    this.route.params.subscribe(params => {
      const inp = 'id';
      id = params[inp];
      if (!id) {
        id = 1;
      }
    });
    return id;
  }
  subscribeToUser(id): Observable<User> {
    const result: Observable<User> = new Observable();
    this.user = null;
    this.service.users().subscribe(users => {
      if (users.length === 0) {
      } else {
        setTimeout(() => {
          this.user = this.service.userById(id);

        }, 500);
      }
    });
    return result;
  }
  ngOnInit() {
    const id = this.subscribeToParam();
    this.subscribeToUser(id);
  }

}


