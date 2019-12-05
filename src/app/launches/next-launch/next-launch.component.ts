import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-next-launch',
  templateUrl: './next-launch.component.html',
  styleUrls: ['./next-launch.component.css']
})
export class NextLaunchComponent implements OnInit, OnDestroy {
  nextLaunch: Launch;
  nextLaunchSub: Subscription;

  mission: Mission;
  missionSub: Subscription;

  constructor(private spacexService: SpacexService) {}

  ngOnInit() {
    this.nextLaunchSub = this.spacexService
      .getNextLaunch()
      .subscribe(
        (res: Launch) => (this.nextLaunch = res),
        error => console.log(error),
        () => {
          const missionId = this.nextLaunch.mission_id[0];
          if (missionId) {
            this.missionSub = this.spacexService
            .getMission(missionId)
            .subscribe((res: Mission) => (this.mission = res));
          }
        }
    );
  }

  ngOnDestroy() {
    if (this.nextLaunchSub !== undefined && !this.nextLaunchSub.closed) {
      this.nextLaunchSub.unsubscribe();
    }
    if (this.missionSub !== undefined && !this.missionSub.closed) {
      this.missionSub.unsubscribe();
    }
  }

  customersAsString(customers: Array<string>): string {
    return customers.join(', ');
  }
}
