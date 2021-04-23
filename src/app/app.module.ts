import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from 'src/app/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CalcComponent } from './weather/calc/calc.component';
import { CalcService } from './calc.service';
import { UsersComponent } from './weather/users/users.component';
import { MultComponent } from './weather/mult/mult.component';
import { MultService } from './mult.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CalcComponent,
    UsersComponent,
    MultComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [WeatherService,CalcService,MultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
