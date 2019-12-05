import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RocketComponent } from './rocket/rocket.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AboutComponent } from './about/about.component';
import { MarsWeatherComponent } from './mars-weather/mars-weather.component';
import { ChartsModule } from 'ng2-charts';
import { LaunchesComponent } from './launches/launches.component';
import { PastLaunchesComponent } from './launches/past-launches/past-launches.component';
import { NextLaunchComponent } from './launches/next-launch/next-launch.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RocketComponent,
    RocketsComponent,
    AboutComponent,
    MarsWeatherComponent,
    LaunchesComponent,
    PastLaunchesComponent,
    NextLaunchComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
