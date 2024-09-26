import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarenergyComponent } from './solarenergy.component';

describe('SolarenergyComponent', () => {
  let component: SolarenergyComponent;
  let fixture: ComponentFixture<SolarenergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarenergyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolarenergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
