import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  constructor(private httpClient: HttpClient) {}

  getCompanyInfo() {
    const url = 'https://api.spacexdata.com/v3/info';

    return this.httpClient.get(url);
  }

  getApiInfo() {
    const url = 'https://api.spacexdata.com/v3';

    return this.httpClient.get(url);
  }

  getRockets() {
    const url = 'https://api.spacexdata.com/v3/rockets';

    return this.httpClient.get(url);
  }

  getRocketById(rocketId: string) {
    const url = 'https://api.spacexdata.com/v3/rockets/' + rocketId;

    return this.httpClient.get(url);
  }

  getNextLaunch() {
  const url = 'https://api.spacexdata.com/v3/launches/next';

  return this.httpClient.get(url);
  }

  getPastLaunches() {
    const url = 'https://api.spacexdata.com/v3/launches/past';

    return this.httpClient.get(url);
  }

  getMission(missionId: string) {
    const url = 'https://api.spacexdata.com/v3/missions/'+ missionId;

    return this.httpClient.get(url);
  }
}
