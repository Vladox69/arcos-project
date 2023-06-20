import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-semestre-chart',
  templateUrl: './semestre-chart.component.html',
  styleUrls: ['./semestre-chart.component.css']
})
export class SemestreChartComponent {
  @ViewChild("chart") chart: ChartComponent|undefined;
  public chartOptions: Partial<ChartOptions>|any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 45]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Primero",
          "Segundo",
          "Tercero",
          "Cuarto",
          "Quinto",
          "Sexto",
          "Septimo",
          "Octavo",
          "Noveno",
        ]
      },
      yaxis: {
        title: {
          text: "Personas"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          
        }
      }
    };
  }
}
