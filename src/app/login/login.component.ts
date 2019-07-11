import { Component, Input, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent {
  loginForm = {};
  constructor(private router: Router, private userService: UserService){

  }
  login(){
    this.router.navigate(["/dashboard"]);
    this.userService.login.next(true);
  }
}
