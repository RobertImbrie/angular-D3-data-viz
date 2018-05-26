import { Injectable } from '@angular/core';
import { Data } from './data.model';

@Injectable()
export class DataService {
    private data: Data[] = [];

    addData(data: Data) {
        this.data.push(data);
    }

    getAllData() {
        return this.data.slice();
    }
}
