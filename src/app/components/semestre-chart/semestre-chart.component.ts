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
  selector: 'app-semestre-chart',
  templateUrl: './semestre-chart.component.html',
  styleUrls: ['./semestre-chart.component.css']
})
export class SemestreChartComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;

  semestres: any[] = []

  categorias: string[] = [];
  cantidades: number[] = [];

  crearGrafico(cat: string[] = [], cant: number[] = []): void {

    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: cant
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

  getData(): void {
    this.dataS.getSemestre().subscribe({
      next: (v) => {
        this.semestres = this.reporteS.getCategoriasSemestre(v);
        this.dataS.getData().subscribe({
          next: (v) => {
            const data = this.reporteS.getDataReportSemestre(v);
            Object.keys(this.semestres).forEach((sem: any) => {
              const semCount = !!data[sem] ? data[sem].length : 0;
              this.categorias = [...this.categorias, this.semestres[sem][0].nombre]
              this.cantidades = [...this.cantidades, semCount]

            });
            this.crearGrafico(this.categorias, this.cantidades);
          }
        })
      }
    })


  }

  constructor(private readonly reporteS: ReporteService, private readonly dataS: DataService) {
    this.crearGrafico();
  }
  ngOnInit(): void {
    this.getData();
  }


}
