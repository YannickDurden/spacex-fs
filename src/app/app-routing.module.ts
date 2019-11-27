import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RocketComponent } from './rocket/rocket.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AboutComponent } from './about/about.component';
import { LaunchesComponent } from './launches/launches.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rocket/:rocketId',
    component: RocketComponent
  },
  {
    path: 'rockets',
    component: RocketsComponent
  },
  {
    path: 'launches',
    component: LaunchesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
