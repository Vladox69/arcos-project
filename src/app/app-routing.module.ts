import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosPageComponent } from './pages/datos-page/datos-page.component';
import { EstadisticasPageComponent } from './pages/estadisticas-page/estadisticas-page.component';

const routes: Routes = [
  {path:'reportes',component:EstadisticasPageComponent},
  {path:'',component:DatosPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
