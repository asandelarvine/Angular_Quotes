import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {

  
  todayString : string = new Date().toDateString();
  


  constructor() { }

  ngOnInit(): void {
  }

}




