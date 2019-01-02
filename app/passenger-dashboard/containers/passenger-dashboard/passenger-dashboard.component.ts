import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline passengers</h3>
            <passenger-count [items]="passengers"></passenger-count>
            <passenger-detail *ngFor="let passenger of passengers" [passenger]="passenger" 
                (remove)="handleRemove($event)" (edit)="handleEdit($event)">
            </passenger-detail>
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

    handleRemove(event: Passenger) {
        console.log("REMOVE: ", event);
        this.passengers = this.passengers.filter( (passenger: Passenger) => event.id !== passenger.id);
    }
     
    handleEdit(event: Passenger) {
        console.log("EDIT: ", event);
        this.passengers = this.passengers.map( (passenger : Passenger) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event); 
            }
            return passenger;
        })
        console.log(this.passengers);
    }
}