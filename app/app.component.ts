import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class="app">
      <input type='text' #username>
      <button (click)="handleClick(username.value)">Get value</button>
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {

  name: string = "Steven";

  handleClick(value: string) {
    this.name = value;
  }
}