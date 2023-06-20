import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosPageComponent } from './pages/datos-page/datos-page.component';

const routes: Routes = [
  {path:'reportes',component:DatosPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
