import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDisplayComponent } from './database-display.component';

describe('DatabaseDisplayComponent', () => {
  let component: DatabaseDisplayComponent;
  let fixture: ComponentFixture<DatabaseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
