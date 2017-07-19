import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-teste-novo',
  templateUrl: './teste-novo.component.html',
  styleUrls: ['./teste-novo.component.css']
})
export class TesteNovoComponent implements OnInit {

  form: FormGroup;
  foods: any[] = [];
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      campo: ['']
    });
    this.foods.push({ viewValue: 'Hamburguer', value: 1 });
    this.foods.push({ viewValue: 'Hot Dog', value: 2 });
  }

  @Input() tipoCampo: number = 1;
  @Input() nomeCampo: string = "campo";

  title: string = "Marcus";
  ngOnInit() {
  }

  click() {
    console.log(this.form.value);
  }

}
