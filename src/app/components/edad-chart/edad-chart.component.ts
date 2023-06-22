import { Component, OnInit, ViewChild } from "@angular/core";
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
import { DataService } from "src/app/services/data.service";
import { ReporteService } from "src/app/services/reporte.service";

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
  selector: 'app-edad-chart',
  templateUrl: './edad-chart.component.html',
  styleUrls: ['./edad-chart.component.css']
})
export class EdadChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

  categorias:string[]=[];
  edades:number[]=[];

  getData(): void {
    this.dataS.getData().subscribe({
      next: (v) => {
        const data = this.reporteS.getDataReportEdad(v);
        Object.keys(data).forEach((edad) => {
          this.categorias=[...this.categorias,edad]
          this.edades=[...this.edades,data[edad].length]
        });
       this.crearGrafica(this.categorias,this.edades);
      }
    })
  }

  crearGrafica(cat:string[]=[],eda:number[]=[]):void{
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: eda
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
        categories: cat
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
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

  constructor(private readonly dataS: DataService, private readonly reporteS: ReporteService) {
    this.crearGrafica();
  }
  ngOnInit(): void {
    this.getData();
  }
}
