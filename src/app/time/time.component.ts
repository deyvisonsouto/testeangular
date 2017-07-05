import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseListObservable } from 'angularfire2/database';

import { TimeService } from './time.service';
import { Time } from './time';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  times: FirebaseListObservable<Time[]>;
  form: FormGroup;

  constructor(private timeService: TimeService, private fb: FormBuilder) {

    this.form = fb.group({
      nome: ['', Validators.minLength(2)]
    });
  }

  ngOnInit() {
    this.times = this.timeService.getTime();
  }
  save() {
    console.log(this.form.value);
    this.timeService.save(this.form.value).then(r => {
      console.log(r);
    });
  }

}
