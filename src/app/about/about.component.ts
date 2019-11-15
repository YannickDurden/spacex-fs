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
  apiInfo: ApiInfo;
  apiInfoSubscription: Subscription;
  gitHubAccount: any;
  gitHubAccountSubscription: Subscription;

  constructor(private spacexService: SpacexService, private githubService: GithubService) { }

  ngOnInit() {
    this.apiInfoSubscription = this.spacexService
    .getApiInfo()
    .subscribe(
      (res: ApiInfo) => this.apiInfo = res
    );

    this.apiInfoSubscription = this.githubService
      .getGitHubAccount()
      .subscribe(
        res => this.gitHubAccount = res
      );
  }

  ngOnDestroy() {
    if (this.gitHubAccountSubscription) {
      this.gitHubAccountSubscription.unsubscribe();
    }

    if (this.apiInfoSubscription) {
      this.apiInfoSubscription.unsubscribe();
    }
  }
}
