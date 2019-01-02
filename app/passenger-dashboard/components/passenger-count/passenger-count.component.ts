import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from "@angular/core";


@Component({
    selector: 'passenger-count',
    template: `
            <div>
                Total checked in passengers: {{ checkedInCount() }}/{{ items.length }}
            </div>
    `
})
export class PassengerCountComponent {

    @Input() items: Passenger[];

    checkedInCount(): number {
        let count = 0;
        if (this.items){
            count = this.items.filter( (passenger: Passenger) => passenger.checkedin).length;
        }
        return count;
    }
}