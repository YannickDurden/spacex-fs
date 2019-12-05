import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Rocket } from '../models/rocket';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit, OnDestroy {
  rockets: Array<Rocket>;
  rocketsSubscription: Subscription;
  imageRand: string;

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    this.rocketsSubscription = this.spacexService
      .getRockets()
      .subscribe(
        (res: Array<Rocket>) => this.rockets = res
      );
  }

  ngOnDestroy() {
    this.rocketsSubscription.unsubscribe();
  }

  displayRandomImage(images) {
    const length = images.length;

    return length > 0 ? images[0] : null;
  }

  isActive(active: boolean): string {
    return active ? 'active' : 'retired';
  }
}
