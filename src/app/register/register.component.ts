import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  differentPasswords: boolean;
  currentUser: any;

  constructor(private registerService: RegisterService) {
    this.currentUser = this.setInitialValuesForCurrentUser();
  };

  ngOnInit() {
  };

  setInitialValuesForCurrentUser() {
    return {
      id: undefined,
      firstName: "",
      surname: "",
      phoneNumber: "",
      email: "",
      login: "",
      password: ""
    }
  }

  // TODO Check if correct and add credentials to DB
  register(registerCredentials) {
    this.registerService.add(registerCredentials).subscribe(
      userRecord => console.log(registerCredentials)
    );
  };
}
