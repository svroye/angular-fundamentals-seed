import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fname: string;
  lname: string;
  checkedin: boolean;
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
        </li>
      </ul>

      <h1>Passengers</h1>
      <!-- adding multiple classes using ngClass -->
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
        <span class="status" [ngClass]="{'checkedin': passenger.checkedin}"></span>
          {{i}}: {{passenger.fname}}
        </li>
      </ul>

      <h1>Passengers</h1>
      <!-- add a single style-->
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [style.background]="passenger.checkedin ? '#2ecc71' : '#c0392b'" ></span>
          {{i}}: {{passenger.fname}}
        </li>
      </ul>

      <h1>Passengers</h1>
      <!-- adding multiple styles using ngStyle -->
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [ngStyle]="{'background': (passenger.checkedin ? '#2ecc71' : '#c0392b')}"></span>
          {{i}}: {{passenger.fname}}
        </li>
      </ul>

    </div>
  `
})
export class AppComponent {

  passengers: Passenger[] = [
    {"id": 1, "fname": "Bart", "lname": "Peeters", "checkedin": true},
    {"id": 2, "fname": "Koen", "lname": "Wouters", "checkedin": true},
    {"id": 3, "fname": "Kris", "lname": "Wouters", "checkedin": false},
    {"id": 4, "fname": "Niels", "lname": "Destadsbader", "checkedin": true}
  ];

}