import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PassengerDashboardComponent
    ],
    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {

    
}