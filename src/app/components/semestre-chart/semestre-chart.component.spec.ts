import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestreChartComponent } from './semestre-chart.component';

describe('SemestreChartComponent', () => {
  let component: SemestreChartComponent;
  let fixture: ComponentFixture<SemestreChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemestreChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemestreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
