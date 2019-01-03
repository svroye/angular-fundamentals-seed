import { Passenger } from "./models/passenger.interface";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
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

    getPassengersWithPromise(): Promise<Passenger[]> {
      return this.http.get<Passenger[]>(PASSENGER_API).toPromise();
  }

    updatePassenger(passenger: Passenger): Observable<HttpResponse<Passenger>> {
      // create the header
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'abcdefghijklmnopqrstuvwxyz'   
      });
      // add the header
      const httpOptions = {
        headers: headers,
        observe: 'response' as 'body'
      };

      return this.http.put<HttpResponse<Passenger>>(PASSENGER_API + '/' + passenger.id , passenger, httpOptions);
    }

    deletePassenger(passenger: Passenger): Observable<Passenger> {
      return this.http.delete<Passenger>(PASSENGER_API + '/' + passenger.id);
    }
  }