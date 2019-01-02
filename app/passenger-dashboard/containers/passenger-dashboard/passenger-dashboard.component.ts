import { PassengerDashboardService } from './../../passenger-dashboard.service';
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

    constructor(private passengerService: PassengerDashboardService){}
    
    ngOnInit(): void {
        this.passengers = this.passengerService.getPassengers();
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