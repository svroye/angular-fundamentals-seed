import { HttpResponse } from '@angular/common/http';
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
        this.passengerService.getPassengers().subscribe( 
            (data: Passenger[]) => {
                this.passengers = data;
                console.log("Using Observables");
            },
            (error: any) => console.log(error)
        );

        // ALTERNATIVE (NOT RECOMMENDED): PROMISES
        // this.passengerService.getPassengersWithPromise().then(
        //     (data: Passenger[]) => {
        //         this.passengers = data
        //         console.log("Using Promises");
        //     }
        // )
    }

    handleRemove(event: Passenger) {
        this.passengerService.deletePassenger(event).subscribe(
            (data: Passenger) => {
                this.passengers = this.passengers.filter( 
                    (passenger: Passenger) => event.id !== passenger.id);
            }
        )
        
    }
     
    handleEdit(event: Passenger) {
        this.passengerService.updatePassenger(event).subscribe(
            (data: HttpResponse<Passenger>) => {
                console.log(data);
                console.log(data.status)
                this.passengers = this.passengers.map( (passenger : Passenger) => {
                     if (passenger.id === event.id) {
                         passenger = Object.assign({}, passenger, event); 
                     }
                     return passenger;
                });
            }
        );
    }
}