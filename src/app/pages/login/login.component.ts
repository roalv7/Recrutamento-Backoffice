import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {

  }

  formControlEmail = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    if (this.formControlEmail.hasError('required')&& this.formControlEmail.touched) {
      return 'You must enter a value';
    }

    return this.formControlEmail.hasError('email') ? 'Not a valid email' : '';
   
  }

  formControlPassword = new FormControl('', [Validators.required]);

  getErrorMessagePassword() {
    if (this.formControlPassword.hasError('required')&& this.formControlPassword.touched) {
      return 'You must enter a value';
    }

    return this.formControlPassword.hasError('password') ? 'Not a valid Password' : '';
  }


}




