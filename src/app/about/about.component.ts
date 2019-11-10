import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiInfo } from '../models/api-info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  apiInfo: ApiInfo;
  apiInfoSubscription: Subscription;
  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    this.apiInfoSubscription = this.spacexService
    .getApiInfo()
    .subscribe(
      (res: ApiInfo) => this.apiInfo = res
    );
  }

  ngOnDestroy() {
    this.apiInfoSubscription.unsubscribe();
  }
}
