import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../product-list/model/Book';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input()
  livro: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
