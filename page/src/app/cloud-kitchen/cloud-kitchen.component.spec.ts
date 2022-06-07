import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudKitchenComponent } from './cloud-kitchen.component';

describe('CloudKitchenComponent', () => {
  let component: CloudKitchenComponent;
  let fixture: ComponentFixture<CloudKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
