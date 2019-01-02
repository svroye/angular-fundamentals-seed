import { Passenger } from "./models/passenger.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PassengerDashboardService {

    constructor(private http: HttpClient){
      console.log(this.http);
    }

    getPassengers(): Passenger[] {
        return [
            { "id": 1, 
              "fname": "Bart", 
              "lname": "Peeters", 
              "checkedin": true, 
              "checkedInDate": 1546255457000, 
              "children": null},
            { "id": 2, 
              "fname": "Koen", 
              "lname": "Wouters", 
              "checkedin": true, 
              "checkedInDate": 1546241286000, 
              "children": [{"name": "Kim", "age": 12}, {"name": "Tim", "age": 16}]
            },
            { "id": 3, 
              "fname": "Kris", 
              "lname": "Wouters", 
              "checkedin": false, 
              "checkedInDate": null, 
              "children": null},
            { "id": 4, 
              "fname": "Niels", 
              "lname": "Destadsbader", 
              "checkedin": true, 
              "checkedInDate": 1546155985000, 
              "children": null}
          ];
    }
}