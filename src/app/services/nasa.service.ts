import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private httpClient: HttpClient) {}

  getMarsWeather() {
    const url = `https://api.nasa.gov/insight_weather/?api_key=${environment.nasa_key}&feedtype=json&ver=1.0`;

    return this.httpClient.get(url);
  }
}
