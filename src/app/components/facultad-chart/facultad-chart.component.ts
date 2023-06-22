import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
import { DataService } from 'src/app/services/data.service';
import { ReporteService } from 'src/app/services/reporte.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-facultad-chart',
  templateUrl: './facultad-chart.component.html',
  styleUrls: ['./facultad-chart.component.css']
})
export class FacultadChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  carreras: any[] = [];
  categorias: string[] = [];
  cantidades: number[] = [];

  getData(): void {
    this.dataS.getCarrera().subscribe({
      next: (v) => {
        this.carreras = this.reporteS.getCategoriasFacultad(v);
        this.dataS.getData().subscribe({
          next: (v) => {
            const data = this.reporteS.getDataReportFacultad(v);
            Object.keys(this.carreras).forEach((carr: any) => {
              const carreraCount = !!data[carr] ? data[carr].length : 0;
              this.categorias = [...this.categorias, this.carreras[carr][0].nombre]
              this.cantidades = [...this.cantidades, carreraCount]

            });
           this.crearGrafico(this.categorias,this.cantidades);
          }
        })
      }
    })


  }

  crearGrafico(cat:string[]=[],cant:number[]=[]):void{
    this.chartOptions = {
      series: [
        {
          name: "",
          data: cant
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
        categories: cat
      }
    };
  }


  constructor(private readonly reporteS: ReporteService, private readonly dataS: DataService) {
    this.crearGrafico();
  }
  ngOnInit(): void {
    this.getData();
  }
}
