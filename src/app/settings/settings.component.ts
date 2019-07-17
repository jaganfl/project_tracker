import { Component, Input, Inject, OnInit } from "@angular/core";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { ProjectListService } from '../services/project-list.service';

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {  
  public user: any;
  public users = [];
  public projectList= [];
  constructor( private projectListService: ProjectListService) {}

  ngOnInit(){
    this.projectList = [{ name : 'one', id: 'one'}, { name : 'two', id: 'two'},
    { name : 'one', id: 'one'}, { name : 'two', id: 'two'},
    { name : 'one', id: 'one'}, { name : 'two', id: 'two'},
    { name : 'one', id: 'one'}, { name : 'two', id: 'two'},
    { name : 'thee', id: 'one'}, { name : 'two', id: 'two'},
    { name : 'fr', id: 'one'}, { name : 'two', id: 'two'}]
  }

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
