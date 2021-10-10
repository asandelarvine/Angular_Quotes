import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Larvine","Burt Rutan","Testing leads to failure, and failure leads to understanding",0,0),
    new Quotes("Larvine","Burt Rutan","Testing leads to failure, and failure leads to understanding",0,0),
  ];
  show(index:any){
    this.quotes[index].show = !this.quotes[index].show;
  }
  DeleteFunction(value1:any,index:any){
    if(value1){
      this.quotes.splice(index,1);
    }


  }

  constructor() { }

  ngOnInit(): void {
  }

}
