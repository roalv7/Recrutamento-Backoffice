import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input()
  labelName: string = "";

  @Input()
  typeName: string = "";

  @Input()
  inputName: string = "";
  
  @Input()
  formControlInput = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
