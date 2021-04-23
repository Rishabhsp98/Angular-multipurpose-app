import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { WeatherComponent } from 'src/app/weather/weather.component';
import { CalcComponent } from './weather/calc/calc.component';
import { UsersComponent } from './weather/users/users.component';
import {MultComponent} from './weather/mult/mult.component';

const routes: Routes = [
  
{ path: 'weather', component: WeatherComponent },
{ path: 'addition', component: CalcComponent},
{ path: 'users', component: UsersComponent},
{ path: 'multiply', component: MultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
