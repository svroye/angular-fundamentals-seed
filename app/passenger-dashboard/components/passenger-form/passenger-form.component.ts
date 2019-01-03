import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from "@angular/core";
import { Baggage } from '../../models/baggage.interface';



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
            <!-- RADIO BUTTONs-->
            <!--<div>
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
            </div> -->

            <!-- CHECKBOX -->
             <div>
                Checked in: 
                <label>
                    <input type="checkbox" name="checkedin" [ngModel]="passenger?.checkedin"
                            (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedin">
                Checked in date:
                <input type="number" name="checkedInDate" [ngModel]="passenger?.checkedInDate">
            </div>

            <div>
                Baggage: 
                <select name="baggage" [ngModel]="passenger?.baggage" >
                    <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === baggage">
                        {{ item.value }}
                    </option>
                </select>
                <select name="baggage" [ngModel]="passenger?.baggage" >
                    <option *ngFor="let item of baggage" [ngValue]="item.key">
                        {{ item.value }}
                    </option>
                </select>
            </div>
            {{ form.value | json }}
        </form>
    `
})
export class PassengerFormComponent {

    @Input()
    passenger: Passenger;

    baggage: Baggage[] = [
        {
            key: 'none',
            value: 'no baggage'
        },
        {
            key: 'hand-only',
            value: 'Hand baggage'
        },
        {
            key: 'hold-only',
            value: 'Hold baggage'
        },
        {
            key: 'hand-hold',
            value: 'Hand and hold baggage'
        }
]

    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn) {
            this.passenger.checkedInDate = Date.now();
        }
    }
}