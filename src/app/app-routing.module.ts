import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking/booking.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/header', pathMatch: 'full' },
    { path: 'booking', component: BookingComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}