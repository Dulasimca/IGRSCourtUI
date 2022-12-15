import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private hasMenu = new BehaviorSubject<boolean>(false); 
  /// To control if the user is logged in or not
  /// The BehaviorSubject keeps the latest value cached (in our case when the service is created the initial value is going to be false). 
  /// So when an Observer subscribes to the isLoggedIn(), the cached valued is going to be emitted right away.

  constructor(private _router: Router) { 
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // getter to expose only the get method publicly and as also expose the Subject as an Observable
  }

  get isMenuLoaded() {
    return this.hasMenu.asObservable();
  }

  setMenuStatus(value: boolean) {
    this.hasMenu.next(value);
  }

  login(user: User) {
    localStorage.setItem('UserInfo', JSON.stringify(user));
    this.loggedIn.next(true);
  }

  getUserInfo(): any {
    const currentUser: any = localStorage.getItem('UserInfo')
    return JSON.parse(currentUser);
  }


  public logout() {
    this._router.navigate(['/login']);
    this.loggedIn.next(false);
  }
}
