import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-novo',
  templateUrl: './teste-novo.component.html',
  styleUrls: ['./teste-novo.component.css']
})
export class TesteNovoComponent implements OnInit {

  constructor() { }

  title: string = "Marcus";
  ngOnInit() {
  }

}
