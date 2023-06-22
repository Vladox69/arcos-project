import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadChartComponent } from './facultad-chart.component';

describe('FacultadChartComponent', () => {
  let component: FacultadChartComponent;
  let fixture: ComponentFixture<FacultadChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultadChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
