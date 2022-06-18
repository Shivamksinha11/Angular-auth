import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ];

  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => this.events = res,
      err => console.log(err)
    )
  }

}
