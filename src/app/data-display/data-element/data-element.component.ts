import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../../data.model';

@Component({
  selector: 'app-data-element',
  templateUrl: './data-element.component.html',
  styleUrls: ['./data-element.component.css']
})
export class DataElementComponent implements OnInit {
  @Input() data: Data;
  constructor() { }

  ngOnInit() {
  }

}
