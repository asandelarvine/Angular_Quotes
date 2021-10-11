import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  anotherQuote = new Quotes("","","",new Date(),0,0);
  @Output() emitQuote=new EventEmitter<Quotes>();
  submitQuote(){
    this.emitQuote.emit(this.anotherQuote);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
