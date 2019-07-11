import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {
  public login = new BehaviorSubject(false);
  public logout = new BehaviorSubject(false);
}
