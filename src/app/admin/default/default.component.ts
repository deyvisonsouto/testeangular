import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private http: Http) { }
  data: any;
  columns: any;
  orderbycurrent: string = "";
  orderbydirection: number = 0;
  ngOnInit() {
    this.http.get("assets/data.json").map(response => {
      this.data = response.json();
      this.columns = [];
      this.columns.push("Nome");
      this.columns.push("Idade");
      console.log(this.data);
    }).subscribe((res) => { });
  }

  orderby(item, event: Event) {
    let array = [];
    this.data.forEach(element => {
      array.push(element[item]);
    });
    if (this.orderbycurrent != item) {
      this.orderbycurrent = item;
      this.orderbydirection = 0;
    } else {
      this.orderbydirection = this.orderbydirection == 0 ? 1 : 0;
    }
    if (this.orderbydirection == 0)
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
    console.log(clone);
  }

  add() {
    this.data.push({ "Nome": "Uzumaki Naruto", "Idade": 16 });
  }

}
