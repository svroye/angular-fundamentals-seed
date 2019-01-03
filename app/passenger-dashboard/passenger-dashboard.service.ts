import { Passenger } from "./models/passenger.interface";
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient){
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http.get<Passenger[]>(PASSENGER_API)
          .pipe( catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error('Backend returned code ', error.status, ', body was ', error.error );
      }
      return throwError("Something bad happened, please try again later");
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