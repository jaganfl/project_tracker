import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public showLogoutBtn = false;
  constructor(private router: Router, private userService: UserService){
    this.userService.login.subscribe((flag: boolean)=>{
      if(flag){
        this.showLogoutBtn = true;
      }
    });
    this.userService.logout.subscribe((flag: boolean)=>{
      if(flag){
        this.showLogoutBtn = false;
      }
    });
  }
  logout(){
    this.router.navigate(["/login"]);
    this.userService.logout.next(true);
  }
  openSettings(){
    this.router.navigate(['/settings']);
  }
  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
