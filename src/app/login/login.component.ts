import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { };

  ngOnInit() {
  };

  // TODO: provide credentials, check it, and sing in or response with no access (for now just route to home component)
  signIn(credentials) {
    console.log(credentials);
    this.router.navigate(['/']);
  };
}
