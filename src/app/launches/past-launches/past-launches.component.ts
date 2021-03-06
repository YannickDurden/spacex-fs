import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Subscription } from 'rxjs';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-past-launches',
  templateUrl: './past-launches.component.html',
  styleUrls: ['./past-launches.component.css']
})
export class PastLaunchesComponent implements OnInit, OnDestroy {
  pastLaunches: Array<Launch>;
  pastLaunchesSub: Subscription;

  constructor(private spacexService: SpacexService) {}

  ngOnInit() {
    this.pastLaunchesSub = this.spacexService
      .getPastLaunches()
      .subscribe((res: Array<Launch>) => {
        // this.pastLaunches = res.sort((a, b) => a.flight_number < b.flight_number ? 1 : 0);
        const length = res.length;
        this.pastLaunches = res.slice(length - 9);
        this.pastLaunches.sort((a, b) => b.flight_number - a.flight_number);
      });
  }

  ngOnDestroy() {
    this.pastLaunchesSub.unsubscribe();
  }

  trackByFunction(index, item) {
    return !item ? null : index;
  }

  isLaunchSuccess(launchSuccess: boolean): string {
    return launchSuccess ? 'success' : 'failed';
  }
}
