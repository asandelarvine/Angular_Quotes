import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes("Publisher:  Larvine","Author:  Burt Rutan","Testing leads to failure, and failure leads to understanding",new Date(2015,5,4),0,0),
    new Quotes("Publisher:  Larvine","Author:  Chris Pine","Programming is not about what you know; it is about what you can figure out",new Date(2010,5,9),0,0),
    new Quotes("Publisher:  Larvine","Author:  Dennis Ritchie","The only way to learn programming language is by writing programs in it",new Date(2000,9,1),0,0),
    new Quotes("Publisher:  Larvine","Author:  Unknown","When I wrote this Code, only God and I understood what I did.Now only God knows ",new Date(2001,3,9),0,0),
    new Quotes("Publisher:  Larvine","Author:  Unknown","Copy-and-Paste was programmed by programmers for programmers actually",new Date(2015,8,4),0,0),
 
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
