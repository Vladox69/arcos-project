import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { DataService } from 'src/app/services/data.service';
import { ReporteService } from 'src/app/services/reporte.service';
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> |any;

  getData():void{
    this.dataS.getData().subscribe({
      next:(v)=> {
        const {masculino,femenino}= this.reportesS.getDataReportSexo(v);
        this.crearGraficas(masculino,femenino);
      },
    })

  }

  crearGraficas(masculino:number=0,femenino:number=0):void{
    this.chartOptions = {
      series: [masculino, femenino],
      chart: {
        width: 500,
        type: "pie"
      },
      labels: ["Masculino", "Femenino"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  constructor(private readonly reportesS:ReporteService,private readonly dataS:DataService) {
    this.crearGraficas();
  }
  ngOnInit(): void {
   this.getData();
  }
}
