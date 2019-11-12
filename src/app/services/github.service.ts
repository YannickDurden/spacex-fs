import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getGitHubAccount() {
    const url = 'https://api.github.com/users/' + environment.github_account;

    return this.httpClient.get(url);
  }
}
