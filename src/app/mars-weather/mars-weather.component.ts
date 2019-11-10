import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.component.html',
  styleUrls: ['./mars-weather.component.css']
})
export class MarsWeatherComponent implements OnInit, OnDestroy, AfterViewInit {
  weather: any;
  avgTemp: any;
  marsWeatherSubscription: Subscription;
  chart: Chart;
  @ViewChild('chart', {static: true}) canvas: ElementRef<any>;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.marsWeatherSubscription = this.nasaService
    .getMarsWeather()
    .subscribe(
      res => {
        this.weather = res;
        this.avgTemp = this.averageTemperaturePerSol(res);
        // Chart
        this.chart = new Chart(this.canvas.nativeElement, {
          // The type of chart we want to create
          type: 'line',

          // The data for our dataset
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [0, 10, 5, 2, 20, 30, 45]
              }]
          },

          // Configuration options go here
          options: {}
        });
        this.chart.update();
      }
    );
  }

  ngOnDestroy() {
    this.marsWeatherSubscription.unsubscribe();
  }

  averageTemperaturePerSol(weather) {
    const avgTempPerSolArr = [];

    weather.sol_keys.forEach(v => {
      const avgTempPerSol = {};
      // tslint:disable-next-line: no-string-literal
      avgTempPerSol['sol'] = v;
      // tslint:disable-next-line: no-string-literal
      avgTempPerSol['avg'] = weather[v].AT.av;
      avgTempPerSolArr.push(avgTempPerSol);
    });

    return avgTempPerSolArr;
  }
}
