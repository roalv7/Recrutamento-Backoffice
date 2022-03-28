import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent implements OnInit {

  @Input()
  formControlInput = new FormControl();

  @Input() 
  hide: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
