import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DefaultService } from '../../shared/default.service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private http: Http, private defaultService: DefaultService) { }
  data: any;
  columns: any;
  orderbycurrent: string = "";
  orderbydirection: number = 0;

  page = 0;
  pagecount = 5;
  total = 0;


  ngOnInit() {
    this.defaultService.get().subscribe(res => {
      this.data = this.defaultService.data.slice(this.page*this.pagecount,(this.page+1) *this.pagecount);
      this.total = ( this.defaultService.data as any[]).length;
      this.columns = this.defaultService.columns;
    });
  }

  orderby(item, event: Event) {

    if (this.orderbycurrent != item) {
      this.orderbycurrent = item;
      this.orderbydirection = 0;
    } else {
      this.orderbydirection = this.orderbydirection == 0 ? 1 : 0;
    }
    this.data = this.defaultService.ordernar(item, this.orderbydirection).slice(this.page*this.pagecount,(this.page+1) *this.pagecount);
  }

  add() {
    this.data.push({ "Nome": "Uzumaki Naruto", "Idade": 16 });
  }



}
