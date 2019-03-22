import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) { }

  name = new FormControl('', [Validators.required]);
  id = new FormControl('', [ Validators.required, Validators.pattern('[0-9]')]);
  username = new FormControl('', [ Validators.required, Validators.pattern('')]);

  getErrorMessage(Name)   {
    let msg = '';
    console.log(Name);
    switch (Name) {
      case 'id' : msg = 'Enter an numeric id';
                  break;
    }
    return this.name.hasError('required') ? msg : '';
  }

  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
