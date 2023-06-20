import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-estadisticas-page',
  templateUrl: './estadisticas-page.component.html',
  styleUrls: ['./estadisticas-page.component.css']
})
export class EstadisticasPageComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "",
          data: [4, 5, 6, 7, 8, 9]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Sistemas Computacionales e Informáticos",
          "Ingeniería Industrial",
          "Electrónica y Telecomunicaciones",
          "Industrial en Procesos de Automatización",
          "Tecnologías de la información",
          "Software"
        ]
      }
    };
  }
}
