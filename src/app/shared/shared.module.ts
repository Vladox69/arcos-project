import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    MatSidenavModule,
    MatListModule,
    NgApexchartsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SharedModule { }
