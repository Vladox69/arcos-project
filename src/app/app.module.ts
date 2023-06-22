import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatosPageComponent } from './pages/datos-page/datos-page.component';
import { EstadisticasPageComponent } from './pages/estadisticas-page/estadisticas-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { EdadChartComponent } from './components/edad-chart/edad-chart.component';
import { SemestreChartComponent } from './components/semestre-chart/semestre-chart.component';
import { FacultadChartComponent } from './components/facultad-chart/facultad-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    NavbarComponent,
    FooterComponent,
    DatosPageComponent,
    EstadisticasPageComponent,
    PieChartComponent,
    EdadChartComponent,
    SemestreChartComponent,
    FacultadChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
