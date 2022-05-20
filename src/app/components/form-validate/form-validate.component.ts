import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {
  @Input() field: any;
  @Input() key: string;
  constructor() { 
    this.key = "";
  }

  ngOnInit(): void {
  }

}
