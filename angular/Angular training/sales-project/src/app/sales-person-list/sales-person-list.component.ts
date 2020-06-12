import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Harshal","Bawale","hsbawale@gmail.com",200),
    new SalesPerson("abcd","xyz","abcd@gmail.com",100),
    new SalesPerson("aaa","bbbb","asd@aff.com",300)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
