import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AbacusClockComponent} from './abacus-clock.component';

describe('AbacusClockComponent', () => {
  let component: AbacusClockComponent;
  let fixture: ComponentFixture<AbacusClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbacusClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AbacusClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
