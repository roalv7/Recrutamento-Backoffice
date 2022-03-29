import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private _router: Router, private _httpClient: HttpClient,private _snackBar: MatSnackBar) { }

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

  submitHandle(){
    //this.disable = true;
    const admin = {
      
      Email: this.formControlEmail.value,
      Password: this.formControlPassword.value,
     
    };
    this._httpClient.post("https://localhost:7082/Admin/specific",admin).subscribe((response) =>{
      console.log("response do request http",response);
      this._router.navigate(["results"]);
    },
      (error) => {
        this._snackBar.open(error.error,"X", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 4000,
        });
        console.log(error.error)
        this.formControlEmail.reset();
        this.formControlPassword.reset();
      },
      () => console.log("SUCCESS")

    
    );
  }


}




