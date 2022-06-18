import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speacial-events',
  templateUrl: './speacial-events.component.html',
  styleUrls: ['./speacial-events.component.css']
})
export class SpeacialEventsComponent implements OnInit {

  speacialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
      }
  ];

  constructor(private _eventService: EventService, private _router: Router) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => this.speacialEvents = res,
      err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      } 
    )
  }

}
