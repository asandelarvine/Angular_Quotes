import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Larvine","Burt Rutan","Testing leads to failure, and failure leads to understanding"),
    new Quotes("Larvine","Burt Rutan","Testing leads to failure, and failure leads to understanding")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
