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
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          {{i}}: {{passenger.fname}}
        </li>
      </ul>

      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{i}}: {{passenger.fname}}
          </li>
        </template>
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