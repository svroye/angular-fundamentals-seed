import { Passenger } from './../../models/passenger.interface';
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Baggage } from '../../models/baggage.interface';



@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate (ngSubmit)="handleSubmit(form.value, form.valid)">
            <div>
                Passenger id: 
                <input type="number" name="id" [ngModel]="passenger?.id" required #id="ngModel">
                <div *ngIf="id.errors?.required && id.dirty" class="error">
                    Passenger id is required
                </div>
            </div>
            <div>
                Passenger first name: 
                <input type="text" name="fname" required [ngModel]="passenger?.fname" #fname="ngModel">
                <div *ngIf="fname.errors?.required && fname.dirty" class="error">
                    Passenger first name is required
                </div>
            </div>
            <div>
                Passenger last name: 
                <input type="text" name="lname" required #lname="ngModel" [ngModel]="passenger?.lname">
                <div *ngIf="lname.errors?.required && lname.dirty" class="error">
                    Passenger last name is required
                </div>
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
            </div>
            <button type="submit" [disabled]="form.invalid">
                Update passenger
            </button>
        </form>
    `
})
export class PassengerFormComponent {

    @Input()
    passenger: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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
    
    handleSubmit(passenger: Passenger, isValid: boolean) {
        if (isValid) {
            this.update.emit(passenger);
        }
    }
}