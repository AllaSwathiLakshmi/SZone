import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDesign2Component } from './homepage-design2.component';

describe('HomepageDesign2Component', () => {
  let component: HomepageDesign2Component;
  let fixture: ComponentFixture<HomepageDesign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageDesign2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageDesign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
