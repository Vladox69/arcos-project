import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    MatSidenavModule,
    MatListModule,
    NgApexchartsModule
  ]
})
export class SharedModule { }
