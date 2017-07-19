import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";
@Component({
  selector: 'app-anima-teste',
  templateUrl: './anima-teste.component.html',
  styleUrls: ['./anima-teste.component.css'],
  animations: [
    trigger('someCoolAnimation', [
      transition('* => fadeIn', [
        // fade in Animation
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => fadeOut', [
        // fade out Animation
        animate(1000, style({ opacity: 0, color: "#FF0000", fontSize: "24px" }))

      ])
    ])
  ]
})
export class AnimaTesteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bindingVar = '';

  fadeIn() {
    this.bindingVar = 'fadeIn';
  }

  fadeOut() {
    this.bindingVar = 'fadeOut';
  }

  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

}
