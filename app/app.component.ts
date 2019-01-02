import { Component } from '@angular/core';



interface Passenger {
  id: number;
  fname: string;
  lname: string;
  checkedin: boolean;
  checkedInDate: number | null;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class="app">
      <h1>Passengers</h1>
      <!-- add a single class -->
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
        <span class="status" [class.checkedin]="passenger.checkedin"></span>
          {{i}}: {{passenger.fname}}
          <p>{{ passenger | json }} </p>
          <div class="date">Checked in date: 
          {{passenger.checkedInDate ? (passenger.checkedInDate | date: 'hh:mm:ss d/M/y') : 'Not checked in'}}</div>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {"id": 1, "fname": "Bart", "lname": "Peeters", "checkedin": true, "checkedInDate": 1546255457000},
    {"id": 2, "fname": "Koen", "lname": "Wouters", "checkedin": true, "checkedInDate": 1546241286000},
    {"id": 3, "fname": "Kris", "lname": "Wouters", "checkedin": false, "checkedInDate": null},
    {"id": 4, "fname": "Niels", "lname": "Destadsbader", "checkedin": true, "checkedInDate": 1546155985000}
  ];

}