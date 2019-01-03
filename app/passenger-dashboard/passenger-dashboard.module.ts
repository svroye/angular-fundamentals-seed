import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';


@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent,
        PassengerViewerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
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