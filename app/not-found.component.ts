import { Component } from "@angular/core";


@Component({
    selector: 'app-not-found',
    template: `
        <div>
            Page not found. Click <a routerLink="/">here</a> to go back to the home page
        </div>
    `
})
export class NotFoundComponent {

}