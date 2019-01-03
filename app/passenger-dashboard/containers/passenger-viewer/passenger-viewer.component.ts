import { Passenger } from './../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';
import { Component, OnInit } from "@angular/core";
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <button (click)="goBack()">&lsaquo; Go back</button>
            <passenger-form
                [passenger]="passenger" (update)="onUpdatePassenger($event)">
            </passenger-form>
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {
    
    passenger: Passenger;
    
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService){}
    
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id')
        this.passengerService.getPassenger(id)
            .subscribe( (data: Passenger) => this.passenger = data)
    }

    onUpdatePassenger(passenger: Passenger) {
        this.passengerService.updatePassenger(passenger)
            .subscribe( 
                (data: HttpResponse<Passenger>) =>  this.passenger = Object.assign({}, this.passenger, passenger)
            );
    }

    goBack() {
        this.router.navigate(['/passengers']);
    }

}