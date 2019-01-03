import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from "@angular/core";



@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{ passenger | json}}
            <div>
                Passenger id: 
                <input type="number" name="id" [ngModel]="passenger?.id">
            </div>
            <div>
                Passenger first name: 
                <input type="text" name="fname" [ngModel]="passenger?.fname">
            </div>
            <div>
                Passenger last name: 
                <input type="text" name="lname" [ngModel]="passenger?.lname">
            </div>
            <div>
                Checked in: 
                <label>
                    <input type="radio" name="checkedin" [ngModel]="passenger?.checkedin" [value]="true"
                            (ngModelChange)="toggleCheckIn($event)">
                    Yes
                </label>
                <label>
                    <input type="radio" name="checkedin" [ngModel]="passenger?.checkedin" [value]="false"
                            (ngModelChange)="toggleCheckIn($event)">
                    No
                </label>
            </div>

            <div *ngIf="form.value.checkedin">
                Checked in date:
                <input type="number" name="checkedInDate" [ngModel]="passenger?.checkedInDate">
            </div>
            {{ form.value | json }}
        </form>
    `
})
export class PassengerFormComponent {

    @Input()
    passenger: Passenger;

    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn) {
            this.passenger.checkedInDate = Date.now();
        }
    }
}