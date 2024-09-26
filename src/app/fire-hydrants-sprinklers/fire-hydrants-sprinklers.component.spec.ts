import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireHydrantsSprinklersComponent } from './fire-hydrants-sprinklers.component';

describe('FireHydrantsSprinklersComponent', () => {
  let component: FireHydrantsSprinklersComponent;
  let fixture: ComponentFixture<FireHydrantsSprinklersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireHydrantsSprinklersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireHydrantsSprinklersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
