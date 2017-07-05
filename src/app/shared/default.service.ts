import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DefaultService {

  data: any[];
  columns: any;

  items: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase) {
    }

  get(): FirebaseListObservable<any> {
    return this.db.list('/items');
  }

  ordernar(item: string, direction: number): any[] {
    let array = [];

    this.data.forEach(element => {
      array.push(element[item]);
    });
    if (direction == 0)
      array.sort();
    else
      array.reverse();

    let clone = [];
    array.forEach(element => {
      let currents = (this.data as any[]).filter(f => f[item] == element);
      currents.forEach(element2 => {
        if (clone.filter(e => JSON.stringify(e) === JSON.stringify(element2)).length == 0)
          clone.push(Object.assign({}, element2));
      });
    });
    this.data = clone;
    return this.data;
  }

}
