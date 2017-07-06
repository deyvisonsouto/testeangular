import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Time } from './time';
import 'rxjs/add/observable/fromPromise';


@Injectable()
export class TimeService {

  constructor(private db: AngularFireDatabase) {

  }

  getTime(): FirebaseListObservable<any[]> {
    return this.db.list('/times');
  }
  save(time: Time) {
    return this.db.list('/times').push(time);
  }

}
