import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events"
  private _speacialEventsUrl = "http://localhost:3000/api/speacial"

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpeacialEvents() {
    return this.http.get<any>(this._speacialEventsUrl)
  }

}
