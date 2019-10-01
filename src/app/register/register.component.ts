import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  differentPasswords: boolean;

  constructor() { };

  ngOnInit() {
  };

  // TODO Check if correct and add credentials to DB
  register(registerCredentials) {
    console.log(registerCredentials);
  };
}
