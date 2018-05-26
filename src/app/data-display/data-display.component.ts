import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  data: Data[];
  subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.dataModified
      .subscribe(
        (data: Data[]) => {
          this.data = data;
          console.log(data);
        }
      );

    this.data = this.dataService.getAllData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
