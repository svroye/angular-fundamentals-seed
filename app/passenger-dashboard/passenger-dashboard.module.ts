import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

    
}