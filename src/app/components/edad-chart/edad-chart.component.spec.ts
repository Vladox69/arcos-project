import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdadChartComponent } from './edad-chart.component';

describe('EdadChartComponent', () => {
  let component: EdadChartComponent;
  let fixture: ComponentFixture<EdadChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdadChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdadChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
