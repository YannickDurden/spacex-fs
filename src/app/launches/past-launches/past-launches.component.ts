import { Component, OnInit, OnDestroy } from "@angular/core";
import { SpacexService } from "../../services/spacex.service";
import { Subscription } from "rxjs";
import { Launch } from '../../models/launch';

@Component({
  selector: "app-past-launches",
  templateUrl: "./past-launches.component.html",
  styleUrls: ["./past-launches.component.css"]
})
export class PastLaunchesComponent implements OnInit, OnDestroy {
  pastLaunches: Array<Launch>;
  pastLaunchesSub: Subscription;

  constructor(private spacexService: SpacexService) {}

  ngOnInit() {
    this.pastLaunchesSub = this.spacexService
      .getPastLaunches()
      .subscribe((res: Array<Launch>) => {
        this.pastLaunches = res.sort((a, b) => {
          if (a.flight_number > b.flight_number) {
            return -1;
          }

          if (a.flight_number < b.flight_number) {
            return -1;
          }

          return 0;
        });
      });
  }

  ngOnDestroy() {
    this.pastLaunchesSub.unsubscribe();
  }

  trackByFunction(index, item) {
    return !item ? null : index;
  }

  isLaunchSuccess(launchSuccess: boolean) {
    return launchSuccess ? 'success' : 'failed';
  }
}
