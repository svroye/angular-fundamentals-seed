import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h1>Passengers</h1>
            <ul>
            <li *ngFor="let passenger of passengers; let i = index">
            <span class="status" [class.checkedin]="passenger.checkedin"></span>
                {{i}}: {{passenger.fname}}
                <div class="date">Checked in date: 
                {{passenger.checkedInDate ? (passenger.checkedInDate | date: 'hh:mm:ss d/M/y') : 'Not checked in'}}</div>
                <p> Children : {{ passenger.children?.length || 0}}
            </li>
            </ul>
        </div>
    ` 
})
export class PassengerDashboardComponent implements OnInit{
    
    passengers: Passenger[];
    
    ngOnInit(): void {
        this.passengers = [
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