import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

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
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.addData(this.dataForm.value);
    this.router.navigate(['data']);
  }

}
