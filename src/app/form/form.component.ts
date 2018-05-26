import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('form') dataForm: NgForm;
  genders = [
    'male',
    'female',
    'other'
  ];
  colors = [
    'red',
    'yellow',
    'green',
    'blue',
    'purple'
  ];
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['data']);
  }

}
