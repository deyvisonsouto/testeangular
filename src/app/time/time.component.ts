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

  times: FirebaseListObservable<any[]>;
  form: FormGroup;

  constructor(private timeService: TimeService, private fb: FormBuilder) {

    this.form = fb.group({
      nome: ['', Validators.minLength(2)]
    });
  }

  ngOnInit() {
    this.times = this.timeService.getTime();
    this.times.subscribe(r => console.log(r));
  }
  save() {
    this.timeService.save(this.form.value);
  }

}
