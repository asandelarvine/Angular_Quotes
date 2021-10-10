import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Publisher:  Larvine","Author:  Burt Rutan","Testing leads to failure, and failure leads to understanding",0,0),
    new Quotes("Publisher:  Larvine","Author:  Chris Pine","Programming is not about what you know; it is about what you can figure out",0,0),
    new Quotes("Publisher:  Larvine","Author:  Dennis Ritchie","The only way to learn programming language is by writing programs in it",0,0),
    new Quotes("Publisher:  Larvine","Author:  Unknown","When I wrote this Code, only God and I understood what I did.Now only God knows ",0,0),
    new Quotes("Publisher:  Larvine","Author:  Unknown","Copy-and-Paste was programmed by programmers for programmers actually",0,0),
 
  ];
  show(index:any){
    this.quotes[index].show = !this.quotes[index].show;
  }
  DeleteFunction(value1:any,index:any){
    if(value1){
      this.quotes.splice(index,1);
    }


  }
  submitQuote(anotherQuote){
    this.quotes.push(anotherQuote);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
