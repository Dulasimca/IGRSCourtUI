import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this._authService.login();
    this._router.navigate(['/dashboard']);
  }


}
