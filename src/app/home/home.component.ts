import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyInfo } from '../models/company-info';
import { SpacexService } from '../services/spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  companyInformations: CompanyInfo;
  companyInfosubscription: Subscription;

  constructor(private spacexService: SpacexService) { }

  ngOnInit() {
    this.companyInfosubscription = this.spacexService
    .getCompanyInfo()
    .subscribe(
      (res: CompanyInfo) => this.companyInformations = res
    );
  }

  ngOnDestroy() {
    this.companyInfosubscription.unsubscribe();
  }
}
