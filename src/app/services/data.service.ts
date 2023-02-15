import { Client } from './../models/client';
import { BookingSpot } from './../models/booking-spot';
import { Spot } from './../models/spot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:5117/api/";
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http : HttpClient) { }

  getSpotList() : Observable<Spot[]>{
    return this.http.get<Spot[]>(apiUrl + "BookingEntries/GetSpots");
  }

  postBooking(data : FormData) : Observable<BookingSpot>{
    return this.http.post<BookingSpot>(apiUrl + "BookingEntries", data);
  }

  getClients() : Observable<Client[]>{
    return this.http.get<Client[]>(apiUrl + "BookingEntries/GetClients");
  }

  getBookingEntries() : Observable<BookingSpot[]>{
    return this.http.get<BookingSpot[]>(apiUrl + "BookingEntries");
  }


}
