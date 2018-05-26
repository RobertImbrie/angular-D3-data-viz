import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
    dataModified = new Subject<Data[]>();
    private data: Data[] = [];

    addData(data: Data) {
        this.data.push(data);
        this.dataModified.next(this.data.slice());
    }

    getAllData() {
        return this.data.slice();
    }
}
