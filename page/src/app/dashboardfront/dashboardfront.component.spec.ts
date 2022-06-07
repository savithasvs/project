import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfrontComponent } from './dashboardfront.component';

describe('DashboardfrontComponent', () => {
  let component: DashboardfrontComponent;
  let fixture: ComponentFixture<DashboardfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
