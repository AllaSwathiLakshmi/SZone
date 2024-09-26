import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySystemsComponent } from './security-systems.component';

describe('SecuritySystemsComponent', () => {
  let component: SecuritySystemsComponent;
  let fixture: ComponentFixture<SecuritySystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuritySystemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecuritySystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
