import { Component, Input, Inject } from "@angular/core";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent {  
  public user: any;
  public users = [];

  addUser() {
    this.users.push(this.user);
  }
  updateUser($event: any) {
    console.log($event);
  }
  userChange($event: any) {
    console.log($event);
    this.user = $event;
  }
  getAvatar(user: string) {
    return user && user.substr(0,1);
  }
}
