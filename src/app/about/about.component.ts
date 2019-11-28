import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ApiInfo } from '../models/api-info';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  /*
  apiInfo: ApiInfo;
  apiInfoSubscription: Subscription;
  gitHubAccount: any;
  gitHubAccountSubscription: Subscription;
  */
  constructor() { }

  ngOnInit() {}

  ngOnDestroy() {}
}
