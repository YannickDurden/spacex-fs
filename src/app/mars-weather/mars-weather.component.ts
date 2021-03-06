import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-mars-weather',
  templateUrl: './mars-weather.component.html',
  styleUrls: ['./mars-weather.component.css']
})
export class MarsWeatherComponent implements OnInit, OnDestroy {
  pipe = new DatePipe('en-US');
  weather: any;
  minTemp: Array<number> = [];
  maxTemp: Array<number> = [];
  minSpeedWind: Array<number> = [];
  maxSpeedWind: Array<number> = [];
  marsWeatherSubscription: Subscription;
  isTempDisplayed = false;
  title = 'Wind Speed (meter per second)';
  dataAvailable = false;
  dataMissing = false;

  // Chart
  barChartOptions: ChartOptions;
  barChartLabels: Label[] = [];
  barChartData: Array<ChartDataSets> = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.marsWeatherSubscription = this.nasaService
      .getMarsWeather()
      .subscribe(
        res => {
          this.weather = res;
          this.hydrataDataChart(res);
          this.hydratelabelsChart(res);
          this.barChartOptions = this.createChartOptions('end', 'end');
          this.barChartData = [
            { data: this.minSpeedWind, label: 'Min' },
            { data: this.maxSpeedWind, label: 'Max' }
          ];
        }
    );
  }

  ngOnDestroy() {
    this.marsWeatherSubscription.unsubscribe();
  }

  hydrataDataChart(weather) {
    weather.sol_keys.forEach(v => {
      const at = weather[v].AT;
      const mnTemp = at ? at.mn : 0;
      const mxTemp = at ? at.mx : 0;
      const hws = weather[v].HWS;
      const mnSpeedWind = hws ? hws.mn : 0;
      const mxSpeedWind = hws ? hws.mx : 0;

      if (hws === undefined) {
        this.dataMissing = true;
      }

      if (at === undefined) {
        this.dataMissing = true;
      }

      this.minTemp.push(mnTemp.toFixed(2));
      this.maxTemp.push(mxTemp.toFixed(2));

      this.maxSpeedWind.push(mxSpeedWind.toFixed(2));
      this.minSpeedWind.push(mnSpeedWind.toFixed(2));

      this.dataAvailable = true;
    });
  }

  hydratelabelsChart(weather) {
    weather.sol_keys.forEach(v => {
      const date = weather[v].First_UTC;
      const convertDate = this.pipe.transform(date, 'mediumDate');

      this.barChartLabels.push(convertDate);
    });
  }

  toggleData() {
    this.isTempDisplayed = !this.isTempDisplayed;
    this.title = this.isTempDisplayed ? 'Air Temperature (celsius)' : 'Wind Speed (meter per second)';

    const align: Align = this.isTempDisplayed ? 'start' : 'end';
    const anchor: Anchor = this.isTempDisplayed ? 'start' : 'end';
    this.barChartOptions = this.createChartOptions(align, anchor);

    const dataMin = this.isTempDisplayed ? this.minTemp : this.minSpeedWind;
    const dataMax = this.isTempDisplayed ? this.maxTemp : this.maxSpeedWind;

    this.barChartData = [
      { data: dataMin, label: 'Min' },
      { data: dataMax, label: 'Max' }
    ];
  }

  createChartOptions(
    anchorValue: Anchor,
    alignValue: Align
  ): ChartOptions {
    return {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
        datalabels: {
          anchor: anchorValue,
          align: alignValue
        }
      }
    };
  }
}
