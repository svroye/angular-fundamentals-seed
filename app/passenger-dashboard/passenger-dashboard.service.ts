import { Passenger } from "./models/passenger.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient){
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>(PASSENGER_API);
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
      // create the header
      const headers = new HttpHeaders({
        'Content-Type': 'application.json',
        'Authorization' : 'abcdefghijklmnopqrstuvwxyz'
      });

      // add the header
      const httpOptions = {
        headers: headers
      };

      return this.http.put<Passenger>(PASSENGER_API + '/' + passenger.id, passenger, httpOptions);
    }

    deletePassenger(passenger: Passenger): Observable<Passenger> {
      return this.http.delete<Passenger>(PASSENGER_API + '/' + passenger.id);
    }
  }