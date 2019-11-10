import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Rocket } from '../models/rocket';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit, OnDestroy {
  rocket: Rocket;
  rocketSubscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spacexService: SpacexService
  ) {}

  ngOnInit() {
    this.rocketSubscription = this.getRocket().subscribe(
      (res: Rocket) => (this.rocket = res)
    );
  }

  getRocket() {
    return this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('rocketId')),
      switchMap(rocketId => this.spacexService.getRocketById(rocketId))
    );
  }

  ngOnDestroy() {
    this.rocketSubscription.unsubscribe();
  }
}
