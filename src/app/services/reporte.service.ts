import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {


  getDataReportSexo(data: any[]): any {
    const masculino = data.filter((d) => d.sexo === 'Masculino').length;
    const femenino = data.filter((d) => d.sexo === 'Femenino').length;
    return {
      masculino,
      femenino
    }
  }

  getDataReportEdad(data: any[]): any {
    return data.reduce((acumulador, d) => {
      const { edad } = d;
      if (!acumulador[edad]) {
        acumulador[edad] = [];
      }
      acumulador[edad].push(d);
      return acumulador;
    }, {})
  }

  getDataReportFacultad(data:any[]):any{
    return data.reduce((acumulador, c) => {
      const { carrera } = c;
      if (!acumulador[carrera]) {
        acumulador[carrera] = [];
      }
      acumulador[carrera].push(c);
      return acumulador;
    }, {})
  }

  getCategoriasFacultad(data:any[]):any{
    return data.reduce((acumulador, c) => {
      const { id } = c;
      if (!acumulador[id]) {
        acumulador[id] = [];
      }
      acumulador[id].push(c);
      return acumulador;
    }, {})
  }

  getDataReportSemestre(data:any[]):any{
    return data.reduce((acumulador, c) => {
      const { semestre } = c;
      if (!acumulador[semestre]) {
        acumulador[semestre] = [];
      }
      acumulador[semestre].push(c);
      return acumulador;
    }, {})
  }

  getCategoriasSemestre(data:any[]):any{
    return data.reduce((acumulador, c) => {
      const { id } = c;
      if (!acumulador[id]) {
        acumulador[id] = [];
      }
      acumulador[id].push(c);
      return acumulador;
    }, {})
  }

  constructor() { }
}
