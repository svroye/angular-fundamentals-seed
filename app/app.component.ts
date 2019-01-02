import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: `
    <div class="app">
      <h1 [innerHtml]="title"></h1> 
      <input type='text' [value]="name" (blur)="handleBlur($event)" (input)="handleInput($event)">
      <button (click)="handleClick()">Change name</button>
      <div>
        {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {

  title: string;
  name: string = "Steven";

  constructor(){
    this.title = 'Ultimate Angular'; 
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Moto";
  }
}