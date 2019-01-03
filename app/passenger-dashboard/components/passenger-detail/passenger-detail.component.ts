import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checkedin]="passenger.checkedin"></span> 
            <div *ngIf="editing">
                <input type="text" [value]="passenger.fname" (input)="onNameChange($event)">
            </div>
            <div *ngIf="!editing">
                {{passenger.fname}}
            </div>
            <div>
                <div class="date">Checked in date: 
                {{passenger.checkedInDate ? (passenger.checkedInDate | date: 'hh:mm:ss d/M/y') : 'Not checked in'}}
            </div>
            <div>
                <p> Children : {{ passenger.children?.length || 0}} </p>
            <div>
            <button (click)="toggleEdit()">
                {{editing ? 'Save' : 'Edit'}}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
        `
})
export class PassengerDetailComponent implements OnChanges{

    @Input() passenger: Passenger;
    editing: boolean = false;

    @Output() remove: EventEmitter<any> = new EventEmitter();
    @Output() edit: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes): void {
        if (changes.passenger) {
            // create a copy of the passenger for local use
            this.passenger = Object.assign({}, changes.passenger.currentValue);
        }
        
    }

    onNameChange(event: any) {
        this.passenger.fname = event.target.value;
    }

    toggleEdit(){
        if (this.editing) {
            this.edit.emit(this.passenger);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.passenger);
    }
    
}